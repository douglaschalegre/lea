import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { SubmitButton } from '../../components/forms/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/forms/label';
import { FormMessage, Message } from '@/components/forms/form-message';
import { encodedRedirect } from '@/utils/utils';
import { Checkbox } from '@/components/ui/checkbox';
import handleRequestError from '@/utils/requestError';

export default function Signup({
  searchParams,
}: Readonly<{ searchParams: Message }>) {
  const signUp = async (formData: FormData) => {
    'use server';
    const supabase = createClient();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();
    const cpf = formData.get('cpf')?.toString();
    const first_name = formData.get('first_name')?.toString();
    const last_name = formData.get('last_name')?.toString();
    const t = new Date(Date.now()).toISOString();

    if (!cpf || !first_name || !last_name || !email || !password) {
      return { error: 'Campo(s) obrigatório(s) não preenchido(s)' };
    }
    const { data: auth_data, error: auth_error } =
      await supabase.auth.getSession();

    if (!(auth_data.session === null)) {
      return encodedRedirect('success', '/dashboard', 'Você já está logado!');
    } else if (auth_error) {
      return handleRequestError(
        'error',
        '/signup',
        'Erro ao carregar sessão',
        auth_error,
      );
    }

    const { data: signup_data, error: signup_error } =
      await supabase.auth.signUp({
        email,
        password,
      });
    if (signup_error) {
      let msg =
        'Erro ao criar sua conta, entre em contato com um administrador';
      if (signup_error.message.includes('weak_password')) {
        msg = 'A senha deve possuir no mínimo 6 caracteres.';
      }
      if (signup_error.message.includes('email address: invalid format')) {
        msg = 'Endereço de email inválido.';
      }
      return handleRequestError('error', '/signup', msg, signup_error);
    }

    const { error: accounts_error } = await supabase.from('accounts').insert({
      cpf: cpf,
      first_name: first_name,
      last_name: last_name,
      created_at: t,
      auth_id: signup_data.session?.user.id,
    });

    if (accounts_error) {
      return handleRequestError(
        'error',
        '/signup',
        'Erro tentando criar "accounts"',
        accounts_error,
      );
    }

    return encodedRedirect(
      'success',
      '/dashboard',
      'Obrigado por fazer o cadastro! Agora você já está logado. Redirecionando para dashboard...',
    );
  };

  if ('message' in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
      <Link
        href="/"
        className="bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm text-foreground no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Voltar
      </Link>

      <form className="flex w-full max-w-md flex-col justify-center gap-2 text-foreground [&>input]:mb-6">
        <h1 className="text-2xl font-medium">Registre-se</h1>
        <p className="text text-sm text-foreground/60">
          Já possui uma conta?{' '}
          <Link className="font-medium text-blue-600 underline" href="/login">
            Entrar
          </Link>
        </p>
        <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="cpf">CPF</Label>
          <Input name="cpf" placeholder="12312312312" required />
          <Label htmlFor="first_name">Primeiro nome</Label>
          <Input type="text" name="first_name" placeholder="João" required />
          <Label htmlFor="last_name">Sobrenome</Label>
          <Input name="last_name" placeholder="Silva Nascimento" required />
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="seuemail@exemplo.com" required />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            minLength={6}
            required
          />
          <div className="items-top mb-6 flex space-x-2">
            <Checkbox id="terms1" required />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceitar termos e condições do cadastro.
              </label>
              <p className="text-sm text-muted-foreground">
                Ao aceitar você declara que está ciente que esses dados serão
                compartilhados entre as empresas Super Estágios, RHF Talentos e
                QCarreira.
              </p>
            </div>
          </div>
          <SubmitButton formAction={signUp} pendingText="Enviando cadastro...">
            Enviar
          </SubmitButton>
        </div>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}
