'use client'
import React from 'react'
import CustomButton from './CustomButton'

function Hero() {

    const handleScroll = () => {
    }

  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">
          Find, book or rent a car --quickly and easily.
        </h1>
        <p>here some description will go</p>
        <CustomButton
          title="CustomButton"
          type="submit"
          disabled={false}
          customBtnStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
}

export default Hero