import React, { useEffect, useState } from "react";
import ShoppingCart02Icon from "./Navbar/icons/shopping-cart-02-stroke-rounded";
import axios from "axios";
import rasm1 from "../assets/yurak_border.svg";
import rasm2 from "../assets/yurak_qizil.svg";
import useSmthStore from "./Navbar/my-store";


function Cards() {
  const [card, setCard] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const {counter ,count}=useSmthStore()


  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setCard(res.data.data.data);
      });
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <div className="mx-auto container px-8 mt-5">
      <div className="flex justify-between my-3">
        <h2>Xit Savdo </h2>
        <h2 className="text-[blue] cursor-pointer">
          Barchasini ko‘rsatish {">"}
        </h2>
      </div>
      <div className="flex items-center justify-between flex-wrap mt-4 mx-auto container px-12 gap-4">
        {card.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[220px] mt-6 relative hover:shadow-2xl p-3 rounded-xl"
            >
              <img
                className="w-[200px] h-[190px] bg-[#F7F7F7] mb-4"
                src={item.image}
                alt=""
              />

              <img
                className="w-[20px] absolute top-0 right-1 cursor-pointer"
                src={likedItems[item.id] ? rasm2 : rasm1}
                alt="heart"
                onClick={() =>{ toggleLike(item.id)
                
                  
                  const nom = count.concat({
                    id:item.id,
                    name:item.name,
                    image:item.image,
                    sale_price:item.sale_price,
                    axiom_monthly_price:item.axiom_monthly_price
,
                  })
                  useSmthStore.setState({
                    count:nom
                  })
                
                }}
              />

              <h2>{item.name.slice(0, 10)}</h2>

              <h2 className="bg-[lightgrey] px-2 inline-block rounded text-md my-4">
                {item.axiom_monthly_price}
              </h2>

              <div className="flex items-center justify-between">
                <h2>{item.sale_price} so'm</h2>

                <div
                  className="border-2 border-[#FBC100] p-1 rounded cursor-pointer"
                  onClick={() => {

                    const nom = counter.concat({
                      id:item.id,
                      name:item.name,
                      image:item.image,
                      sale_price:item.sale_price,
                      axiom_monthly_price:item.axiom_monthly_price
,
                    })
                    useSmthStore.setState({
                      counter:nom
                    })
                  }}
                >
                  <ShoppingCart02Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
