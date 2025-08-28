import ProductsContainer from "../components/ProductsContainer";
import { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import ShopContext from "../context/ShopContext";

export default function RelatedProducts({ relatedProduct }) {
    const { list } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (!relatedProduct || !list) {
            console.log("Missing relatedProduct or products");
            return;
        }


        const filteredProducts = list.filter((product) => {
            if (product._id === relatedProduct._id) return false;
            return product.category === relatedProduct.category && product.subCategory === relatedProduct.subCategory;
        });
        const limitedProducts = filteredProducts.slice(0, 5);
        
        setRelatedProducts(limitedProducts);
    }, [relatedProduct, list]);

    return (
        <section className="related-products-wrapper py-10 flex items-center flex-col">
            <h2 className="related_products_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2 mb-10">
                <span className="text-[var(--secondaryTextColor)]">RELATED</span> PRODUCTS
                <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
            </h2>
            <ProductsContainer>
                {relatedProducts.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </ProductsContainer>
        </section>
    );
}
