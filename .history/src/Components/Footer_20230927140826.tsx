import React from 'react'
import { useState } from 'react';

const Footer = () => {

  const [ name, setName] = useState<string>("");
  const [ email, setEmail] = useState<string>("");
  const [ message, setMessage] = useState<string>("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xrgwynvb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        alert('メッセージが送信されました。');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('メッセージの送信に失敗しました。');
      }
    } catch (error) {
      console.log('送信エラー:', error);
    }
  };

  return (
            <div id='contact'>
              <div className='contact-section-title'>
                  <h2>CONTACT</h2>
              </div>
              <div className='contact-wrapper'>
                <div className='contact-description'>
                  <h2>Drop Me a Message</h2>
                  <p>ご質問やお問い合わせ、プロジェクト案件のご依頼や、企業様の採用のオファー等はお気軽にご連絡ください。</p>
                  <div className='info-detail'>
                    <img src='/image/tel-logo.png'
                    alt='Mobile-icon'
                    />
                    <p>090-3048-2693</p>
                  </div>
                  <div className='info-detail'>
                    <img src='/image/mail-icon.svg'
                    alt='Email-icon'
                    />
                    <p>s.matsumoto421@gmail.com</p>
                  </div>
                </div>
                <div className='contact-outer'>
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
                      <button 
                      type='submit'
                      onClick={handleSubmit}
                       >
                      Send
                       </button>
                  </div>  
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