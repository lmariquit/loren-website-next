import Head from 'next/head'
import { Andika } from '@next/font/google'

const nameFont = Andika({
  subsets: ['latin'],
  weight: ['400']
})

export default function Skills() {
  return (
    <>
      <Head>
        <title>Loren's Skills</title>
        <meta name="description" content="Loren Mariquit's Personal Website: My Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='skills-content content'>
        <div className='content-well'>
          <div className={`content__title ${nameFont.className}`}>Mah Skills</div>
        </div>
      </main>
    </>
  )
}
