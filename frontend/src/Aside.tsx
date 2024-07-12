import {
  Hexagon,
  Settings,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip"
import { objects } from "./navbar_items"

function AsideItem({ Icon, label, href }: Readonly<{ Icon: React.ElementType, label: string, href: string}>) {
    return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
          </TooltipProvider>
    )
}



export function Aside() {
  return (
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <a
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Hexagon className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Hexagon CRM</span>
          </a>
            {objects.map((obj) => (
                <AsideItem key={obj.label} Icon={obj.Icon} label={obj.label} href={obj.href} />
            ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
  )
}
