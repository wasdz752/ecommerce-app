import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function ProductItem({product}) {
    const { currency } = useContext(ShopContext);
    const { _id, image, name, price } = product;

    return (
        <Link className='product-item flex flex-col text-[14px] text-[var(--secondaryTextColor)] cursor-pointer' to={`/product/${_id}`}>
            <div className="overflow-hidden mb-3">
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={`${name} Image`} />
            </div>
            <h3 className="product_name mb-2">{name}</h3>
            <p className="product_price text-[var(--primaryTextColor)]">{currency}{price}</p>
        </Link>
    )
}

