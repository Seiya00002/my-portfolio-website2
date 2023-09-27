import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h3>Portfolio site</h3>
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
  )
}

export default Header