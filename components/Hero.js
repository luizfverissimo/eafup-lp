import { Button } from "./Button";
import { LogoFullBlack } from "./LogoFullBlack";

export function Hero({eventDate, registerDate}) {
  return (
    <section className="flex w-full mx-auto h-[624px] justify-center flex-col relative">
    <img src="/hero-2.jpg" className="absolute inset-0 object-cover w-full h-full -z-10" />
    <div className="flex w-full mx-auto max-w-7xl h-[624px] justify-center flex-col gap-6">
      <LogoFullBlack />
      <h2 className="font-sans text-3xl text-theme-black max-w-[300px] font-light">{eventDate}</h2>
      <h3 className="text-2xl font-bold font-tans text-theme-green" >{registerDate}</h3>

      <div className="flex items-center gap-6">
        <Button>Inscreva-se</Button>
        <Button isPrimary={false}>Programação</Button>
      </div>
    </div>
  </section>
  )
}
