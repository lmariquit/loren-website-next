import Head from 'next/head'
import Image from 'next/image'
import { Andika } from '@next/font/google'
// import headshot from 'https://s3.amazonaws.com/lm-portfolio/lm_headshot.png'

const nameFont = Andika({
  subsets: ['latin'],
  weight: ['400']
})

export default function About() {
  return (
    <>
      <Head>
        <title>About Loren</title>
        <meta name="description" content="Loren Mariquit's Personal Website: The About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='about-content content'>
        <div className='content-well'>
          <div className={`about-content__title content__title ${nameFont.className}`}>About Me</div>
          <div className='about-wrapper'>
            <div className='about-left'>
              <Image
                className='about-content__pic'
                src='https://s3.amazonaws.com/lm-portfolio/lm_headshot.png'
                alt="image"
                width={256}
                height={280}
              />
            </div>
            <div className='about-right'>
              <div className='about-content__intro'>
                I'm a software developer based in NYC
              </div>
              <div className="about-content__bio">
                <div className="bio">
                  Before I was a developer, I worked in the financial industry as
                  an operations associate. While working at an investment bank, I
                  taught myself to program in VBA, eventually discovering that
                  innovation through programming was my passion.
                </div>
                <div className="bio">
                  In August 2018, I was accepted into Fullstack Academy in New
                  York, where I completed a rigorous curriculum in full-stack
                  Javascript and various other technologies pertinent to the tech
                  industry: Node.js, React, Git, Express.js, Sequelize, and much
                  more. From here, I hope to join a team as a full-stack developer
                  where I can leverage both my passion and skills to continue
                  innovating.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
