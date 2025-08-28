import ShopContext from "../context/ShopContext";
import { useContext } from "react";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { showSearch, setShowSearch, isSearch, setIsSearch } = useContext(ShopContext);
  const location = useLocation(); // Add this hook
  const isVisible = location.pathname.includes("collection");

  return (
    <div className={`search-bar w-full h-auto py-5 ${showSearch && isVisible ? "flex" : "hidden"} flex-col items-center bg-[var(--boxbgColor)] border-b border-1-[var(--darkBorderColor)]`}>
      <div className="search-bar-inner w-[50%] h-auto flex flex-row gap-5">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full h-full p-2 border border-gray-300 rounded-[20px] px-5 outline-none" 
          value={isSearch || ""}
          onChange={(e) => setIsSearch(e.target.value)}
        />
        <button onClick={() => setShowSearch(false)}>
          <img src={assets.cross_icon} className="h-auto min-w-4 w-4" alt="Close" />
        </button>
      </div>
    </div>
  );
}