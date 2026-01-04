import {
  HomeIcon,
  NewspaperIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  return (
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li class="mt-2">
              <button
                to="/dashboard"
                class="bg-[#D9EEF3] text-[#5A91FF] w-full group flex gap-x-3 rounded-md p-3 text-sm/6 font-bold  transform-gpu transition-transform duration-200 ease-in-out hover:scale-110"
              >
                <HomeIcon class="size-6 shrink-0" aria-hidden="true" />
                <span class="">Dashboard</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs/6 font-semibold text-gray-400">Datos</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li>
              <button
                to="/cvPage"
                class="mt-2 bg-transparent w-full text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <NewspaperIcon class="size-6 shrink-0" aria-hidden="true" />
                <span class="">CV profesional</span>
              </button>

              <button
                to="/"
                class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <BriefcaseIcon class="size-6 shrink-0" aria-hidden="true" />
                <span class="">Aplicaciones</span>
              </button>

              <button
                to="/"
                class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <DocumentTextIcon class="size-6 shrink-0" aria-hidden="true" />
                <span class="">Portafolio</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs/6 font-semibold text-gray-400">Pasantías</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li>
              <button
                to="/opportunities"
                class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <GlobeAsiaAustraliaIcon
                  class="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span class="">Oportunidades</span>
              </button>
              <button
                to="/"
                class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <ChatBubbleOvalLeftEllipsisIcon
                  class="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span class="">Mensajes</span>
              </button>
              <button
                to="/"
                class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
              >
                <ChartBarSquareIcon
                  class="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span class="">Experiencias</span>
              </button>
            </li>
          </ul>
        </li>
        <li class="mt-auto">
          <button
            to="/"
            class="mt-2 bg-transparent text-[#D9EEF3] transform-gpu transition-transform duration-200 ease-in-out hover:scale-110 group flex gap-x-2 rounded-md p-3 text-sm/6 font-normal"
          >
            <Cog6ToothIcon class="size-6 shrink-0" aria-hidden="true" />
            <span class="">Ajustes</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
