import { assets } from "../assets/assets";

function AboutUs() {
    return (
        <section className="about-us-container py-7 flex flex-col items-center">
            <h2 className="about_us_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2 mb-10">
                <span className="text-[var(--secondaryTextColor)]">ABOUT</span> US
                <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
            </h2>

            <div className="contact-us-content flex flex-col md:flex-row">
                <div className="contact-us-image h-auto">
                    <img src={assets.about_img} className="h-full w-300"/>
                </div>

                <div className="contact-us-text w-auto h-auto flex flex-col gap-4 p-10 text-[var(--paragraphColor)] justify-between">
                    <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

                    <h3 className="text-[var(--primaryTextColor)] font-[600] text-[18px] sm:text-[20px]">Our Mission</h3>

                    <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>

                </div>
            </div>
        </section>
    )
}

export default AboutUs