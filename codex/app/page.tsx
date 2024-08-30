import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default async function Index() {
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6 px-4 items-center">
          <h2 className="font-bold text-2xl mb-4">Inscreva-se agora e comece a ver vagas disponíveis!</h2>
          <Link href="/login">
            <Button>Registre-se</Button>
          </Link>
        </main>
      </div>
    </div>
  );
}
