import Head from 'next/head'
import { Andika } from '@next/font/google'

const nameFont = Andika({
  subsets: ['latin'],
  weight: ['400']
})

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Loren</title>
        <meta name="description" content="Loren Mariquit's Personal Website: How to Contact Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='contact-content content'>
        <div className='content-well'>
          <div className={`content__title ${nameFont.className}`}>Contact Info</div>
          <div className='contact-wrapper'>
            <div className="contact__intro">Please feel free to contact me!</div>
            <form className="contact__form" method="POST" action="https://formspree.io/l.mariquit@gmail.com">
              <div>
                <label>Email</label>
                <textarea name="email" placeholder="Your email" rows="1" />
              </div>
              <br />
              <div>
                <label>Message</label>
                <textarea name="message" placeholder="Your message" />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
            <div className="contact__footer">Or simply email me at L.Mariquit@gmail.com</div>
          </div>
        </div>
      </main>
    </>
  )
}
