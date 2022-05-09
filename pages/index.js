import Head from 'next/head'
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

    <section className="flex w-full mx-auto max-w-7xl h-[624px] justify-center flex-col">
      <LogoFullBlack />
      <h2>{eventDate}</h2>
      <h3>{registerDate}</h3>

      <div>
        
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
