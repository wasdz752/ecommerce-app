import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

export default function CartItem({item, size, quantity}) {
    const { currency, setCartData, backendUrl } = useContext(ShopContext);

    const handleQuantityChange = async (e) => {
        const newQuantity = e.target.value;

        try {
            const response = await axios.put(backendUrl + "api/cart/update", {itemId : item._id, quantity: parseInt(newQuantity)}, {headers: {token: localStorage.getItem("token")}});

            if (response.data.success) {
                setCartData(response.data.cartData);
                toast.success(response.data.message);
            }
        } catch (e) {
            console.log(e)
            toast.error(e.message)
        }
    }

    const handleDeleteClick = async () => {
        try {
            const response = await axios.delete(backendUrl + "api/cart/delete", {
                data: { itemId: item._id }, 
                headers: { token: localStorage.getItem("token") }
            });

            if (response.data.success) {
                setCartData(response.data.cartData);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message)
            }
        } catch (e) {
            console.log(e.message);
            toast.error(e.message)
        }
    }

    return (
        <div className="cart-item w-full flex flex-row items-center justify-between h-auto py-4 border-b border-1-[var(--lightBorderColor)]">
            <div className="item-details h-auto w-[50%] flex flex-row gap-4">
                <img src={item.image[0]} className="h-auto w-20 sm:w-25" alt={`${item.name} Image ${item.image.indexOf(item.image[0]) + 1}`} />
        
                <div className="item-info">
                    <h2 className="item_name text-[var(--primaryTextColor)] font-[500] text-[14px] sm:text-[18px] mb-4">{item.name}</h2>

                    <div className="item-values flex flex-row items-center gap-2">
                        <p className="item_price text-[var(--primaryTextColor)] text-[1rem]">{currency}{item.price}</p>
                        <p className="item_size bg-[#F8FAFC] border-1 border-1-[var(--lightBorderColor)] w-6 w-6 sm:w-8 sm:h-8 flex items-center justify-center">{size}</p>
                    </div>
                </div>
            </div>

            <input type="number" className="item_quantity w-16 h-8 sm:w-20 sm:h-10 border border-1-[var(--lightBorderColor)] text-center text-[var(--primaryTextColor)] font-[500] text-[14px] sm:text-[16px]" onChange={handleQuantityChange} value={quantity} min={1} />
        
            <button className="remove-item w-5 h-auto cursor-pointer mr-[5vw] p-0" onClick={handleDeleteClick}><img src={assets.bin_icon} alt="Remove Item Bin Icon" className="w-full h-full cursor-pointer"/></button>
        </div>
    );    

}