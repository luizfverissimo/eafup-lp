import Head from 'next/head'
import { Button } from '../components/Button';

import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { OrganizationCard } from '../components/OrganizationCard';
import { Section } from '../components/Section';
import { SpeakerCard } from '../components/SpeakerCard';

import config from '../config/config.json'

export default function Home() {
  const {
    title,
    eventDate,
    registerDate,
    eventAgenda,
    speakers,
    subscriptionLink,
    certificatesLink,
    isCertificatesOpen, 
    organization,
    organizationEmail
  } = config

  return (
    <>
    <Head>
      <title>{title}</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#ffc40d"/>
      <meta name="theme-color" content="#ffffff"></meta>

      <meta name="title" content={title}/>
      <meta name="description" content={`${registerDate} -  Encontro Acadêmico de Farmácia da Universidade Positivo - Campus Londrina. Participe!`}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://eafup.vercel.app/"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={`${registerDate} -  Encontro Acadêmico de Farmácia da Universidade Positivo - Campus Londrina. Participe!`}/>
      <meta property="og:image" content="https://eafup.vercel.app/meta-img.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://eafup.vercel.app/"/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content="Inscrições até dia XX/XX -  Encontro Acadêmico de Farmácia da Universidade Positivo - Campus Londrina. Participe!"/>
      <meta property="twitter:image" content="https://eafup.vercel.app/meta-img.jpg"></meta>
    </Head>
    <Navbar/>

    <Hero eventDate={eventDate} registerDate={registerDate}/>
    <Section title="Programação" id="events">
      {eventAgenda.map((event, index) => <EventCard key={index} date={event.date} presentations={event.presentations} />)}
    </Section>
    <Section title="Palestrantes" id="speakers">
      {speakers.map((speaker, index) => <SpeakerCard key={index} speaker={speaker} />)}
    </Section>
    <Section title="Inscrições" id="registration">
      <iframe src={subscriptionLink} width="840" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
    </Section>
    <Section title="Certificados" id="certificates">
      <div className="flex flex-col items-center w-full gap-4">
        <p className="-mt-8 text-center text-theme-black">
          Os certificados de participação serão <br/> disponibilizados no link abaixo após o final do evento
        </p>
        {isCertificatesOpen ? (
          <Button href={certificatesLink} >Baixar certificados aqui →</Button>
        ) : (
          <p className="font-sans font-bold text-slate-400">Certificados ainda não disponíveis, volte mais tarde. 😭</p>
        )}
      </div>
    </Section>
    <Section title="Organização" id="organization">
      {organization.map((member, index) => <OrganizationCard key={index} member={member} />)}
      <div className="flex flex-col items-center w-full">
        <h4 className="mb-4 font-sans text-2xl font-bold text-center text-theme-black">Entrar em contato <br/> com a organização</h4>
        <Button href={`mailto:${organizationEmail}`}>{organizationEmail}</Button>
        <img className="w-[250px] mt-8" src="/pos_logo.png" alt="Logotipo da Universidade Positivo" />
      </div>
    </Section>
    <Footer/>
    </>
  )
}
