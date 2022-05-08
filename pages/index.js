import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import config from '../config/config.md'


export default function Home({title}) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>

    <Navbar/>

    </>
  )
}


export async function getStaticProps() {
  const {html, attributes: { title }} = config

  return {
    props: {
      title
    }
  };
}
