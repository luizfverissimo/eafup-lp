export function Section({title, children, id}) {
  return (
    <section id={id} className="flex flex-col items-center w-full gap-6 mx-auto max-w-7xl">
      <h2 className="mt-16 mb-8 font-sans text-4xl font-bold text-center" >{title}</h2>
      <div className="flex flex-wrap justify-center w-full gap-16 px-4">
        {children}
      </div>
    </section>
  )
}
