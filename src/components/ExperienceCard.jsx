import { StarIcon } from "@heroicons/react/24/solid";

export function ExperienceCard({
  namee,
  role,
  startDate,
  endDate,
  comments,
  grade,
}) {
  return (
    <div className="w-full rounded-lg border-2 border-[#5A91FF] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#051E51]">{namee}</h2>
          <p className="text-sm font-semibold text-[#5A91FF]">{role}</p>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon
              key={i}
              className={[
                "h-5 w-5",
                i + 1 <= grade ? "text-[#BDDF22]" : "text-gray-300",
              ].join(" ")}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="mb-2 text-sm text-[#5A91FF] font-semibold flex flex-row gap-4">
        <p>
          <span className="font-semibold text-[#051E51]">Fecha inicio:</span>
          {startDate}
        </p>
        <p>
          <span className="font-semibold text-[#051E51]">
            Fecha finalización:
          </span>
          {endDate}
        </p>
      </div>

      <p className="mt-4 text-sm font-semibold text-[#5A91FF] leading-relaxed">
        <span className="text-[#051E51]"> Comentarios: </span>
        {comments}
      </p>
    </div>
  );
}
