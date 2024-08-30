import AuthButton from "../components/AuthButton";

export default async function NavHeader() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex font-bold justify-center items-center gap-1">
            <img src="/codex_logo.svg" alt="Codex logo" className="h-8 w-8"/>
            <p>Codex App</p>
          </div>
          <AuthButton />
        </div>
      </nav>
  )}
