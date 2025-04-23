<template>
    <link rel="stylesheet" href="/src/GlobalCSS/main.css">
      <div class="banner-wrapper">
        <video
        src="../assets/foodBannerVid.mp4"
        alt="Banner"
        class="bannerVid"
        muted
        autoplay
        loop
        playsinline
        poster="/src/assets/comtam.jpg"
      ></video>
    <div class="banner-content animate">
      <h1>Đa dạng văn hóa ẩm thực</h1>
      <p>Trải nghiệm tinh hoa ẩm thực bậc nhất thế giới, tự hào mang đến cho bạn những hương vị độc đáo và phong phú.</p>
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

.bannerVid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(65%);
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
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
 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-content p {
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .banner-wrapper {
    height: 350px;
  }

  .banner-content {
    padding: 0 15px;
    width: 90%;
  }

  .banner-content h1 {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .banner-content p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
    max-width: 100%;
    padding: 0 10px;
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
  