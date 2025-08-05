<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="profile-photo">
      </div>
      <h1 v-show="showTitle" class="fade-in">以玩家為本 遊戲才能長存</h1>
      <p v-show="showParagraph1" class="fade-in">在虛擬世界裡我的名字叫天元，因為我希望大家天天都有元氣！！！</p>
      <p v-show="showParagraph2" class="fade-in">我玩過許多不同種的遊戲，而且遊玩時間都很長，點進不同區塊有各種介紹。</p>
      <p v-show="showParagraph3" class="fade-in">如果您有興趣想了解更多，歡迎找我聊聊。</p>
    </div>
  </section>
  <section id="services" class="section">
    <div class="container">
      <h2>遊戲介紹</h2>
      <div class="services-grid">
        <router-link class="service-card" to="/maplestory">
          <img class="service-photo" src="/MapleStory-Taiwan.png" alt="新楓之谷">
          <h3>新楓之谷</h3>
        </router-link>
        <router-link class="service-card" to="/project-sekai">
          <img class="service-photo" src="/世界計畫logo.jpg" alt="世界計畫">
          <h3>世界計畫</h3>
        </router-link>
        <router-link class="service-card" to="/tower-of-saviors">
          <img class="service-photo" src="/神魔之塔logo.png" alt="神魔之塔">
          <h3>神魔之塔</h3>
        </router-link>
        <router-link class="service-card" to="/star-rail">
          <img class="service-photo" src="/星鐵logo.png" alt="崩壞：星穹鐵道">
          <h3>崩壞：星穹鐵道</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showTitle: false,
      showParagraph1: false,
      showParagraph2: false,
      showParagraph3: false
    }
  },
  mounted() {
    this.startAnimation()
  },
  methods: {
    startAnimation() {
      // 延遲顯示標題
      setTimeout(() => {
        this.showTitle = true
      }, 500)
      
      // 延遲顯示第一段文字
      setTimeout(() => {
        this.showParagraph1 = true
      }, 1500)
      
      // 延遲顯示第二段文字
      setTimeout(() => {
        this.showParagraph2 = true
      }, 2500)
      
      // 延遲顯示第三段文字
      setTimeout(() => {
        this.showParagraph3 = true
      }, 3500)
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #ffb347 0%, #ff7e5f 100%);
  color: white;
  padding: 6rem 2rem 2rem 2rem;
  text-align: center;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile-photo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.profile-photo img {
  width: auto;
  height: 220px;
  object-fit: contain;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.section {
  padding: 3rem 2rem 5rem 2rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
  justify-content: center;
}
.service-card {
  background: #fff3e0;
  padding: 2rem 1rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(255, 183, 71, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: #ff7e5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.service-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 24px rgba(255, 183, 71, 0.18);
  background: #ffe0b2;
}
.service-photo {
  width: auto;
  height: 120px;
  object-fit: contain;
  border: none;
  border-radius: 0;
  margin-bottom: 1rem;
  box-shadow: none;
}
.service-card h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  color: #ff7e5f;
}
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero h1 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
}

.hero p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
}
</style> 