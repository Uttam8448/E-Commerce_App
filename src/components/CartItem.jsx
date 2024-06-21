import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item,itemIndex}) => {
const dispatch = useDispatch();

const removeFromCart = () =>{
  dispatch(remove(item.id));
  toast.error("Item Removed")
}

  return (
      <div className="flex h-[30%] border border-black w-[80%] gap-x-10 my-3 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition duration-300">
          <div className="w-[25%] h-[80%] my-auto p-5">
            <img className="h-full w-full" src={item.image} />
          </div>
          <div className="w-[75%] flex-col my-auto">
            <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title.length>17?item.title.slice(0,17) + "...":(item.title) }</h1>
            <h1 className="text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..." }</h1>
            <div >
              <p className="text-green-600 font-semibold m-2">{item.price}$</p>
              <div onClick={removeFromCart}><button className="text-gray-700 border-2 border-gray-700 rounded-full p-1 px-3 font-semibold uppercase text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Remove from Cart</button></div>
            </div>
          </div>
      </div>  
  );
};

export default CartItem;
