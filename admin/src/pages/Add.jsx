import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Add({token}) {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(25);
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [bestSeller, setBestSeller] = useState(false);
    const [sizes, setSizes] = useState([]);
    
    const onSubmitAddHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("bestSeller", bestSeller);
            formData.append("sizes", JSON.stringify(sizes));

            formData.append("image1", image1);
            formData.append("image2", image2);
            formData.append("image3", image3);
            formData.append("image4", image4);

            const response = await axios.post(backendUrl + "/api/products/add", formData, {headers: {token}})

            if (response.data.success) {
                toast.success(response.data.message)
                setName("");
                setCategory("Men");
                setSubCategory('Topwear');
                setDescription("");
                setPrice(25);
                setSizes([]);
                setBestSeller(false);
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
            } else {
                toast.error(response.data.message)
            }
        } catch (e) {
            console.log("Unable to add Product !",e.message)
            toast.error(e.message)
        }

    }

    return (
        <section className="add-item-section py-7 pb-12 px-[6vw] flex-1">
            <form className="add-item-inner max-w-[500px] flex flex-col items-start gap-3 text-[var(--primaryTextColor)]">
                <h3>Upload Image</h3>
    
                <div className="upload-images-wrapper flex gap-2">
                    <label className="h-auto w-auto relative" htmlFor="image1">
                        <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} className="w-20" alt="Upload area" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" className="absolute top-0 bottom-0 left-0 right-0 opacity-0" />
                    </label>
                    <label className="h-auto w-auto relative" htmlFor="image2">
                        <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} className="w-20" alt="Upload area" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" className="absolute top-0 bottom-0 left-0 right-0 opacity-0" />
                    </label>
                    <label className="h-auto w-auto relative" htmlFor="image3">
                        <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} className="w-20" alt="Upload area" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" className="absolute top-0 bottom-0 left-0 right-0 opacity-0" />
                    </label>
                    <label className="h-auto w-auto relative" htmlFor="image4">
                        <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} className="w-20" alt="Upload area" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" className="absolute top-0 bottom-0 left-0 right-0 opacity-0" />
                    </label>
                </div>
                
                <div className="w-full flex flex-col">
                    <label className="mb-3">Product Name</label>
                    <input className="outline-none bg-white px-3 p-2 border border-1-[var(--darkBorderColor)] rounded-[5px]" placeholder="Type Here" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
    
                <div className="w-full flex flex-col">
                    <label className="mb-3">Product Description</label>
                    <textarea className="outline-none bg-white px-3 p-2 border border-1-[var(--darkBorderColor)] rounded-[5px]" placeholder="Write content here" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
    
                <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-8">
                    <div className="flex flex-col sm:w-[30%]">
                        <label className="mb-2">Product Category</label>
                        <select name="category" id="product-category" className="border border-1-[var(--lightBorderColor)] outline-none px-3 py-2 rounded-[5px]" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:w-[30%]">
                        <label className="mb-2">Sub Category</label>
                        <select name="subCategory" id="product-subCategory" className="border border-1-[var(--lightBorderColor)] outline-none px-3 py-2 rounded-[5px]" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                            <option value="Topwear">Topwear</option>
                            <option value="Bottomwear">Bottomwear</option>
                            <option value="Winterwear">Winterwear</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:w-[30%]">
                        <label className="mb-2">Product Price</label>
                        <input type="number" defaultValue={"25"} value={price} className="text-[var(--secondaryTextColor)] outline-none bg-white px-3 p-2 border border-1-[var(--darkBorderColor)] rounded-[5px]" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
    
                <div className="w-full flex flex-col gap-2 mb-3">
                    <label>Product Sizes</label>
                    <div className="product-sizes w-auto flex text-[var(--secondaryTextColor)] gap-2">
                        <p className={`bg-[#E2E8F0] w-10 h-10 flex items-center justify-center rounded-[2px] cursor-pointer ${sizes.includes("S") ? "border border-1-[var(--lightBorderColor)] bg-[var(--specialColor)]" : ""}`} onClick={() => sizes.includes("S") ? setSizes(sizes.filter(size => size !== "S")) : setSizes([...sizes, "S"])}>S</p>
                        <p className={`bg-[#E2E8F0] w-10 h-10 flex items-center justify-center rounded-[2px] cursor-pointer ${sizes.includes("M") ? "border border-1-[var(--lightBorderColor)] bg-[var(--specialColor)]" : ""}`} onClick={() => sizes.includes("M") ? setSizes(sizes.filter(size => size !== "M")) : setSizes([...sizes, "M"])}>M</p>
                        <p className={`bg-[#E2E8F0] w-10 h-10 flex items-center justify-center rounded-[2px] cursor-pointer ${sizes.includes("L") ? "border border-1-[var(--lightBorderColor)] bg-[var(--specialColor)]" : ""}`} onClick={() => sizes.includes("L") ? setSizes(sizes.filter(size => size !== "L")) : setSizes([...sizes, "L"])}>L</p>
                        <p className={`bg-[#E2E8F0] w-10 h-10 flex items-center justify-center rounded-[2px] cursor-pointer ${sizes.includes("XL") ? "border border-1-[var(--lightBorderColor)] bg-[var(--specialColor)]" : ""}`} onClick={() => sizes.includes("XL") ? setSizes(sizes.filter(size => size !== "XL")) : setSizes([...sizes, "XL"])}>XL</p>
                        <p className={`bg-[#E2E8F0] w-10 h-10 flex items-center justify-center rounded-[2px] cursor-pointer ${sizes.includes("XXL") ? "border border-1-[var(--lightBorderColor)] bg-[var(--specialColor)]" : ""}`} onClick={() => sizes.includes("XXL") ? setSizes(sizes.filter(size => size !== "XXL")) : setSizes([...sizes, "XXL"])}>XXL</p>
                    </div>
                </div>
    
                <div className="mb-3">
                    <input type="checkbox" checked={bestSeller} onChange={(e) => setBestSeller(e.target.checked)} />
                    <label className="ml-4">Add to best Seller</label>
                </div>
    
                <button type="submit" className="bg-black text-white min-w-[120px] w-[120px] py-3" onClick={onSubmitAddHandler}>ADD</button>
            </form>
        </section>
    );
}

export default Add;