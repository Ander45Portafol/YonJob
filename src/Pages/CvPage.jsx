import { ResultsTable } from "../components/ResultsTable";
import { UploadCv } from "../components/UploadCv";

export function CvPage() {
  const sugerencias = [
    "Detallar y mejorar habilidades blandas.",
    "Especificar qué tipo de habilidades técnicas posee.",
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="ms-4">
        <h5 className="font-bold text-4xl text-[#3459F4]">Curriculum Vitae</h5>
        <h6 className="text-[#45C567]">
Crea, analiza y edita tu currículum para aplicar a oportunidades.         </h6>
      </div>
      <UploadCv />
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-lg bg-[#0E3266] px-6 py-2 text-sm font-semibold text-white hover:bg-[#5A91FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A91FF]"
        >
          Crear cv
        </button>
        <button
          type="button"
          className="rounded-lg ml-2 bg-[#0E3266] px-6 py-2 text-sm font-semibold text-white hover:bg-[#5A91FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A91FF]"
        >
          Analizar
        </button>
      </div>
      <div className="grid [grid-template-columns:2fr_1fr] gap-4">
        <ResultsTable />
        <div className="gap-4 ml-2">
          <div className="bg-white border border-[#5A91FF] rounded-md p-4 max-w-xl mx-auto mt-6 h-64">
            <div className="m-2">
              <h5 className="font-bold text-lg text-[#3459F4]">Sugerencias</h5>
            </div>
            <ul className="space-y-2">
              {sugerencias.map((item) => (
                <li className="flex items-start">
                  <span className="mt-1 mr-2 w-2 h-2 rounded-full bg-red-600"></span>
                  <span className="text-sm text-[#5A91FF]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
