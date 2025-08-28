function SubscribeMsg() {
    
    return (
        <section className="newsletter-container w-full h-auto flex flex-col gap-5 items-center mb-10">
            <div className="newsletter-header w-full flex flex-col items-center">
                <h2 className="newsletter_title sm:text-[1.5rem] text-[1rem] text-[var(--primaryTextColor)] font-[500] mb-3">Subscribe now & get 20% off</h2>
                <p className="newsletter_description sm:text-[1rem] text-[14px] text-[var(--paragraphColor)] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="newsletter-message w-full h-auto flex flex-col items-center">
                <form className="w-full h-auto sm:w-[50%] flex">
                    <input required className="w-full py-3 px-2 sm:flex-1 border border-1-[#e5e7eb] outline-none" type="email" placeholder="Enter your email" />
                    <button type="submit" className="subscribe-button bg-black text-white min-w-35 w-35 py-3 text-[14px] cursor-pointer">SUBSCRIBE</button>
                </form>
            </div>
        </section>
    )
}

export default SubscribeMsg;