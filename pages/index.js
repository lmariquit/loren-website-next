import Head from 'next/head'
import Image from 'next/image'
// import profilePic from '../public/lm-no-background.png'
import { Andika } from '@next/font/google'

const nameFont = Andika({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Loren Mariquit</title>
        <meta name="description" content="Loren Mariquit's Personal Website: The Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='home-content content'>
        <div className='content-well'>
          <div>
            <div className='home-content__greeting'>Hi, I'm</div>
            <div className={`home-content__name ${nameFont.className}`}>Loren Mariquit</div>
            <div className='home-content__description'>I'm a Software Developer</div>
          </div>
          {/* <Image className="home-content__pic" src={profilePic} alt="menu svg" height={1200} width={906} /> */}
        </div>
        {/* <Image width={670} height={500} src={profilePic} /> */}
      </main>
    </>
  )
}
