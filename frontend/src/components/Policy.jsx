import { assets } from "../assets/assets";

export default function Policy() {
    return (
        <section className="policy-wrapper w-full flex flex-col sm:flex-row items-center justify-between p-10 px-7 lg:px-[5vw] lg:gap-7 gap-y-15">
            <div className="policy-box flex flex-col items-center">
                <img src={assets.exchange_icon} className="w-auto h-12 mb-4"/>
                <h2 className="policy_title text-[14px] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] text-[var(--primaryTextColor)] font-[600] text-[1.5rem] mb-4 text-center">Easy Exchange Policy</h2>
                <p className="policy_description text-[var(--paragraphColor)] text-center text-[12px] sm:text-[15px]">
                    We offer hassle free exchange policy
                </p>
            </div>

            <div className="policy-box flex flex-col items-center">
                <img src={assets.quality_icon} className="w-auto h-12 mb-4"/>
                <h2 className="policy_title text-[14px] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] text-[var(--primaryTextColor)] font-[600] text-[1.5rem] mb-4 text-center">7 Days Return Policy</h2>
                <p className="policy_description text-[var(--paragraphColor)] text-center text-[12px] sm:text-[15px]">
                    We provide 7 days free return policy
                </p>
            </div>

            <div className="policy-box flex flex-col items-center">
                <img src={assets.support_img} className="w-auto h-12 mb-4"/>
                <h2 className="policy_title text-[14px] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] text-[var(--primaryTextColor)] font-[600] text-[1.5rem] mb-4 text-center">Best customer support</h2>
                <p className="policy_description text-[var(--paragraphColor)] text-center text-[12px] sm:text-[15px]">
                    We provide 24/7 customer support
                </p>
            </div>

        </section>
    )
}
