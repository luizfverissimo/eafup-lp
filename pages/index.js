import Head from 'next/head'
import { Button } from '../components/Button';
import { LogoFullBlack } from '../components/LogoFullBlack';
import { Navbar } from '../components/Navbar';
import config from '../config/config.md'


export default function Home({title, eventDate, registerDate}) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar/>

    <img src="/hero.jpg" className="relative object-cover w-full opacity-30 -z-10" />
    <section className="flex w-full mx-auto max-w-7xl h-[624px] justify-center flex-col gap-6 absolute">
      <LogoFullBlack />
      <h2 className="font-sans text-3xl text-theme-black max-w-[300px] font-light">{eventDate}</h2>
      <h3 className="text-2xl font-bold font-tans text-theme-green" >{registerDate}</h3>

      <div className="flex items-center gap-6">
        <Button>Inscreva-se</Button>
        <Button isPrimary={false}>Programação</Button>
      </div>
    </section>

    </>
  )
}


export async function getStaticProps() {
  const {html, attributes} = config

  return {
    props: {
      ...attributes
    }
  };
}
