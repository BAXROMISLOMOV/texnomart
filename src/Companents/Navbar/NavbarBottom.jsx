import React from 'react'
import FireIcon from "./icons/fire-stroke-rounded"

function NavbarBottom() {
  return (
    <div className='flex justify-between px-8 container mx-auto mt-5 font-semibold'>


        <h2 className='flex items-center gap-1'><FireIcon/></h2>
        <h2 className='flex items-center gap-2'> <img width={20} src={"https://texnomart.uz/_nuxt/img/oneplusone.70371be.svg"} alt="" /> Discounts</h2>
        <h2>Air Conditioner</h2>
        <h2>Heater</h2>
        <h2>Smartphone</h2>
        <h2>Fridges</h2>
        <h2>Vacuum Cleaners</h2>
        <h2>Laptops</h2>
        <h2>TV</h2>
        <h2>ALL Categories</h2>

    </div>
  )
}

export default NavbarBottom