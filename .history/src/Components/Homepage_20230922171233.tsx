import React from 'react'

const Homepage = () => {
  return (
    <div className='container'>
        <h1>I'm a Web Application Engineer</h1>
        <div className='top' id='top'>
            <img src='/image/m-drawing.jpg' alt='profile-image' />
            <div className='right-contents'>
                <h2>Amout me</h2>
                <p>エンジニアに転身を目指して個人開発をしております。主にHTML/CSS/Javascript/React を扱っています。
                これまでは店舗ビジネスや貿易業の起業、マーケティング関連の仕事に挑戦して参りましたが、ずっとIT事業への興味も捨て切れず
                転身を決意いたしました。
                趣味はサーフィンと、それを動画撮影・編集する事です。</p>
            </div>
        </div>

        <div id='portfolio'>
            <h2>PORTFOLIO</h2>
            <div className='project'>
                <div className='left-contents'>
                    <h2>PROJECT 1</h2>
                    <h2>メンバー制SNS アプリケーション開発</h2>
                    <p>「Seeds Surfers」観葉植物系Youtubeチャンネル「cova.amigo」視聴者様向けの、メンバー専用投稿サイトをフロント
                        からバックエンドまで全て製作しました。
                        観葉植物の育成方法などを配信するYoutuber:cova.amigoとその視聴者、そして視聴者同士でコミュニケーションを
                        深める事を目的とし、コミュニティー感を作りチャンネルの有料メンバーシップやオンラインサロン構築への足掛かりとする
                        計画のプロジェクトです。
                    </p>
                </div>
                <img src='' alt=''/>
            </div>
            <div className='project'>
                <div className='left-contents'>
                    <h2>PROJECT 2</h2>
                    <h2></h2>
                    <p></p>
                </div>
                <img src='' alt=''/>
            </div>
            <div className='project'>
                <div className='left-contents'>
                    <h2>PROJECT 3</h2>
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