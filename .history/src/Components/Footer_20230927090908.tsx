import React from 'react'

const Footer = () => {
  return (
            <div id='contact'>
              <div className='contact-section-title'>
                  <h2>CONTACT</h2>
              </div>
              <div className='contact-wrapper'>
                <div className='contact-description'>
                  <h2>Drop Me a Message</h2>
                  <p>プロジェクト案件のご依頼や、企業様の採用のオファー等はお気軽にご連絡ください。</p>
                </div>
                <div className='contact-section'>
                          <input 
                              placeholder=' Name'
                              type='text'
                              required
                          />
                          <input 
                              placeholder=' Email'
                              type='text'
                              required
                          />
                      <textarea 
                          placeholder=' Message'    
                          required
                          ></textarea>
                      <button type='submit'>Send</button>
                </div>
              </div>
              <div className='footer'>
                      <hr></hr>
                      <p>CopyRight@Matsumoto</p>
              </div>
            </div>
         )
}

export default Footer