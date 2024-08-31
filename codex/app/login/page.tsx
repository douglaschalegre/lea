import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { SubmitButton } from '../../components/forms/submit-button';
import { Label } from '@/components/forms/label';
import { Input } from '@/components/ui/input';
import { FormMessage, Message } from '@/components/forms/form-message';
import { encodedRedirect } from '@/utils/utils';

export default function Login({
  searchParams,
}: Readonly<{ searchParams: Message }>) {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return encodedRedirect(
        'error',
        '/login',
        'Não foi possível autenticar o usuário',
      );
    }
    return redirect('/dashboard');
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center p-4">
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

      <form className="flex w-full max-w-md flex-1 flex-col justify-center gap-2 p-4 text-foreground [&>input]:mb-6">
        <h1 className="text-2xl font-medium">Entrar</h1>
        <p className="text-sm text-foreground/60">
          Ainda não possui uma conta?{' '}
          <Link className="font-medium text-blue-600 underline" href="/signup">
            Registre-se
          </Link>
        </p>
        <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="seuemail@example.com" required />
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>

            <Link
              className="text-sm text-blue-600 underline"
              href="/forgot-password"
            >
              Esqueceu a sua senha?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton formAction={signIn} pendingText="Entrando...">
            Entrar
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
