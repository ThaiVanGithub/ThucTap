<template>
    <link rel="stylesheet" href="/src/GlobalCSS/main.css">
      <div class="banner-wrapper">
        <video
        src="/src/assets/travel.mp4"
        alt="Banner"
        class="bannerVid"
        muted
        autoplay
        loop
        playsinline
      ></video>
    <div class="banner-content animate">
      <h1>Khám phá vẻ đẹp của Việt Nam</h1>
      <p>Việt Nam có rất nhiều nơi lý tưởng để du khách ghé thăm và du lịch, chắc chắn sẽ mang đến trải nghiệm khó quên.</p>
      
    </div>
  </div>
    
  </template>
  
  <style scoped>
  
  .banner-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  }
  
  /* video chính của banner */
  .bannerVid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(65%);
  }
  
  /* chữ trên video */
  .banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 0 20px;
  opacity: 0;
  transform: translate(-50%, -40%);
  transition: all 1s ease;
  }
  
  .banner-content.animate {
  opacity: 1;
  transform: translate(-50%, -50%);
  }
  
  .banner-content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  }
  
  .banner-content p {
  font-size: 18px;
  margin-bottom: 24px;
  }
  
  /* Responsive Mobile */
  @media (max-width: 768px) {
  .banner-wrapper {
    height: 350px;
  }
  
  .banner-content h1 {
    font-size: 28px;
  }
  
  .banner-content p {
    font-size: 16px;
  }
  }
  </style>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
  const content = document.querySelector('.banner-content')
  setTimeout(() => {
    content.classList.add('animate')
  }, 300)
  })
  </script>
  