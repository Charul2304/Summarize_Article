import React from 'react'
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='justify-between flex items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-23 object contain'/>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>Open-AI GPT-4</span> 
        </h1>
        <h2 className='desc'>
        "Experience the power of AI-driven summarization with our app. Easily condense lengthy articles, documents, or texts into concise, coherent summaries. Save time, stay informed, and grasp key insights effortlessly."
        </h2>
    </header>
  )
}

export default Hero
