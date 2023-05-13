import Image from 'next/image'
import React from 'react'
import { BiMessageRounded,BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const FeedCard: React.FC = () => {
    return <div className='border-[1px] border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-gray-950 transition-colors ease-linear cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1 h-fit w-fit'>
                <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/70676486?v=4" alt="user-image" height={50} width={50} />
            </div>

            <div className='col-span-11 flex flex-col justify-center items-start'>
                <h5 className=''>Chetan Pathak</h5>

                <p>Product Update ✨

                    Added a capability to add more instructors to a course so that multiple instructors can contribute to a single course 💪🏻

                    http://teachyst.com

                    #buildinpublic
                </p>

                {/* buttons */}
                <div className='flex justify-evenly items-center w-full mt-5 text-xl'>
                    <div className='hover:text-[#1D9BF0] hover:bg-[#0A1720] rounded-full p-[0.5rem] transition-colors ease-linear'>
                        <BiMessageRounded />
                    </div>

                    <div className='hover:text-[#39ab85] hover:bg-[#071A14] rounded-full p-[0.5rem] transition-colors ease-linear'>
                        <FaRetweet />
                    </div>

                    <div className='hover:text-[#F91880] hover:bg-[#210914] rounded-full p-[0.5rem] transition-colors ease-linear'>
                        <AiOutlineHeart/>
                    </div>
                    <div className='hover:text-[#1D9BF0] hover:bg-[#0A1720] rounded-full p-[0.5rem] transition-colors ease-linear'>
                        <BiUpload/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default FeedCard