import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { CameraIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { VideoCameraIcon } from '@heroicons/react/solid'

function InputBox() {
    const [session] =useSession()

    const sendPost = (e) =>{
        e.preventDefault()
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className="flex space-x-4 p-4 items-center">
                <Image
                className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="profile"
                />
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 flex-grow
                        px-5 focus:outline-none"
                        type="text" placeholder="What's on your mind?"/>
                    <button onClick={sendPost} hidden type="submit">Submit</button>
                </form>

            </div> 

            <div className="flex justify-evenly">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="inputIcon">
                   <CameraIcon className="h-7 text-green-400"/>   
                   <p className="text-xs sm:text-sm xl:text-base">Live Video</p>            
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>




            </div>           
        </div>
    )
}

export default InputBox