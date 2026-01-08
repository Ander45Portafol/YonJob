import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { JobCard } from "../components/JobCard";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function Opportunities() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="ms-4">
        <h5 className="font-bold text-4xl text-[#3459F4]">Oportunidades</h5>
        <h6 className="text-[#45C567]">Revisa y aplica a todo tipo de oportunidades.</h6>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-2/3 mt-2">
          <div className="relative">
            <MagnifyingGlassIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A91FF] pointer-events-none"
              aria-hidden="true"
            />

            <input
              id="buscar-pasantia"
              type="text"
              name="pasantia"
              required
              placeholder="Buscar pasantía"
              className="w-full rounded-md bg-[#E6EAEF] pl-10 pr-3 py-2 text-base text-[#5A91FF] placeholder:text-[#5A91FF] outline-1 outline-[#E6EAEF] focus:outline-2 focus:outline-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="rounded-lg content-center grid grid-cols-1 pb-4 mx-3 w-50 h-10 text-[#051E51]">
          <label htmlFor="location" className="block text-lg font-bold">
            Ciudades
          </label>
          <div className="mt-1 grid grid-cols-1 rounded-lg">
            <select
              id="location"
              name="location"
              className="col-start-1 bg-[#E6EAEF] row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base text-[#3459F4] outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 "
            >
              <option>Escoja una opción</option>
              <option>San Salvador</option>
              <option>La Libertad</option>
              <option>La Paz</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
        </div>

        <div className="rounded-lg content-center grid grid-cols-1 pb-4 mx-3 w-50 h-10 text-[#051E51]">
          <label htmlFor="category" className="block text-lg font-bold">
            Categorias
          </label>
          <div className="mt-1 grid grid-cols-1 rounded-lg">
            <select
              id="category"
              name="category"
              className="col-start-1 bg-[#E6EAEF] row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base text-[#3459F4] outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 "
            >
              <option>Escoja una opción</option>
              <option>Categoria 1</option>
              <option>Categoria 2</option>
              <option>Categoria 3</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <JobCard
          images="/Images/facebook.jpg"
          company="Facebook"
          date="20/11/2025"
          title="Analista de datos"
          description="Culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu..."
        />
      </div>
    </div>
  );
}
