<script setup>
import { ref } from 'vue'

const openMenu = ref(false)
const showLogin = ref(false)
const isLoggedIn = ref(false)



const fakeLogin = () => {
  isLoggedIn.value = true
  showLogin.value = false
  openMenu.value = false
}


const handleLogout = () => {
  isLoggedIn.value = false
  openMenu.value = false
}
</script>

<template>
  <link rel="stylesheet" href="/src/GlobalCSS/main.css">
  <header class="container-fluid bg-white shadow-sm py-2 px-3">
    <nav class="d-flex justify-content-between align-items-center gap-3">

      <div class="d-flex align-items-center">
        <a href="http://localhost:5173"> <img src="../assets/vlg.png" alt="Logo" class="logo" width="50"
            height="50"></a>
        <a href="http://localhost:5173" class="ms-2 fs-5 fw-bold" style="font-family: Playwrite BE VLG; color: #D84040;
        text-decoration: none;">Vtravel</a>
      </div>

      <div class="d-none d-md-flex align-items-center gap-4" style="font-weight: 500;">
        <a href="http://localhost:5173" class="text-dark text-decoration-none">Trang chủ</a>
        <a href="http://localhost:5173/food" class="text-dark text-decoration-none">Ẩm thực</a>
        <a href="http://localhost:5173/history" class="text-dark text-decoration-none">Lịch sử</a>
        <a href="http://localhost:5173/travel" class="text-dark text-decoration-none">Du lịch</a>

        <button v-if="!isLoggedIn" @click="showLogin = true"
         class="btn btn-primary"
         style="background-color: #D84040; color: white;
         border: black;">
          Đăng nhập
        </button>

        <button v-else @click="handleLogout" 
        class="btn btn-outline-danger" 
        style="background-color: #D84040;
          border: black;
          color: white">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>


      <button @click="openMenu = true" 
      style="background-color: #D84040 ;" 
      class="btn btn-primary d-md-none">
        <i class="fas fa-bars"></i>
      </button>
    </nav>


    <div v-if="openMenu" class="mobile-menu">
      <div class="menu-header">
        <h5>Menu</h5>
        <button @click="openMenu = false" class="btn btn-close"></button>
      </div>

      <div class="menu-body">
        <a href="http://localhost:5173" class="menu-item">Trang chủ</a>
        <a href="http://localhost:5173/food" class="menu-item">Ẩm thực</a>
        <a href="http://localhost:5173/history" class="menu-item">Lịch sử</a>
        <a href="http://localhost:5173/travel" class="menu-item">Du lịch</a>


        <button v-if="!isLoggedIn" @click="showLogin = true" 
        class="btn btn-primary w-100 mt-2"
          style="background-color: #D84040; color: white;">
          Đăng nhập
        </button>

        <button v-else @click="handleLogout" 
        class="btn btn-outline-danger w-100 mt-2">
          Đăng xuất
        </button>
      </div>
    </div>


    <div v-if="showLogin" class="login-modal">
      <div class="modal-content">
        <div class="modal-header">

          <button @click="showLogin = false" class="btn "> <i class="fa-solid fa-xmark"></i> </button>
        </div>

        <div class="modal-body">
          <form class="form-input p-3">
            <div class="mb-3">
              <label class="form-label"><strong>Tên đăng nhập</strong></label>
              <input type="text" v-model="username" class="form-control" placeholder="Nhập email hoặc username">
            </div>

            <div class="mb-3">
              <label class="form-label"><Strong>Mật khẩu</Strong></label>
              <input type="password" v-model="password" class="form-control" placeholder="Nhập mật khẩu">
            </div>

            <button @click="fakeLogin" class="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>

          <div class="text-muted text-center mt-3">

            <p> <strong style="color: #D84040; cursor: pointer;">Đăng ký </strong> nếu bạn chưa có tài khoản </p>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>


.btn-primary {
  background-color: #D84040;
  color: white;
  --bs-btn-border-color: none;
}

.logo {
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.menu-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item {
  display: block;
  padding: 0.8rem 1rem;
  color: #333;
  text-decoration: none;
}

.menu-item:hover {
  background: #f8f9fa;
}

.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
</style>