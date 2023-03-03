import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Loren</title>
        <meta name="description" content="Loren Mariquit's Personal Website: How to Contact Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contact-content'>
        <div className='content-well'>
          Contact Info
        </div>
      </main>
    </>
  )
}
