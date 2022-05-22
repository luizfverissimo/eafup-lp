
export function EventCard({date, presentations}) {
  return (
    <div className="flex flex-col max-w-[500px] items-center rounded-[16px] shadow-2xl overflow-hidden">
    <h3 className="w-full p-3 text-2xl font-bold text-center bg-theme-black text-theme-white">{date}</h3>
    <ul className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
      {presentations.map((presentation, index) => (
        <li key={index} className="flex items-center gap-8">
          <span className="text-3xl w-[60px] font-bold text-theme-green leading-7">{presentation.hour}</span>
          <div>
            <p className="font-sans text-base font-normal text-theme-black">{presentation.presentationTitle}</p>
            <p className="font-sans text-base font-bold text-theme-black">{presentation.speaker}</p>
          </div>
        </li>        
      ))}
    </ul>
  </div>
  )
}
