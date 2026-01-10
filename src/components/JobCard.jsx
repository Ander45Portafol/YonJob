export function JobCard({ company, date, title, description, images }) {
  return (
    <div className="bg-[#E6EAEF] text-white rounded-lg shadow-md p-6 w-full max-w-md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={images}
            alt="Logo empresa"
            className="w-12 h-12 rounded-full object-cover bg-white"
          />
          <div>
            <h2 className="text-lg font-bold text-[#051E51]">{company}</h2>
            <h3 className="text-indigo-400 text-md font-medium">{title}</h3>
          </div>
        </div>

        <span className="text-sm text-[#45C567] whitespace-nowrap">{date}</span>
      </div>

      <p className="text-sm text-[#051E51] line-clamp-3">{description}</p>
    </div>
  );
}
