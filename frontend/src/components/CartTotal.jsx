import ShopContext from "../context/ShopContext";
import { useContext, useEffect } from "react";

export default function CartTotal({checkout}) {
    const { cartData, delivery_fee, currency, setTotalPrice, totalPrice, subTotal, setSubtotal, navigate } = useContext(ShopContext);

    useEffect(() => {
        let subtotal = 0;
        if (Object.keys(cartData).length > 0) {
            Object.values(cartData).map((cartItem) => {
                subtotal += parseInt(cartItem.price) * cartItem.quantity;
            });
        }
        setSubtotal(subtotal);
        setTotalPrice(subtotal + delivery_fee);
    }, [cartData, delivery_fee, subTotal]);

    return (
        <div className="cart-total-container w-full mt-10 flex flex-col items-end">
            <div className="cart-total-inner w-full sm:w-[450px] h-auto flex flex-col items-end gap-5">
                <h2 className="cart_totals_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2 text-start w-full">
                    <span className="text-[var(--secondaryTextColor)]">CART</span> TOTALS
                    <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
                </h2>

                <div className="cart-total-values flex flex-col w-full">
                    <div className="cart-subtotal px-3 py-2 border-b border-1-[var(--lightBorderColor)] flex flex-row justify-between">
                        <span className="text-[var(--secondaryTextColor)]">Subtotal:</span>
                        <span className="text-[var(--primaryTextColor)]">{currency}{subTotal.toFixed(2)}</span>
                    </div>

                    <div className="cart-shipping px-3 py-2 border-b border-1-[var(--lightBorderColor)] flex flex-row justify-between">
                        <span className="text-[var(--secondaryTextColor)]">Shipping:</span>
                        <span className="text-[var(--primaryTextColor)]">{currency}{delivery_fee.toFixed(2)}</span>
                    </div>

                    <div className="cart-total px-3 py-2 flex flex-row justify-between text-black font-[600]">
                        <span className="">Total:</span>
                        <span className="">{currency}{totalPrice.toFixed(2)}</span>
                    </div>
                </div>
 
                <button className={`cart-checkout-button text-[13px] sm:mr-0 ml-auto mr-auto sm:text-[15px] px-7 py-3 bg-black text-white cursor-pointer ${checkout ? "block" : "hidden"} ${Object.keys(cartData).length < 1 ? "pointer-events-none opacity-50 cursor-not-allowed  " : ""}`} onClick={() => {
                    setTotalPrice(subTotal + delivery_fee);
                    navigate("/place-order")
                }}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    )
}