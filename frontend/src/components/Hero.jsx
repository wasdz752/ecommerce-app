import { assets } from "../assets/assets";

function Hero() {
  return (
    <section className="hero-section w-full grid grid-rows-[1fr_2fr] sm:grid-cols-[1fr_1fr] sm:grid-rows-1 border border-2-[var(--darkBorderColor)]">
        <div className="hero-content flex items-center justify-center px-[15vw] sm:px-[9vw]">
            <div className="hero-content-inner w-full h-auto flex flex-col items-center sm:items-start gap-3">
                <p className="flex flex-row text-[3vw] sm:text-[18px] items-center gap-3 font-[500] text-[var(--primaryTextColor)]"><span className="w-[50px] h-[2px] bg-[var(--primaryTextColor)] right-[110%] top-[50%] block"></span> OUR BESTSELLERS</p>
                <h1 className="font-prata text-[5vw] md:text-[2.5rem] lg:text-[3rem] text-[var(--primaryTextColor)]">Latest Arrivals</h1>
                <p className="flex flex-row text-[3vw] sm:text-[18px] items-center gap-3 font-[600]">SHOP NOW <span className="w-[50px] h-[2px] bg-[var(--primaryTextColor)] left-[110%] top-[50%] block"></span></p>
            </div>
        </div>
        <div className="hero-image">
            <div className="hero-image-inner w-full h-full">
                <img className="w-auto h-auto object-cover" src={assets.hero_img} alt="Forever Hero Image"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
