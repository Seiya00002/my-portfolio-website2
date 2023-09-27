import React from 'react'

const Homepage = () => {  

  return (
    <div className='container'>
        <div className='title'>
            <p>I'm a</p>
            <h1>Web Developer</h1>
            <a href='#portfolio' className='button'>Previous Project</a>
        </div>
        
        <div className='about-me' id='about-me'>
            <img src='/image/m-drawing.jpg' alt='profile-image' />
            <div className='right-contents'>
                <h2>Amout me</h2>
                <h2>Seiya Matsumoto</h2>
                <p>Webアプリケーションを中心に個人開発をしております。主にJavascript/React/HTML/CSSを扱っています。
                直近はマーケティング関連の仕事をしていたので、マーケティング戦略をしっかりと加味したWEBサイトやLP製作
                も行なっております。
                <br></br>趣味はサーフィンと、それを動画撮影・編集する事です。</p>
                <a href='#contact' className='button'>Contact me</a>
            </div>
        </div>

        <div id='portfolio'>
            <div className='section-title'>
                <h2>PORTFOLIO</h2>
            </div>
            <div className='project'>
                <div className='left-contents'>
                    <h3>PROJECT 1</h3>
                    <h2>メンバー制SNS アプリケーション開発</h2>
                    <p>「Seeds Surfers」観葉植物系Youtubeチャンネル「cova.amigo」視聴者様向けの、メンバー専用投稿サイトを製作しました。
                        観葉植物の育成方法などを配信するYoutuberとその視聴者、そして視聴者同士でコミュニケーションを
                        深める事を目的とし、コミュニティー感を作りチャンネルの有料メンバーシップやオンラインサロン構築への足掛かりとする
                        計画のプロジェクトです。
                    </p>
                </div>
                <img src='/image/seeds-surfers-image.png'
                    alt='Seeds-Surfers-image' 
                />
                
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
                <img src='/image/seeds-surf-lp-image.png'
                    alt='Seeds-Surf-lp-image' 
                    />
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
                <img src='/image/youtube-image.png'
                    alt='movie-project-image' 
                />
            </div>
        </div>
        
        <div id='skill'>
            <div className='section-title'>
                <h2>SKILL</h2>
            </div>
            <div className='skill-section'>
                <div className='tech-icon'>
                    <img src='/image/html-5-icon.svg' />
                    <p>HTML</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/css-3-icon.svg' />
                    <p>CSS</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/javascript-icon.svg' />
                    <p>Javascript</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/react-icon.svg' />
                    <p>React.JS</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/typescript-icon.svg' />
                    <p>Typescript</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/nodejs-icon.svg' />
                    <p>Node.JS</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/firebase-icon.svg' />
                    <p>Firebase</p>
                </div>
                <div className='tech-icon'>
                    <img src='/image/adobe-premiere-icon.svg' />
                    <p>Adobe preiere pro</p>
                </div>
            </div>
        </div>

        <div id='service'>
            <div className='section-title'>
                <h2>SERVICE</h2>
            </div>
            <div className='service-description'>
                <div className='service-box'>
                    <div className='service-title'>
                        <img src='/image/memo-app-icon.svg' />
                        <h2>Web Application 開発</h2>
                    </div>
                    <p>Javascript, React.js を用いたSNS等を始めとした様々なWEBアプリケーションの開発をしております。</p>
                </div>
                <div className='service-box'>
                <div className='service-title'>
                        <img src='/image/memo-app-icon.svg' />
                        <h2>Website 開発</h2>
                    </div>
                    <p>Javascriptを用いた機能付きのWebサイトや、React.jsによる本格的なWebサイトをHTML,CSSの編集を含めご対応いたします。</p>
                </div>
                <div className='service-box'>
                <div className='service-title'>
                        <img src='/image/memo-app-icon.svg' />
                        <h2>Web Marketing support</h2>
                    </div>
                    <p>LP製作から、Web広告、SNS運用、そしてマーケティング戦略立案をサポートいたします。</p>
                </div>
                <div className='service-box'>
                <div className='service-title'>
                        <img src='/image/memo-app-icon.svg' />
                        <h2>動画製作</h2>
                    </div>
                    <p>Youtube, SNS向け動画製作の企画、撮影、編集作業を行なっております。Adobe premiere pro, filmoraソフトご対応しております。</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Homepage