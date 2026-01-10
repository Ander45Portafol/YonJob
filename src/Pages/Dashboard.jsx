import { ChatBubbleLeftRightIcon,ClipboardDocumentListIcon, DocumentCheckIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Application } from "../components/Application";
import { CardData } from "../components/CardData";

export function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-[#0E3266] text-white rounded-2xl flex items-center justify-between px-6 py-4">
        <div>
          <h2 className="text-4xl font-bold">Hi, Daniel</h2>
          <p>¿Listo para iniciar tu día con YonJob?</p>
        </div>
        <img src="/Images/Icon4.svg" className="w-46 h-auto object-contain" />
      </div>

      <div className="">
        <h2 className="text-[#5A91FF] text-xl font-bold m-2">Últimos 30 días</h2>

        <div className="w-full flex flex-wrap justify-between gap-4">
          <CardData title="Aplicaciones" camp="15" color="#3459F4">
            <ClipboardDocumentListIcon className="size-16 shrink-0" aria-hidden="true"/>
          </CardData>
          <CardData
            title="Respuestas"
            camp="12"
            color="#4DBD6A"
            img="/ResIcon.svg"
          >
            <DocumentCheckIcon className="size-16 shrink-0" aria-hidden="true"/>
          </CardData>
          <CardData title="Sugerencias" camp="3" color="#0E3266">
            <EnvelopeIcon className="size-16 shrink-0" aria-hidden="true"/>
          </CardData>
          <CardData title="Comentarios" camp="22" color="#E5555E">
            <ChatBubbleLeftRightIcon className="size-16 shrink-0" aria-hidden="true"/>
          </CardData>
        </div>
        <div className="">
          <h1 className="text-[#5A91FF] text-xl font-bold m-2">Aplicaciones</h1>
          <p className="m-2 text-sm text-[#5A91FF]">
            Se muestra el listado de las últimas aplicaciones realizadas
          </p>
        </div>
        <Application
          imgs="/Images/logo_rical.png"
          name="Ricaldone"
          role="Programador Jr."
        />
        <Application
          imgs="/Images/logo_rical.png"
          name="Red Intelfon"
          role="UI/UX designer."
        />
      </div>
    </div>
  );
}
