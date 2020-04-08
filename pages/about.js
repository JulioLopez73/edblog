import Head from 'next/head'

const About = () => (
  <div>
    <Head>
      <title>About | {process.env.SITE_NAME}</title>
    </Head>
    <main>
      <h1>About us (Acerca de nosotros)</h1>
      <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illo, error, similique ipsum facere aperiam temporibus autem quas tenetur commodi nesciunt. Illum placeat optio minima consequatur deserunt sunt voluptatum ea!</span>
    </main>
  </div>
)

export default About
