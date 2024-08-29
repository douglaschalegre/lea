import { Button } from "@/components/ui/button";
import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";
import Link from "next/link";

export default async function Index() {
  
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex font-bold justify-center items-center gap-1">
            <img src="/codex_logo.svg" alt="Codex logo" className="h-8 w-8"/>
            <p>Codex App</p>
          </div>
          <AuthButton />
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6 px-4 items-center">
          <h2 className="font-bold text-2xl mb-4">Inscreva-se agora e comece a ver vagas disponíveis!</h2>
          <Link href="/login">
            <Button>Registre-se</Button>
          </Link>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Construido por 💻{" "}
          <a
            href="https://www.instagram.com/dev.douglas/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Douglas Chalegre
          </a>
        </p>
      </footer>
    </div>
  );
}
