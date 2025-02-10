import axios from "axios";
import React, { useEffect, useState } from "react";

function Catigories() {
  const [product, setProduct] = useState([]);

useEffect(()=>{
    axios.get("https://gw.texnomart.uz/api/web/v1/home/special-categories").then((res)=>{
        setProduct(res.data.data.data)
      })

},[])
  return (
    <div className="mx-auto container px-8 flex justify-between mt-5">
    {product.map((item,index)=>{
          return(
            <div key={index} className="bg-[#F7F7F7] inline-block py-1 px-3 rounded">
          <h2>{item.title}</h2>
          <img
            className="w-[100px] "
            src={
                item.image
            }
            alt=""
          />
        </div>
          )
    })}
    </div>
  );
}

export default Catigories;
