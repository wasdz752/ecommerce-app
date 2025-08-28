import { useContext, useMemo } from "react";
import ShopContext from "../context/ShopContext";
import ProductsContainer from "./ProductsContainer";
import ProductItem from "./ProductItem";

function LatestCollection() {
    const { list } = useContext(ShopContext);

    const latestProducts = useMemo(
        () => list.slice(-5),
        [list]
    );

    return (
        <section className="latest-collection w-full h-auto flex flex-col items-center">
            <div className="latest-collection-header w-full flex flex-col items-center mb-7">
                <h1 className="latest_collection_title flex flex-row items-center text-[var(--primaryTextColor)] font-[600] text-[1.2rem] md:text-[2rem] gap-2 sm:gap-3">
                    <span className="text-[var(--secondaryTextColor)]">LATEST</span> COLLECTIONS 
                    <span className="ml-5 w-[50px] h-[2px] bg-[var(--primaryTextColor)] right-[110%] top-[50%] block"></span>
                </h1>
                <p className="text-[var(--paragraphColor)] mt-3;">Discover our latest arrivals</p>
            </div>

            <ProductsContainer>
                {latestProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </section>
    );
}

export default LatestCollection;
