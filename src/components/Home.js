import React from 'react'
import image from '../pic.jpg'

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='the lake'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-6xl sm:text-9xl text-yellow-100 font-bold cursive leading-none lg:leading-snug'>
          Hi. I'm Olga
        </h1>
      </section>
    </main>
  )
}
