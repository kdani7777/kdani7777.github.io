'use client'
import Typewriter from 'typewriter-effect';
import NavMobile from './ui/nav-mobile';
import Contact from './ui/contact-button';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <meta property="og:image" content="/thumbnail.svg" />
        <meta property="og:image:type" content="image/svg+xml" />
      </Head>
      <NavMobile />
      <ToastContainer />
      <div className="relative flex place-items-center z-[-1]">
        <Typewriter 
            onInit={(typewriter) => { 
              typewriter.pauseFor(1000)
                .typeString('hey there,') 
                .pauseFor(400)
                .typeString(' this is kush')
                .pauseFor(2500) 
                .deleteAll() 
                .typeString('i know,') 
                .pauseFor(400)
                .typeString(' the page is a bit empty right now ')
                .pauseFor(1000)
                .typeString('<br>but...')
                .pauseFor(2000)
                .deleteAll()
                .typeString('I\'ll be back with more soon.')
                .start();
            }} 
          />
      </div>
      <Contact />
    </main>
  )
}
