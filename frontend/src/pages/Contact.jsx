import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import SubscribeMsg from "../components/SubscribeMsg";

const Contact = () => {
  return (
    <main className='flex flex-col gap-10'>
      <section className="contact-us py-7 flex flex-col items-center m-auto">
        <h2 className="contact_us_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2 mb-10">
                <span className="text-[var(--secondaryTextColor)]">CONTACT</span> US
                <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
        </h2>

        <div className='contact-us-container flex flex-col md:flex-row'>
          <div className='contact-us-image md:w-auto h-auto w-full'>
            <img src={assets.contact_img} className='md:min-w-120 md:w-120 h-full' alt="Contact Us Image"/>
          </div>

          <div className="contact-us-text flex flex-col items-start justify-between md:gap-3 gap-7 px-10 py-15 text-[var(--secondaryTextColor)]">
              <h3 className="font-[600] text-[20px] text-[var(--primaryTextColor)]">Our Store</h3>
              <p>54709 Willms Station <br/> Suite 350, Washington, USA</p>
              <p>Tel: (415) 555-0132 wbr <br/> Email: admin@forever.com</p>
              <h3 className="font-[600] text-[20px] text-[var(--primaryTextColor)]">Careers at Forever</h3>
              <p>Learn more about our teams and job openings.</p>

              <Link className="px-7 py-3 border border-2-[var(--darkBorderColor)] flex flex-col items-center justify-center">
                <p className="text-black text-center">Explore Jobs</p>
              </Link>
          </div>
        </div>
      </section>

      <SubscribeMsg />
    </main>
  )
}

export default Contact
