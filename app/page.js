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
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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
