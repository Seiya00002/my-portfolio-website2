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
                    <h3>PROJECT 1</h3>
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
                    <h3>PROJECT 2</h3>
                    <h2>LP 製作</h2>
                    <p>私自身の個人事業の、植物専門輸入事業「Seeds Surf」の宣伝LPを製作し運用しております。具体的なコストがすぐに
                        見えずらく売上に中々結び付かない課題を解消すべく、すぐにコストを試算できる機能を実装し、分かり易いコスト
                        提示にて顧客注文増加を目指しております。
                    </p>
                </div>
                <img src='' alt=''/>
            </div>
            <div className='project'>
                <div className='left-contents'>
                    <h3>PROJECT 3</h3>
                    <h2>動画製作</h2>
                    <p>Youtubeチャンネルを立ち上げから、撮影、編集、分析を含む運営を約2年間行いました。チャンネル登録者は約8千人、
                        販売売上80%増を達成しました。ニッチな分野のジャンルで、無名の状態から業界では知られた存在となり、人気を
                        獲得し売り上げにつながりました。テレビ風の面白おかしい、サボテン系植物の解説系動画チャンネルです。
                    </p>
                </div>
                <img src='' alt=''/>
            </div>

        </div>
        
        <div id='skill'>
            <h2>SKILL</h2>
        </div>

        <div id='service'>
            <h2>SERVICE</h2>
            <div className='service-description'>
                <div className='service-box'></div>
                <div className='service-box'></div>
                <div className='service-box'></div>
                <div className='service-box'></div>
            </div>
        </div>
        <div id='contact'>
            <h2>CONTACT</h2>
        </div>
    </div>
  )
}

export default Homepage