
export function OrganizationCard({member}) {
  const {img, name, resume} = member
  return (
    <div className="flex flex-col items-center w-full max-w-[300px] gap-4">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
        <img src={img} className="w-full h-full"/>
      </div>
      <h4 className="font-sans text-xl font-bold text-center text-theme-black">{name}</h4>
      <p className="font-sans text-base font-normal text-theme-black">{resume}</p>
    </div>
  )
}
