import { useRef } from "react";

export function UploadCv() {
  const fileInput=useRef(null)

  const triggerUpload = () => {
    fileInput.current.click();
  };

  const handleFileUpload=(event)=>{
      const file = event.target.files[0];
  if (file) {
    console.log("Archivo seleccionado:", file.name);
  }
  }
  return (
    <div className="bg-[#E6EAEF] rounded-lg shadow-md p-6 w-full">
    <div
      className="border-2 border-dashed border-[#3459F4] rounded-lg flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-blue-50 transition"
      onClick={triggerUpload}
    >
      <p className="text-lg font-medium text-[#3459F4]">Subir CV</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 text-[#3459F4]"
      >
        <path
          d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z"
        />
        <path
          d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z"
        />
      </svg>

      <input
        type="file"
        ref={fileInput}
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  </div>
  );
}
