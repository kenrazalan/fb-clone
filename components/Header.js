import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, } from '@heroicons/react/solid'
import {BellIcon, ChatIcon, ChevronDownIcon, FlagIcon,PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon,ViewGridAddIcon} from '@heroicons/react/outline'
import {signOut, useSession } from 'next-auth/client'

function Header() {

    const [session] = useSession()
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:p-5 shadow-md justify-between">
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me" 
                    width={40} 
                    height={40}
                    layout='fixed'
                    alt="logo"/>
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input 
                        className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" 
                        type="text" 
                        placeholder="search facebook"/>
                </div>
            </div>

            <div className="hidden md:inline-flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>

            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                <div className="hidden md:inline-flex items-center">
                <Image
                    className="rounded-full cursor-pointer"
                    onClick={signOut}
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                    alt="user profile"
                />
                <p className="font-semibold pr-3">{session.user.name}</p>
                </div>


                <div className="flex">
                <ViewGridAddIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
                </div>


            </div>
        </div>
    )
}

export default Header
