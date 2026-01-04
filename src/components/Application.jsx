export function Application({imgs,names,role}){
    return (
  <div
    className="container flex flex-row items-center justify-between mx-auto sm:px-6 lg:px-6 bg-[#E6EAEF] rounded-xl p-3 m-3"
  >
    <div className="flex items-center space-x-4">
      <img className="w-16 h-16 object-contain" src={imgs} alt="icon" />
      <div>
        <h6 className="font-bold text-lg text-[#0E3266]">{names}</h6>
        <p className="font-semibold text-base text-[#5A91FF]">{ role }</p>
      </div>
    </div>

    <button
      type="button"
      className="flex items-center justify-center gap-x-1.5 rounded-md bg-[#5A91FF] px-3 py-2 text-sm text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    </button>
  </div>
    )

}