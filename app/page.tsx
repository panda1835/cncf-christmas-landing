
import Header from '../components/Header'
import Hero from '../components/Hero'
import Pinetree from '../components/Pinetree'
import Letter from '../components/Letter'
import JoinUs from '../components/JoinUs'
import CTA from '../components/CTA'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pinetree />
        <Letter />
        <JoinUs />
        <CTA />
        <Partners />
      </main>
      <Footer />
    </>
  )
}