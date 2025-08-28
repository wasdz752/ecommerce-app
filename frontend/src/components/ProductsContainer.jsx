function ProductsContainer({children}) {
    return (
        <div className="products-container w-full h-auto grid gap-x-3 gap-y-7 auto-rows-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {children}
        </div>
    )
}       

export default ProductsContainer;