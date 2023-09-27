import React from 'react'

const Footer = () => {
  return (
        <div>
            <div id='contact'>
              <div className='section-title'>
                  <h2>CONTACT</h2>
              </div>
              <div className='contact-section'>
                        <input 
                            placeholder='Name'
                            type='text'
                            required
                        />
                        <input 
                            placeholder='Email'
                            type='text'
                            required
                        />
                    <textarea 
                        placeholder='Message'    
                        required
                        ></textarea>
                    <button type='submit'>Send</button>
              </div>
            </div>
            <div className='footer'>
                <p>CopyRight@Matsumoto</p>
            </div> 
            <div>
              <p>Hello</p>
            </div>
        </div>
         )
}

export default Footer