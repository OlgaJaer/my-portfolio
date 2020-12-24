import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className='bg-indigo-300'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inline-flex items-center py-6 px-4 mr-4 text-indigo-900 hover:text-yellow-400 text-4xl font-bold cursive tracking-widest'
            activeClassName='home-active'
          >
            My Portfolio
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-4 px-4 my-6 rounded text-indigo-800 hover:text-yellow-400'
            activeClassName='bg-indigo-400'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-4 px-4 my-6 rounded text-indigo-800 hover:text-yellow-400'
            activeClassName='bg-indigo-400'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://twitter.com/'
            className='mr-4'
            target='_blank'
            fgColor='#3730A3'
            bgColor='#FBBF24'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/olga-jaeger-0948a7159/'
            className='mr-4'
            target='_blank'
            fgColor='#3730A3'
            bgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.facebook.com/'
            className='mr-4'
            target='_blank'
            fgColor='#3730A3'
            bgColor='#FBBF24'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
