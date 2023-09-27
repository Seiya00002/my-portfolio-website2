import React from 'react'

const Homepage = () => {
  return (
    <div className='container'>
        <div className='top' id='top'>
            <div className='top-left'>
                <h1>I'm a Web Application Engineer</h1>
                <img src='/image/m-drawing.jpg' alt='profile-image' />
            </div>
            <div className='top-right'>
                <h2>Amout me</h2>
                <p>エンジニアに転身を目指して個人開発をしております。主にHTML/CSS/Javascript/React を扱っています。
                これまでは店舗ビジネスや貿易業の起業、マーケティング関連の仕事に挑戦して参りましたが、ずっとIT事業への興味も捨て切れず
                転身を決意いたしました。
                趣味はサーフィンと、それを動画撮影・編集する事です。</p>
            </div>
        </div>

        <div id='portfolio'>
            <h2>PORTFOLIO</h2>
            <div className='project-1'>
                <div className='description'>
                    <h2>PROJECT 1</h2>
                    <h2></h2>
                    <p></p>
                </div>
                <img src='' alt=''/>
            </div>
        </div>

    </div>
  )
}

export default Homepage