import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export default function SidePanel() {
    const [ sectionName, setSectionName ] = useState('add');

    useEffect(() => {
        const desiredPath = location.pathname.split("/")[1];
        setSectionName(desiredPath)
    }, [])

    return (
        <div className="side-panel-container w-[18%] h-auto border-r border-1-[var(--lightBorderColor)]">
            <div className="side-panel-inner w-full h-auto py-5 pl-2 flex flex-col gap-5 items-end">
                <Link to='/add' className="w-[90%]">
                    <button 
                        className={`w-full rounded-l-[5px] px-3 py-2 flex flex-row justify-start items-center border ${sectionName === "add" ? "border-[var(--sepcialColor)] bg-[#FFEBF5]" : "border-[var(--lightBorderColor)]"}`}
                        onClick={() => { setSectionName("add"); }}
                    >
                        <img src={assets.add_icon} alt="Add Icon" className="min-w-5 w-5 h-auto"/> 
                        <span className="text-[15px] ml-2 text-start hidden md:block">Add Items</span>
                    </button>
                </Link>
                <Link to='/list' className="w-[90%]">
                    <button 
                        className={`w-full rounded-l-[5px] px-3 py-2 flex flex-row justify-start items-center border ${sectionName === "list" ? "border-[var(--sepcialColor)] bg-[#FFEBF5]" : "border-[var(--lightBorderColor)]"}`}
                        onClick={() => { setSectionName("list"); }}
                    >
                        <img src={assets.order_icon} alt="List Icon" className="min-w-5 w-5 h-auto"/> 
                        <span className="text-[15px] ml-2 text-start hidden md:block">List Items</span>
                    </button>
                </Link>
                <Link to='/orders' className="w-[90%]">
                    <button 
                        className={`w-full rounded-l-[5px] px-3 py-2 flex flex-row justify-start items-center border ${sectionName === "orders" ? "border-[var(--sepcialColor)] bg-[#FFEBF5]" : "border-[var(--lightBorderColor)]"}`}
                        onClick={() => { setSectionName("orders"); }}
                    >
                        <img src={assets.order_icon} alt="Orders Icon" className="min-w-5 w-5 h-auto"/> 
                        <span className="text-[15px] ml-2 text-start hidden md:block">Orders</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
