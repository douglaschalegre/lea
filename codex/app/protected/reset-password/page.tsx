import { FormMessage, Message } from '@/components/forms/form-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/forms/label';
import { SubmitButton } from '@/components/forms/submit-button';
import { createClient } from '@/utils/supabase/server';
import { encodedRedirect } from '@/utils/utils';

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  const resetPassword = async (formData: FormData) => {
    'use server';
    const supabase = createClient();

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!password || !confirmPassword) {
      encodedRedirect(
        'error',
        '/protected/reset-password',
        'Senha e confirme sua senha são obrigatórios',
      );
    }

    if (password !== confirmPassword) {
      encodedRedirect(
        'error',
        '/protected/reset-password',
        'As senhas não são idênticas',
      );
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      encodedRedirect(
        'error',
        '/protected/reset-password',
        'Ocorreu um erro ao atualizar a senha',
      );
    }

    encodedRedirect(
      'success',
      '/protected/reset-password',
      'Senha atualizada com sucesso',
    );
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <form className="flex w-full max-w-md flex-col gap-2 p-4 [&>input]:mb-4">
        <h1 className="text-2xl font-medium">Crie sua nova senha</h1>
        <p className="text-sm text-foreground/60">
          Por favor insira sua nova senha abaixo.
        </p>

        <Label htmlFor="password">Nova senha</Label>
        <Input
          type="password"
          name="password"
          placeholder="Nova senha"
          required
        />
        <Label htmlFor="confirmPassword">Confirme a senha</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          required
        />
        <SubmitButton formAction={resetPassword}>
          Salvar nova senha
        </SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}
