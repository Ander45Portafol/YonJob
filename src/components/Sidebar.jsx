import {
  HomeIcon,
  NewspaperIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  GlobeAsiaAustraliaIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li >
              <button className="bg-[#D9EEF3] text-[#5A91FF] w-full group flex gap-x-3 rounded-md p-3 text-sm/6 font-bold  transform-gpu transition-transform duration-200 ease-in-out hover:scale-110">
                <HomeIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Dashboard</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Datos</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            <li>
              <button className="mt-2 bg-transparent w-full text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <NewspaperIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">CV profesional</span>
              </button>

              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <BriefcaseIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Aplicaciones</span>
              </button>

              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md pt-3 px-3 text-sm/6 font-normal">
                <DocumentTextIcon
                  className="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span className="">Portafolio</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Pasantías</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <GlobeAsiaAustraliaIcon
                  className="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span className="">Oportunidades</span>
              </button>
            </li>
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <ChatBubbleOvalLeftEllipsisIcon
                  className="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span className="">Mensajes</span>
              </button>
            </li>
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <ChartBarSquareIcon
                  className="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span className="">Experiencias</span>
              </button>
            </li>
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
                <ClipboardDocumentCheckIcon
                  className="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span className="">Guardados</span>
              </button>
            </li>
          </ul>
        </li>
        <li className="mt-auto">
          <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal">
            <Cog6ToothIcon className="size-6 shrink-0" aria-hidden="true" />
            <span className="">Ajustes</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
