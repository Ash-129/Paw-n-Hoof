import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Story() {
  return (
    <>
    <section className='w-full h-[70vh] bg-white flex '>
        
            {/* left */}
            <div className="left w-[50%] h-[100%] bg-amber-300 flex flex-col ">
                <div>
                    <div className="top">Success Story</div>
                    <h1 className="text-2xl font-bold text-[#421f16]">Max's Journey to a Forever Home</h1>
                    <p className='text-[#705750]'>"When we first saw Max, he was shy and recovering from a
difficult past. Thanks to the Paws & Hope team, he received
the medical care and training he needed. Now, he's the
happiest part of our family."
</p>
<div>
    <h2 className='font-bold'>— The Thompson Family</h2>
    <h3>Adopted Jan 2023</h3>
</div>

<div className='text-1xl text-[#ed7e2f] flex gap-2 items-center'>Read More Stories <FaLongArrowAltRight /></div>
                </div>

            </div>

            <div className="right w-[50%] h-[100%] bg-amber-900">

            </div>
       

    </section>
      
    </>
  )
}

export default Story
