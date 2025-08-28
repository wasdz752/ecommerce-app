export default function ChooseUs() {
    return (
        <section className="choose-us-container py-7 flex flex-col items-center">
            <h2 className="choose_us_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2 mb-10">
                <span className="text-[var(--secondaryTextColor)]">WHY</span> CHOOSE US
                <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
            </h2>

            <div className="features-wrapper w-full h-auto flex flex-col md:flex-row gap-y-5">
                <div className="feature-box w-full h-auto border border-1-[var(--lightBorderColor)] py-10 px-5 md:p-15 ">
                    <h3 className="feature_title font-[600] text-[1rem] text-black mb-5">Quality Assurance:</h3>
                    <p className="feature_description text-[var(--secondaryTextColor)] text-[14px]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className="feature-box w-full h-auto border border-1-[var(--lightBorderColor)] py-10 px-5 md:p-15 ">
                    <h3 className="feature_title font-[600] text-[1rem] text-black mb-5">User-Friendly Experience:</h3>
                    <p className="feature_description text-[var(--secondaryTextColor)] text-[14px]">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className="feature-box w-full h-auto border border-1-[var(--lightBorderColor)] py-10 px-5 md:p-15">
                    <h3 className="feature_title font-[600] text-[1rem] text-black mb-5">Quality Assurance:</h3>
                    <p className="feature_description text-[var(--secondaryTextColor)] text-[14px]">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
        </section>
    )
}
