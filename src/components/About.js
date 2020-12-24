import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import image from '../pic.jpg'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
              name,
              bio,
              "authorImage": image.asset->url
          }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <main>
      <img
        src={image}
        alt='the lake'
        className='absolute w-full object-cover h-full'
      />
      <div className='container mx-auto relative p-10 lg:pt-48 '>
        <section className='bg-indigo-200 lg:flex  rounded-lg shadow-2xl p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-indigo-800 mb-4'>
              "Hey there. I`m"<span>Olga</span> "
            </h1>
            <p className='text-indigo-800 text-lg'>
              I'm a Front-end developer living in Berlin area. I specialize in
              JavaScript and React{' '}
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
