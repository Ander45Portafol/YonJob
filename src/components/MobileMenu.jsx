import {
  HomeIcon,
  NewspaperIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  LinkIcon,
  HandThumbUpIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export function MobileMenu() {
  return (
    <nav className="relative flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li>
              <button className="bg-[#D9EEF3] text-[#5A91FF]  w-full group flex gap-x-3 rounded-md p-3 text-sm/6 font-bold transform-gpu transition-transform duration-200 ease-in-out hover:scale-110">
                <HomeIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Dashboard</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Datos</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-bold">
                <NewspaperIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">CV profesional</span>
              </button>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-bold">
                <DocumentTextIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Experiencias</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Pasantías</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            <li>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-bold">
                <CheckBadgeIcon class="size-6 shrink-0" aria-hidden="true" />
                <span className="">Oportunidades</span>
              </button>
              <button className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-bold">
                <LinkIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Conexiones</span>
              </button>
              <button
                className="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-bold"
              >
                <HandThumbUpIcon className="size-6 shrink-0" aria-hidden="true" />
                <span className="">Recomendaciones</span>
              </button>
            </li>
          </ul>
        </li>
        <li className="mt-auto">
          <a
            href="#"
            className="group-mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-300 hover:bg-white/5 hover:text-white"
          >
            <Cog6ToothIcon
              className="size-6 shrink-0 text-gray-400 group-hover:text-white"
              aria-hidden="true"
            />
            Ajustes
          </a>
        </li>
      </ul>
    </nav>
  );
}
