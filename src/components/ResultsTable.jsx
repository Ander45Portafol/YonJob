export function ResultsTable() {
  const people = [
    {
      n: "1",
      title: "Habilidades blandas",
      descripcion: "La sección de habilidades blandas, no es clara.",
      porcentaje: "76%",
    },
    {
      n: "2",
      title: "Habilidades técnicas",
      descripcion: "La sección de habilidades blandas, no es clara.",
      porcentaje: "20%",
    },
  ];
  return (
    <div className="gap-4 px-3 sm:px-6 lg:px-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto"></div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none"></div>
      </div>
      <div className="">
        <h5 className="font-bold text-lg text-[#3459F4]">Resultados</h5>
      </div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="relative min-w-full divide-y divide-[#6A9AFD]">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-[#051E51] sm:pl-6 lg:pl-8"
                  >
                    N
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-bold text-[#051E51]"
                  >
                    Titulo
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-bold text-[#051E51]"
                  >
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-[#051E51]"
                  >
                    Porcentaje de error
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#6A9AFD] bg-white">
                {people.map((item) => (
                  <tr key={item.n}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-black sm:pl-6 lg:pl-8">
                      {item.n}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">
                      {item.title}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-pre-line text-gray-400">
                      {item.descripcion}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-400">
                      {item.porcentaje}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
