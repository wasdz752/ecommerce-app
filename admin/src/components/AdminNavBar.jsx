import { assets } from "../assets/assets";

export default function AdminNavBar({setToken}) {
    return (
        <nav className="admin-panel-navBar flex flex-row justify-between items-center border-b border-1-[var(--lightBorderColor)] px-[4%] py-2">
            <img className="forever-admin-logo h-[4vw] min-h-10 w-auto" src={assets.logo} />  

            <button className="logout-button bg-[var(--bgButtonColor)] px-6 py-2 rounded-[20px] sm:text-[14px] text-[12px] text-white cursor-pointer" onClick={() => {setToken("")}}>Log Out</button>
        </nav>
    )   
}