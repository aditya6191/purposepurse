'use client'
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
function Header(){
    const{user , isSignedIn}= useUser();
    return (
        <div className='p-5 flex justify-center border shadow-sm'>
            <div>
                {/*logo*/}
                <span>FinanSmart</span>

            </div>
            <div>button 1</div>
            <div>button 2</div>
        </div>
    );
}
export default Header;



