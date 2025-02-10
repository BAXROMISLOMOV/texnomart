import React from "react";
import { useState } from "react";

function Corusel() {
  const url = [
    "https://mini-io-api.texnomart.uz/newcontent/slider/347/yYmFXeGX6qjS4LaqXmDbDHznlrgSJwJH3Wqw3YQy.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/352/ScBALpx2hFb2aR4Nez7hr9AhHLg5MKwNjRVIgPek.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/351/pu5Chblpp3CiDorsHhIAtvH26ldADVvmXFXLoFJq.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/353/xAv9zeSr5NdTLAtVxLqpQibPdMIkwBNylsl0JafB.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/347/yYmFXeGX6qjS4LaqXmDbDHznlrgSJwJH3Wqw3YQy.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/350/L60iXNcOovoZLCBOYWRU1uTAUHUwCQauDFPTDj7l.webp",
  ];

  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index < url.length - 1) {
      setIndex(index + 1);
    }
  };

  const Back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="mt-8 ml-[190px] mx-auto container px-8">
      <div className="relative">
        {index > 0 && (
          <button className="absolute bg-white border top-[180px] left-[10px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]" onClick={Back}>
            &#60;
          </button>
        )}
        <img className=" rounded-xl h-[400px]" onClick={Next} src={url[index]} alt="" />
        {index < url.length - 1 && (
          <button
          className="absolute bg-white border top-[180px] left-[1400px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]"
            onClick={Next}
          >
            &#62;
          </button>
        )}
      </div>
      
    </div>
  );
}

export default Corusel;
