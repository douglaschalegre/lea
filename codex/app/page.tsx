import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <div className="flex max-w-4xl flex-1 flex-col px-3">
        <Header />
        <main className="mb-6 flex flex-1 flex-col items-center gap-6 px-4">
          {!user && (
            <>
              <h2 className="mb-4 text-center text-2xl font-bold">
                Inscreva-se agora e comece a ver vagas disponíveis!
              </h2>
              <Link href="/signup">
                <Button>Registre-se</Button>
              </Link>
            </>
          )}
          {user && (
            <>
              <h2 className="mb-4 text-center text-2xl font-bold">
                Você já está logado, acesse a dashboard!
              </h2>
              <Link href="/dashboard">
                <Button>Acessar</Button>
              </Link>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
