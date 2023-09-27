import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <img src='/image/s-logo1-removebg.png' alt='my-logo' />
        </div>
        <div className='header-right'>
            <nav>
                <ul>
                    <li>
                        <a href='#top'>HOME</a>
                    </li>
                    <li>
                        <a href='#portfolio'>PORTFOLIO</a>
                    </li>
                    <li>
                        <a href='#skill'>SKILL</a>
                    </li>
                    <li>
                        <a href='#service'>SERVICE</a>
                    </li>
                    <li>
                        <a href='#contact'>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header