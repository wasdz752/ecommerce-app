import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestProducts from "../components/BestProducts";
import Policy from "../components/Policy";
import SubscribeMsg from "../components/SubscribeMsg";

const Home = () => {
  return (
    <main className="main_home flex flex-col gap-15">
      <Hero />
      <LatestCollection />
      <BestProducts />
      <Policy />
      <SubscribeMsg />
    </main>
  )
}

export default Home
