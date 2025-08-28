import { useContext } from 'react';
import ShopContext from '../context/ShopContext';

const Orders = () => {
  const { orders, list, currency } = useContext(ShopContext);

  return (
    <div className="pt-16 border-t">
      <div className="mb-3 text-2xl">
        <h2 className="related_products_title flex flex-row items-center text-[var(--primaryTextColor)] font-[500] text-[20px] sm:text-[24px] gap-2">
          <span className="text-[var(--secondaryTextColor)]">MY</span> ORDERS
          <span className="ml-1 w-[50px] h-[3px] bg-[var(--primaryTextColor)] top-[50%] block"></span>
        </h2>
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have no orders.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="py-4 border-t border-b text-gray-700">
              <div className="mb-4">
                <p className="font-medium">
                  Order ID: {order._id}
                </p>
                <p className="text-sm text-gray-500">
                  Date: {order.date}
                </p>
                <p className="text-sm text-gray-500">
                  Status: {order.status}
                </p>
                <p className="text-sm text-gray-500">
                  Total: {currency}{order.amount}
                </p>
              </div>
          
              {order.items.map((item, index) => {
                const productData = list.find(
                  (product) => product._id === item.item
                );
              
                return (
                  <div
                    key={index}
                    className="py-4 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div className="flex items-start gap-6">
                      <img
                        src={productData?.image?.[0] || "/placeholder.png"}
                        alt={productData?.name || "Product"}
                        className="w-16 sm:w-20"
                      />
      
                      <div>
                        <p className="sm:text-base font-medium">
                          {productData?.name || "Unknown product"}
                        </p>
                
                        <div className="flex items-center gap-5 mt-2 text-base text-gray-700">
                          <p>
                            {currency}
                            {item.price}
                          </p>
                          <p>Quantity: {item.quantity}</p>
                          {item.size && <p>Size: {item.size}</p>}
                        </div>
                      </div>
                    </div>
                
                    <div className="flex justify-between md:w-1/2">
                      <div className="flex items-center gap-2">
                        <p className="w-2 h-2 rounded-full bg-green-400"></p>
                        <p className="text-sm md:text-base">{order.status}</p>
                      </div>
                      <button className="border px-4 py-2 text-sm font-medium rounded-sm text-gray-700 hover:bg-gray-100">
                        Track Order
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;