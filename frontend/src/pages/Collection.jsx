import { useState, useEffect, useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductsContainer from "../components/ProductsContainer";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets";

function Collection() {
  const { isSearch, list, loading } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [sort, setSort] = useState("relevant");
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(list);

  useEffect(() => {
    setShowFilter(false);
    setSort("relevant");
    setFilteredProducts(list);
    setCategory([]);
    setType([]);
  }, [list]);

    useEffect(() => {
    let result = [...list]; 

    if (Array.isArray(type) && type.length > 0) {
      result = result.filter((product) => type.includes(product.subCategory));
    }

    if (Array.isArray(category) && category.length > 0) {
      result = result.filter((product) => category.includes(product.category));
    }

    if (sort === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (isSearch) {
      result = result.filter((product) => 
        product.name.toLowerCase().includes(isSearch.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [type, category, sort, list, isSearch]);


  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setType((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <section className="collection-section flex sm:flex-row flex-col gap-7 py-7">
      <div className="collection-filter-wrapper min-w-60 sm:w-60 w-full flex flex-col gap-5">
        <h2 className="flex flex-row items-center text-[18px] text-black h-auto">
          FILTERS{" "}
          <button
            className="w-auto h-auto sm:hidden block cursor-pointer"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <img className="w-3 h-4 ml-3" src={assets.dropdown_icon} />
          </button>
        </h2>

        <div
          className={`filter-groups flex flex-col gap-4 ${showFilter ? "flex" : "hidden"} sm:flex`}
        >
          <div className="filter-categories flex flex-col gap-1 text-[var(--secondaryTextColor)] border border-1-[var(--lightBorderColor)] px-5 py-3">
            <h3 className="group_title text-[var(--primaryTextColor)] font-[500] text-[1rem] mb-2">
              CATEGORIES
            </h3>

            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Men"
                id="category-men"
                checked={category.includes("Men")}
                onChange={(e) => handleCategoryChange(e)}
              />{" "}
              Men
            </p>
            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Women"
                id="category-women"
                checked={category.includes("Women")}
                onChange={(e) => handleCategoryChange(e)}
              />{" "}
              Women
            </p>
            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Kids"
                id="category-kids"
                checked={category.includes("Kids")}
                onChange={(e) => handleCategoryChange(e)}
              />{" "}
              Kids
            </p>
          </div>

          <div className="filter-types flex flex-col gap-1 text-[var(--secondaryTextColor)] border border-1-[var(--lightBorderColor)] px-5 py-3">
            <h3 className="group_title text-[var(--primaryTextColor)] font-[500] text-[1rem] mb-2">
              TYPE
            </h3>

            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Topwear"
                id="type-top"
                checked={type.includes("Topwear")}
                onChange={(e) => handleTypeChange(e)}
              />{" "}
              Topwear
            </p>
            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Bottomwear"
                id="type-bottom"
                checked={type.includes("Bottomwear")}
                onChange={(e) => handleTypeChange(e)}
              />{" "}
              Bottomwear
            </p>
            <p>
              <input
                className="mr-2"
                type="checkbox"
                value="Winterwear"
                id="type-winter"
                checked={type.includes("Winterwear")}
                onChange={(e) => handleTypeChange(e)}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="collection-products-wrapper flex-1 h-auto flex flex-wrap gap-5">
        <div className="collections-products-head w-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="collection_title flex flex-col md:flex-row md:items-center items-start text-[var(--primaryTextColor)] font-[400] text-[1.2rem] md:text-[24px] sm:gap-x-2">
              <span className="text-[var(--secondaryTextColor)]">ALL</span> COLLECTIONS
              <span className="ml-2 w-[50px] h-[3px] bg-[var(--primaryTextColor)]"></span>
            </h2>

            <div className="sort-dropdown">
              <select
                value={sort}
                onChange={handleSortChange}
                className="p-2 border border-1-[var(--lightBorderColor)] text-[var(--primaryTextColor)]"
              >
                <option value="relevant">Sort: Relevant</option>
                <option value="low-to-high">Sort: Low to High</option>
                <option value="high-to-low">Sort: High to Low</option>
              </select>
            </div>
          </div>
        </div>
          
        {loading ?  <h1 className="text-xl font-[600] text-center">Loading...</h1> : 
        <ProductsContainer>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ProductsContainer>
        }
     </div>
    </section>
  );
}

export default Collection;
