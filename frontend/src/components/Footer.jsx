import { assets } from "../assets/assets";

function Footer() {
    return (
        <footer className="footer w-full h-auto flex flex-col mt-15">
            <div className="footer-content grid grid-cols-1 grid-rows-[auto_auto_auto] sm:grid-cols-[2fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr] sm:grid-rows-1 gap-y-7 mb-10">
                <div className="flex flex-col items-start sm:pr-[9vw]">
                    <img src={assets.logo} className="min-w-[8rem] w-[8rem] mb-5" alt="Forever Logo Image"/>
                    <p className="text-[15px] text-[var(--paragraphColor)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-[20px] font-[500] text-[var(--primaryTextColor)] mb-5">COMPANY</h2>
                    <p className="text-[15px] text-[var(--paragraphColor)]">Home <br /> About us <br /> Delivery <br /> Privacy policy</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-[20px] font-[500] text-[var(--primaryTextColor)] mb-5">GET IN TOUCH</h2>
                    <p className="text-[15px] text-[var(--paragraphColor)]">+1-000-000-0000 <br /> greatstackdev@gmail.com</p>
                    <a href="instagram.com" className="text-[15px] text-[var(--paragraphColor)]">Instagram</a>
                </div>
            </div>

            <div className="footer-copyright flex-1 border-t border-1-[var(--lightBorderColor)] py-4">
                <p className="forever_copyright text-black font-[500] sm:text-[15px] text-[12px] text-center">Copyright 2024@ greatstack.dev - All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;