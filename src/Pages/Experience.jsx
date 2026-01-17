import { ExperienceCard } from "../components/ExperienceCard";

export function Experience(){
    return (
          <div className="w-full">
    <div className="ms-4">
      <h5 className="font-bold text-2xl text-[#3459F4]">Experiencias</h5>
      <h6 className="text-[#45C567]">
        Revisa las empresas donde realizo las pasantías
      </h6>
    </div>
    <div className="w-full mt-4">
      <ExperienceCard
        namee="Ricaldone"
        role="programador"
        startDate="20/12/2025"
        endDate="07/01/2026"
        comments="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
        grade="4"
      />
    </div>
  </div>
    )
}