import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import ShopContext from "../context/ShopContext";

function NavBar() {
    const { setShowSearch, cartData, token } = useContext(ShopContext);
    const [ isMenu, setIsMenu ] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setIsMenu(false);
    }, []);

    const handleSearchClick = (e) => {
        e.preventDefault();
        setShowSearch(true);
        navigate('/collection');
    }

    return (
        <nav className="navBar h-[90px] w-full flex flex-row justify-between py-6 items-center font-medium border-b border-1-[var(--darkBorderColor)]">
            <div className="navBar-logo w-auto h-auto cursor-pointer" onClick={() => navigate('/')}>
                <img src={assets.logo} className="min-w-[8rem] w-[8rem] h-auto" alt="Forever Logo Image" />
            </div>

            <div className="navBar-links hidden sm:flex flex-row items-center md:gap-5 gap-2 text-[15px]">
                <a href="/" className={`navBar_link ${window.location.pathname === "/" ? "active" : ""}`}>HOME</a>
                <a href="/collection" className={`navBar_link ${window.location.pathname === "/collection" ? "active" : ""}`}>COLLECTION</a>
                <a href="/about" className={`navBar_link ${window.location.pathname === "/about" ? "active" : ""}`}>ABOUT</a>
                <a href="/contact" className={`navBar_link ${window.location.pathname === "/contact" ? "active" : ""}`}>CONTACT</a>

                <a href="#" className="navBar_adminLink h-full rounded-[30px] border border-1-[var(--lightBorderColor)] text-[12px] py-2 px-7">Admin Panel</a>
            </div>

            <div className="navBar-buttons h-full flex flex-row gap-5 items-center">
                <button id="searchBtn" className="navBar_button w-auto cursor-pointer" onClick={handleSearchClick}><img className="min-w-5 w-5 h-auto" src={assets.search_icon} alt="Forever Search Icon"/></button>

                <div className="profile_actions relative">
                    <img className="min-w-5 w-5 h-auto" src={assets.profile_icon} alt="Profile Icon" onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}/>
                    <div className={`profile_dropdown ${isDropdownOpen ? "block" : "hidden"} w-[9rem] rounded-[10px] bg-[#F1F5F9] absolute right-0 top-10 flex flex-col gap-3 p-5 text-[var(--secondaryTextColor)]`}>
                        <a href="/profile" className="profile_link hover:text-black">My Profile</a>
                        {token ? (       
                            <a href="/logout" className="profile_link hover:text-black">Logout</a>) : 
                            <a href="/login" className="profile_link hover:text-black">Login</a>
                        }
                        <a href="/orders" className="profile_link hover:text-black">Orders</a>
                    </div>
                </div>
                <Link to='/cart' className="navBar_button relative w-auto cursor-pointer">
                    <img className="min-w-5 w-5 h-auto" src={assets.cart_icon}/>
                    <p className="cart_count absolute flex items-center justify-center bg-black rounded-[var(--radius)] text-white w-4 h-4 text-[9px] bottom-[-5px] right-[-5px]"><span>{Object.keys(cartData).length}</span></p>
                </Link>

                <img className="min-w-5 w-5 h-auto sm:hidden" src={assets.menu_icon} alt="Menu Icon" onClick={() => setIsMenu(!isMenu)}/>
                <div className={`navBar-menu fixed p-[2px] h-[calc(100vh)] ${isMenu ? "flex" : "hidden"} flex-col left-0 right-0 top-0 bottom-0 bg-white text-[var(--primaryTextColor)] sm:hidden`}>
                    <button className="w-full h-auto flex flex-row items-center justify-start py-4 px-3 gap-3 cursor-pointer border-b border-1-[#F2F3F5]" onClick={() => setIsMenu(false)}>
                        <img className="h-auto w-[10px] transfrom rotate-180" src={assets.dropdown_icon}/> 
                        Back
                    </button>
                    <a href="/" className={`p-3 px-5 border-b border-1-[#F2F3F5] ${window.location.pathname === "/" ? "menu-active" : ""}`}>HOME</a>
                    <a href="/collection" className={`p-3 px-5 border-b border-1-[#F2F3F5] ${window.location.pathname === "/collection" ? "menu-active" : ""}`}>COLLECTION</a>
                    <a href="/about" className={`p-3 px-5  border-b border-1-[#F2F3F5] ${window.location.pathname === "/about" ? "menu-active" : ""}`}>ABOUT</a>
                    <a href="/contact" className={`p-3 px-5  border-b border-1-[#F2F3F5] ${window.location.pathname === "/contact" ? "menu-active" : ""}`}>CONTACT</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;