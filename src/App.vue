<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div id="app">
    <!-- 導航欄 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <router-link to="/" class="nav-link logo-link">威智的遊戲館</router-link>
        </div>
        
        <div class="nav-menu" :class="{ 'active': isMenuOpen }">
          <router-link to="/" class="nav-link">首頁</router-link>
          <router-link :to="{ path: '/', hash: '#services' }" class="nav-link">遊戲介紹</router-link>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- 主要內容 -->
    <main>
      <router-view />
    </main>

    <!-- 頁腳 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2025 威智的遊戲館 保留所有權利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 導航欄樣式 */
.navbar {
  background: linear-gradient(135deg, #ffb347 0%, #ff7e5f 100%); /* 橘黃到橘紅 */
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(255, 183, 71, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h2 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffe082;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

/* 主要內容樣式 */
main {
  flex: 1;
  margin-top: 0;
}

/* 首頁區塊 */
.hero {
  background: linear-gradient(135deg, #ffb347 0%, #ff7e5f 100%); /* 橘黃到橘紅 */
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

/* 區塊樣式 */
.section {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ff7e5f;
}

/* 關於區塊 */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.stat h3 {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 服務區塊 */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff3e0;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(255, 183, 71, 0.08);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff7e5f;
}

/* 聯絡區塊 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-info p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-details p {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #5a6fd8;
}

/* 頁腳樣式 */
.footer {
  background: #ff7e5f;
  color: white;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #ffb347;
}

.footer-section a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #ffe082;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #ffb347;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .nav-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #ffb347;
    padding: 1rem;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .section {
    padding: 3rem 1rem;
  }
  
  .nav-container {
    padding: 0 1rem;
  }
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
.service-photo {
  width: auto;
  height: 120px;
  object-fit: contain;
  border: none;
  border-radius: 0;
  margin-bottom: 1rem;
  box-shadow: none;
}
</style>
