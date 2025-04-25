<template>
    <div class="main-container">
      <!-- Header Section -->
      <header class="gallery-header text-center py-5 bg-light">
        <div class="container">
          <h1 class="display-5 fw-bold  mb-3">Kho Ảnh Việt Nam</h1>
          <p class="lead text-muted mx-auto" style="max-width: 800px;">
            Khám phá vẻ đẹp đa dạng của Việt Nam qua bộ sưu tập hình ảnh chất lượng cao...
          </p>
        </div>
      </header>
  
      <!-- Gallery -->
      <main class="gallery-main py-5">
        <div class="container">
          <h2 class="section-title text-center mb-5">Hình Ảnh Nổi Bật</h2>
          <div class="row g-4">
            <div v-for="(group, index) in imageGroups" :key="index" class="col-12 col-md-6 col-xl-4">
              <div class="gallery-card position-relative overflow-hidden rounded-4 shadow-lg">
                <a-image
                  :src="group.thumbnail"
                  :preview="false"
                  class="thumbnail-image"
                  @click="openGallery(group.preview)"
                />
                <div class="image-overlay d-flex flex-column justify-content-end">
                  <div class="overlay-content text-white p-4">
                    <h3 class="h5 mb-2">{{ group.title }}</h3>
                    <p class="small mb-0 opacity-75">{{ group.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Global Preview Group -->
          <a-image-preview-group v-model:visible="isPreviewVisible">
            <a-image
              v-for="(img, i) in currentPreviewImages"
              :key="i"
              :src="img"
              class="preview-image"
            />
          </a-image-preview-group>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isPreviewVisible = ref(false)
  const currentPreviewImages = ref([])
  
  const imageGroups = [
    {
      title: 'Phong Nha - Kẻ Bàng',
      description: 'Những cảnh quan thiên nhiên hùng vĩ khắp ba miền',
      thumbnail: 'https://centralvietnamguide.com/wp-content/uploads/2022/04/hoi-an-ancient-town-2.jpg',
      preview: [
        'https://wallpaperaccess.com/full/131779.jpg',
        'https://wallpapercrafter.com/desktop1/548662-vietnam-rice-fields-terraced-mu-cang-chai-yenbai.jpg',
        'https://example.com/landscape-3.jpg'
      ]
    },
    {
      title: 'Hội An',
      description: 'Nét đẹp truyền thống và di sản UNESCO',
      thumbnail: 'https://cdn.pixabay.com/photo/2018/01/04/00/19/da-lat-3059522_1280.jpg',
      preview: [
        'https://example.com/culture-1.jpg',
        'https://example.com/culture-2.jpg',
        'https://example.com/culture-3.jpg'
      ]
    },
    {
      title: 'Ẩm Thực Đặc Sắc',
      description: 'Sông Nho Quế',
      thumbnail: 'https://sinhtour.vn/wp-content/uploads/2021/05/tong-hop-kinh-nghiem-du-lich-song-nho-que-ha-giang-11.jpg',
      preview: [
        'https://example.com/food-1.jpg',
        'https://example.com/food-2.jpg',
        'https://example.com/food-3.jpg'
      ]
    }
  ]
  
  const openGallery = (images) => {
    currentPreviewImages.value = images
    isPreviewVisible.value = true
  }
  </script>
  
  <style scoped>
  .gallery-card {
    transition: all 0.3s ease;
    aspect-ratio: 4/3;
    cursor: pointer;
  }
  .thumbnail-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .gallery-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  .gallery-card:hover .image-overlay {
    opacity: 1;
  }
  .gallery-card:hover .thumbnail-image {
    transform: scale(1.05);
  }
  .overlay-content {
    transform: translateY(20px);
    transition: transform 0.3s ease;
  }
  .gallery-card:hover .overlay-content {
    transform: translateY(0);
  }
  .preview-image {
    max-height: 80vh;
    object-fit: contain;
  }
  .section-title {
    position: relative;
    padding-bottom: 1rem;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: var(--ant-primary-color, #1890ff);
  }
  </style>
  