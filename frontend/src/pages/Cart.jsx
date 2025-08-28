import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

function Cart () {
  const { cartData, list, loading } = useContext(ShopContext);

  return (
    <section className="cart-wrapper w-full h-auto py-10 flex flex-col gap-5"> 
      <h2 className="related_products_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2">
          <span className="text-[var(--secondaryTextColor)]">YOUR</span> CART
          <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
      </h2>

      { loading ? <h1 className="text-xl font-[600]">Loading...</h1> : 
      <div className="cart-items-container">
      {Object.entries(cartData).map(([productId, cartItem], index) => {
        const product = list.find((product) => product._id === productId);
      
        if (!product) return null;
      
        return (
          <CartItem
            key={index}
            item={product}
            size={cartItem.size}
            quantity={cartItem.quantity}
          />
        );
      })}
      </div>
      }

      <CartTotal checkout={true}/>
    </section>
  )
}

export default Cart
