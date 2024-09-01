import QCarreiraLogo from './QCarreiraLogo';
import RhfLogo from './RhfLogo';
import SuperEstagiosLogo from './SuperEstagiosLogo';

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="sr-only">
        Plataforma Super Estágios, RHF Talentos e QCarreira, Maceió, AL.
      </h1>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/superestagios.al.maceio/"
          target="_blank"
          rel="noreferrer"
        >
          <SuperEstagiosLogo />
        </a>
        <p className="mx-auto max-w-xl text-center text-xl !leading-tight lg:text-4xl">
          Especializada na administração de estágios, conectando estudantes a
          empresas para oportunidades de aprendizado prático.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          rel="noreferrer"
        >
          <RhfLogo />
        </a>
        <p className="mx-auto max-w-xl text-center text-xl !leading-tight lg:text-4xl">
          Atua na seleção e recrutamento de profissionais, oferecendo soluções
          de RH para empresas de diferentes portes e setores.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          rel="noreferrer"
          className="mb-3"
        >
          <QCarreiraLogo />
        </a>
        <p className="mx-auto max-w-xl text-center text-xl !leading-tight lg:text-4xl">
          Focada em desenvolvimento de carreira, oferece serviços de consultoria
          e orientação para profissionais que buscam crescimento e transição na
          carreira.
        </p>
      </div>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  );
}
