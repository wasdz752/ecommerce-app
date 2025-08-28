import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import ShopContext from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";
import axios from "axios";

function Product() {
  const { productId } = useParams();
  const { currency, setCartData, list, backendUrl, token } = useContext(ShopContext)
  const [size, setSize] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [displayedProduct, setDisplayedProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSize("");
    const product = list.find(product => product._id === productId);
    if (product) {
      setDisplayedProduct(product);
      setMainImage(product.image[0]);
      setProductImages(product.image);
      setSizes(product.sizes)
    }
  }, [productId, list]);

  const handleAddClick = async () => {
      if (!size) {
        return toast.error("Select a size to continue");
      }

      try {
        const response = await axios.post(backendUrl + "api/cart/add", {itemId: displayedProduct._id, size, price: displayedProduct.price}, {headers: {token}});

        if (response.data.success) {
          setCartData(response.data.cartData);
          toast.success(response.data.message);
          setSize('');
        } else {
          toast.error(response.data.message)
        }
      } catch (e) {
        console.log(e.message)
        toast.error(e.message)
      }
  }

  return (
    <section className="product-wrapper py-10 flex flex-col gap-15">
      <div className="product-details flex flex-col sm:flex-row gap-10 w-full h-auto">
        <div className="product-images flex flex-col sm:flex-row gap-3 w-full sm:w-[50%] h-auto">
          <div className="product-images-inner sm:order-1 order-2 h-auto grid grid-cols-4 grid-rows-1 sm:grid-cols-1 sm:grid-rows-[1fr_1fr_1fr_1fr] gap-4">
            {productImages.map((img) => (
              <img
                src={`${img}`}
                alt={`Product ${displayedProduct.name} Image`}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer w-auto sm:w-[9vw] h-auto ${img === mainImage ? "border-2 border-[var(--darkBorderColor)]" : ""}`}
              />
            ))}
          </div>

          <div className="product-main-image w-full h-auto sm:order-2 order-1">
            <img
              src={mainImage}
              className="w-full h-auto"
              alt={`Product ${displayedProduct.name} Image ${displayedProduct.image?.indexOf(mainImage) + 1}`}
            />
          </div>
        </div>

        <div className="product-info flex-1 flex flex-col justify-between w-auto h-auto py-3 pr-20">
            <h1 className="product_name sm:text-2xl text-xl font-[500] mb-3">{displayedProduct.name}</h1>
        
            <div className="product_rating flex flex-row gap-1 items-center mb-7">
              <img src={assets.star_icon} alt="Start Icon" className="w-3 h-auto inline-block" />
              <img src={assets.star_icon} alt="Start Icon" className="w-3 h-auto inline-block" />
              <img src={assets.star_icon} alt="Start Icon" className="w-3 h-auto inline-block" />
              <img src={assets.star_icon} alt="Start Icon" className="w-3 h-auto inline-block" />
              <img src={assets.star_icon} alt="Start Icon" className="w-3 h-auto inline-block" />
            
              <p className="ml-3">{`(122)`}</p>
            </div>

            <h2 className="product_price text-2xl font-[600]">{currency}{displayedProduct.price}</h2>

            <p className="product_description text-[var(--paragraphColor)] mt-4">{displayedProduct.description}</p>

            <div className="product_size flex flex-col items-start gap-5 mt-5">
              <h3 className="text-[var(--primaryTextColor)]">Select Size</h3>
              <div className="flex flex-row gap-2">
                {sizes.map((sizeOption, index) => (
                  <button
                    key={index}
                    className={`size-button cursor-pointer border-2 py-2 px-5 text-[var(--primaryTextColor)] text-sm bg-[#F3F4F6] ${size === sizeOption ? "border-[#F6B386]" : "border-[var(--borderColor)]  text-[var(--primaryTextColor)]"}`}
                    onClick={() => setSize(sizeOption)}
                  >
                    {sizeOption}
                  </button>
                ))}
              </div>

              <button className="add-to-cart-button text-[15px] px-7 py-3 bg-black text-white cursor-pointer" onClick={handleAddClick}>ADD TO CART</button>
            </div>
            
            <div className="product_features border-t border-1-[var(--darkBorderColor)] py-4 text-[var(--paragraphColor)] mt-10">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      <div className="product-reviews flex flex-col items-start h-auto w-full">
        <div className="flex flex-row w-auto">
          <h2 className="text-[1rem] font-[600] border border-1-[var(--darkBorderColor)] px-5 py-3">Description</h2>
          <h2 className="text-[1rem] font-[600] border border-1-[var(--darkBorderColor)] px-5 py-3">Reviews {`(122)`}</h2>      
        </div>

        <div className="product-reviews-content flex flex-col gap-5 p-5 text-[var(--paragraphColor)] md:text-[14px] border border-1-[var(--darkBorderColor)]">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      <RelatedProducts relatedProduct={displayedProduct}/>
    </section>
  );
}

export default Product;
