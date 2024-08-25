'use client';

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll = () => { }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero___title">
                    Find, book, or rent a car - quickly and easily!
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process. </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-prymary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll} />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/path-to-your-image.jpg" // Replace with the actual image path
                        alt="Hero Image"
                        layout="fill" // Adjust the layout as per your need (e.g., "intrinsic", "responsive")
                        objectFit="cover" // Adjust object fit based on how you want the image to be displayed
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero