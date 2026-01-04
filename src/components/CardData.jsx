
export function CardData({title, camp, color,children}) {
    const bgColor = color?.startsWith("#") ? color : `#${color}`;
  return (
    <div
      className="flex items-center gap-4 p-5 rounded-2xl text-white m-2 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-center bg-white/20 rounded-xl p-3">
        {children}
      </div>

      <div className="flex flex-col leading-tight">
        <p className="text-4xl font-extrabold -mb-1">{ camp }</p>
        <p className="text-lg font-light">{ title }</p>
      </div>
    </div>
  );    
}
