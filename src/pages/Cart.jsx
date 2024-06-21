import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState,useEffect } from "react";


const Cart = () => {
  const {cart}=useSelector((state)=> state);
  const [totalAmount,setTotalAmount]=useState(0);
  
  //syntax
  //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return(
    <div className=" min-h-screen w-7/12 p-5 mx-auto" >
      {
        cart.length>0
      ?(<div className="mx-auto flex">
          <div className=" flex-col gap-3">
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
            
        <div className="flex flex-col w-[30%] justify-between h-[500px] border p-5" >
                <div className="">
                  <div>
                    Your Cart
                  </div>
                  <div>Summary</div>
                  <p>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>
                <div className="flex-col ">
                  <p >Total Amount:<span className="text-green-600 font-semibold"> ${totalAmount}</span></p>
                  <button className="p-2 bg-green-500 text-white rounded-md">
                    Checkout Now
                  </button>
                </div>
        </div>
        </div>
        ) 
        :(<div>
          <h1>Cart Empty</h1>
          <Link to="/"><button>Shop Now</button></Link>
        </div>)
      }
    </div>
  )  
};

export default Cart;
