export function SpeakerCard({speaker}) {
  const {img, name, resume} = speaker
  return (
    <div className="flex flex-col items-center w-full max-w-[500px] gap-4">
      <div className="w-[138px] h-[138px] rounded-full overflow-hidden">
        <img alt={`Foto do palestrante – ${name}`} src={img} className="w-full h-full"/>
      </div>
      <h4 className="font-sans text-2xl font-bold text-theme-green">{name}</h4>
      <p className="font-sans text-base font-normal text-theme-black">{resume}</p>
    </div>
  )
}
