import AboutUs from '../components/AboutUs'
import ChooseUs from '../components/ChooseUs'
import SubscribeMsg from '../components/SubscribeMsg'

const About = () => {
  return (
    <main className='flex flex-col gap-10'>
      <AboutUs />
      <ChooseUs />
      <SubscribeMsg />
    </main>
  )
}

export default About
