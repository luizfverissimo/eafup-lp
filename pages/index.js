import Head from 'next/head'
import { Button } from '../components/Button';

import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { OrganizationCard } from '../components/OrganizationCard';
import { Section } from '../components/Section';
import { SpeakerCard } from '../components/speakerCard';

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
      <iframe src={subscriptionLink} width="840" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
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
