import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  async function fetchProductData() {
      setLoading(true);
      try{
          const res=await fetch(API_URL);
          const data = await res.json();
          setPosts(data);
          console.log(data);
      }
      catch(error){
          console.log("Error aaya");
          setPosts([]);
      }
      setLoading(false);
  }
  useEffect(()=>{ console.log("First time");
    fetchProductData();},[])
  return (
    <div>
      {
        loading ? <Spinner />
        : posts.length>0
          ?(<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10  min-h-[80vh]">
            {posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
            }</div>)
          :(<div className="flex justify-center items-center">No data found</div>)
      }
      
    </div>
  );
};

export default Home;