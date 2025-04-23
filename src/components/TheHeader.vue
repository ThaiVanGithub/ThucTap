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

          <router-link to="/" class="text-white nav-link" exact-active-class="text-danger" exact>
            <img src="../assets/vlg.png" alt="Logo" class="logo" width="50" height="50">
          </router-link>
       
        
         <router-link to="/" exact-active-class="text-danger" exact>
          <p class="m-0 ms-2 fs-5 fw-bold" style="font-family: Playwrite BE VLG; color: #D84040;">VTravel</p>
        </router-link>
      </div>

      <div class="d-none d-md-flex align-items-center gap-4" style="font-weight: 500;">
        <router-link to="/" exact-active-class="text-danger" exact>
          <p class="nav-link m-0 ">Trang chủ</p>
        </router-link>

        <router-link to="/Food" active-class="text-danger" exact>
          <p class="nav-link m-0">Ẩm thực</p>
        </router-link>

        <router-link to="/History" active-class="text-danger" exact>
          <p class="nav-link m-0 ">Lịch sử</p>
        </router-link>
        
        <router-link to="/Travel" active-class="text-danger" exact>
          <p class="nav-link m-0">Du lịch</p>
        </router-link>

        <button v-if="!isLoggedIn" @click="showLogin = true" class="btn btn-primary" style="background-color: #D84040; color: white;
         border: black;">
          Đăng nhập
        </button>

        <!-- icon đăng xuất -->
        <button v-else @click="handleLogout" class="btn btn-outline-danger" style="background-color: #D84040;
          border: black;
          color: white">
        Đăng xuất
        </button>
      </div>


      <button @click="openMenu = true" style="background-color: #D84040 ;" class="btn btn-primary d-md-none">
        <i class="fas fa-bars"></i>
      </button>
    </nav>


    <div v-if="openMenu" class="mobile-menu">
      <div class="menu-header">
        <h5>Menu</h5>
        <button @click="openMenu = false" class="btn btn-close"></button>
      </div>

      <div class="menu-body">
        <router-link to="/" active-class="text-danger" exact>
          <p class="nav-link m-0 menu-item ">Trang chủ</p>
        </router-link>

        <router-link to="/Food" active-class="text-danger" exact>
          <p class="nav-link m-0 menu-item">Ẩm thực</p>
        </router-link>

        <router-link to="/History" active-class="text-danger" exact>
          <p class="nav-link m-0  menu-item">Lịch sử</p>
        </router-link>
        
        <router-link to="/Travel" active-class="text-danger" exact>
          <p class="nav-link m-0 menu-item">Du lịch</p>
        </router-link>


        <button v-if="!isLoggedIn" @click="showLogin = true" class="btn btn-primary w-100 mt-2"
          style="background-color: #D84040; color: white;">
          Đăng nhập
        </button>

        <button v-else @click="handleLogout" class="btn btn-outline-danger w-100 mt-2">
          Đăng xuất
        </button>
      </div>
    </div>


    <div v-if="showLogin" class="login-modal">
      <div class="modal-content">
        <div class="modal-header" >
          <button @click="showLogin = false" class="btn "> <i class="fas fa-times"></i> </button>
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
  display: flex;
  justify-content: flex-end;
}
.modal-header .btn {
  background: #D84040;
  color:white;
}
</style>