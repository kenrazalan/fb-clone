import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { CameraIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { VideoCameraIcon } from '@heroicons/react/solid'
import { db, storage } from '../firebase'
import firebse from 'firebase'

function InputBox() {
    const [session] =useSession()
    const inputRef = useRef(null)
    const fileRef = useRef(null)

    const [imagePost ,setImagePost] = useState(null)

    const sendPost = (e) =>{
        e.preventDefault()
        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebse.firestore.FieldValue.serverTimestamp()
        }).then((doc) => {
            if(imagePost){
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imagePost,'data_url')
                removeImage()

                uploadTask.on('state_change',null , error => console.error(error), () =>{
                    storage.ref('posts').child(doc.id).getDownloadURL()
                    .then((url) => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url,
                        },{ merge: true})     
                    
                    })
                })
            }
        })

        inputRef.current.value = ""
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload =  (readerEvent) =>{
            setImagePost(readerEvent.target.result)
        }

    }

    const removeImage = () => {
        setImagePost(null)
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
                        ref={inputRef}
                        className="rounded-full h-12 bg-gray-100 flex-grow
                        px-5 focus:outline-none"
                        type="text" placeholder="What's on your mind?"/>
                    <button onClick={sendPost} hidden type="submit">Submit</button>
                </form>

                {imagePost && (
                    <div className="flex flex-col filter hover:brightness-100 transition
                         duration-150 transform hover:scale-105 cursor-pointer"
                         onClick={removeImage}>
                        <Image width={40} height={40} layout="fixed" className="h-10 object-contain"  src={imagePost} alt="image to post"/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}

            </div> 

            <div className="flex justify-evenly">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div onClick={()=> fileRef.current.click()} className="inputIcon">
                   <CameraIcon className="h-7 text-green-400"/>   
                   <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>    
                   <input ref={fileRef} type="file" onChange={addImageToPost} hidden/>        
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>




            </div>           
        </div>
    )
}

export default InputBox
