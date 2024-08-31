import QCarreiraLogo from './QCarreiraLogo';
import RhfLogo from './RhfLogo';
import SuperEstagiosLogo from './SuperEstagiosLogo';

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://www.instagram.com/superestagios.al.maceio/"
          target="_blank"
          rel="noreferrer"
        >
          <SuperEstagiosLogo />
        </a>
        <span className="h-6 rotate-45 border-l" />
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          rel="noreferrer"
        >
          <RhfLogo />
        </a>
        <span className="h-6 rotate-45 border-l" />
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          rel="noreferrer"
        >
          <QCarreiraLogo />
        </a>
      </div>
      <h1 className="sr-only">
        Plataforma Super Estágios, RHF Talentos e QCarreira, Maceió, AL.
      </h1>
      <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        Recrutamento e seleção, treinamento, consultoria, RH e gestão é com{' '}
        <a
          href="https://www.instagram.com/superestagios.al.maceio/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Super Estágios
        </a>
        ,{' '}
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          RHF Talentos
        </a>{' '}
        e{' '}
        <a
          href="https://www.instagram.com/rhftalentos_maceio_jatiuca/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          QCarreira
        </a>
        .
      </p>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  );
}
