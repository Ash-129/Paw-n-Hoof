import React from 'react'
import { MdOutlinePets } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Subsec() {
  return (
    <>
            <section className="bg-[#ebe3d3] py-12">
        <div className="max-w-[1200px]  mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            [ <MdOutlinePets />,"1,200+", "Pets Saved"],
            [<MdHomeFilled />,"850", "Adoptions"],
            [<FaHeart />,"50k+", "Donations Raised"],
          ].map(([value, label,dis]) => (
            <div key={label} className="bg-white p-6 rounded-xl shadow  gap-5">
              <div className='flex gap-6 items-center'>
              <h3 className="text-3xl font-bold text-[#ed7c2b]">{value}</h3>
              <p className="opacity-70 text-3xl text-[#421f16] font-bold">{label}</p>
              </div>
              <div className='mt-6 items-center flex'>
              <p className="opacity-70 text-2xl">{dis}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Subsec
