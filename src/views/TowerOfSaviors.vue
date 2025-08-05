<template>
  <div class="game-page">
    <h1>神魔之塔</h1>
    <section>
      <h2>簡介</h2>
      <p>
        《神魔之塔》是一款結合三消益智玩法與角色養成的手機遊戲，玩家透過轉動寶珠進行消除，發動角色技能打擊敵人。遊戲世界觀龐大，包含多個神話與奇幻元素，隨著劇情推進，玩家將探索不同時代、種族的故事。
      </p>
      <div class="video-wrapper">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Wb4v-eqMGZM" title="神魔之塔介紹" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
    <section>
      <h2>核心元素</h2>
      <details open>
        <summary>角色蒐集與進化</summary>
        <p>數百種卡牌角色可收集、進化與養成。</p>
        <img src="/public/神魔背包.jpg" alt="角色蒐集截圖" class="screenshot">
      </details>
      <details open>
        <summary>劇情章節</summary>
        <p>豐富的世界觀與跨時代故事情節。</p>
        <img src="/public/神魔故事1.jpg" alt="小說模式劇情" class="screenshot">
        <div class="caption">遊戲劇情-小說模式</div>
        <img src="/public/神魔故事2.jpg" alt="演出模式劇情" class="screenshot">
        <div class="caption">遊戲劇情-演出模式</div>
      </details>
      <details open>
        <summary>關卡挑戰</summary>
        <p>不同敵人技能與場景機制需要玩家思考對策策略。</p>
        <img src="/public/神魔通關.jpg" alt="戰鬥畫面" class="screenshot">
      </details>
    </section>
    <section>
      <h2>商機分析與IP價值</h2>
      <ul>
        <li>長期運營：持續推出新角色、關卡與合作活動保持玩家黏著度。</li>
        <li>合作聯名：與動畫、遊戲、電影合作吸引粉絲導入遊戲。</li>
        <li>課金模式：抽卡、魅力與資源販售帶來主要收入。</li>
        <img src="/public/神魔商店.jpg" alt="遊戲商城" class="screenshot">
        <li>線下週邊：根據神魔的角色出相關的周邊商品</li>
        <img src="/public/神魔周邊.png" alt="周邊商品" class="screenshot">
      </ul>    
    </section>
    <section>
      <h2>遊戲成就</h2>
      <details open>
        <summary>2020神魔之塔王者盃1600強</summary>
        <p>2020年4月神魔王者盃賽通過海選成功進入1600強，但可惜因為卡片不夠多的關係無法成功進入400強。</p>
        <img src="/public/神魔帳號.jpg" alt="1600強成就" class="screenshot">
      </details>
      <details open>
        <summary>依然使用舊卡去通關新的關卡</summary>
        <p>即使現在卡片型出越多、想來越強，我還是會使用舊的卡片首試進行通關，順便觀察遊戲是否敵原太多，而且看到喜歡的角色過了幾年依然可以通關，內心莫莫覺得感動的。</p>
        <img src="/public/神魔初音通關.jpg" alt="舊卡通關新關卡" class="screenshot">
      </details>
    </section>
    <section>
      <h2>遊戲面臨的問題</h2>
      <details open>
        <summary>新手門檻高</summary>
        <p>五花八門的隊伍技、主動技、敵技、複刻、時光牌，對剛進來的新手來說資訊量過大，很容易在理解上有障礙，必須要看範例或主的影片才有辦法通關，久而久之就會覺得像在抄作業一樣，不夠有玩遊戲感。</p>
      </details>
      <details open>
        <summary>角色數量龐大</summary>
        <p>若角色會因為易得卡片越出越多，敵人越來越強而跟不上環境，逐漸被淘汰。</p>
      </details>
    </section>
  </div>
</template>

<style scoped>
.game-page {
  max-width: 800px;
  margin: 3rem auto;
  background: #fff3e0;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 5px 15px rgba(255, 183, 71, 0.08);
  font-size: 1.1rem;
}
h1 {
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}
h2 {
  font-size: 1.3rem;
  margin: 2.2rem 0 1rem 0;
  color: #ff7e5f;
  font-weight: 700;
}
section {
  margin-bottom: 1.5rem;
  text-align: left;
}
details {
  margin-bottom: 1.2rem;
}
details[open] > summary {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.screenshot {
  width: 100%;
  max-width: 500px;
  margin: 1rem auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.video-wrapper {
  margin: 1.5rem 0;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border: none;
}
.caption {
  text-align: center;
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
</style> 