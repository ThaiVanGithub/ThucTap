<template>
  <section class="food-section py-5">
    <div class="container">
      <!-- Phần giới thiệu -->
      <div class="intro-section mb-5">
        <h1 class="text-center mb-4">Ẩm Thực Việt Nam - Tinh Hoa Văn Hóa</h1>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <p class="lead text-center">
              Ẩm thực Việt Nam là sự kết hợp hài hòa giữa hương vị, màu sắc và dinh dưỡng.
              Mỗi vùng miền đều mang đến những đặc trưng riêng, tạo nên bức tranh ẩm thực
              đa dạng và phong phú.
            </p>
            <p class="text-center">
              Từ những món ăn đường phố giản dị đến các món cổ truyền cầu kỳ, ẩm thực Việt
              luôn chinh phục thực khách bởi sự tinh tế trong cách chế biến và hương vị
              đậm đà khó quên.
            </p>
          </div>
        </div>
      </div>

      <!-- Phần video và mô tả món ăn -->
      <div class="dish-showcase mb-5 p-3" style="background-color: #F6F0F0;">
        <h2 class="text-center mb-5">Đặc Sản Các Vùng Miền</h2>

        <!-- Món Phở Hà Nội -->
        <div class="row align-items-center mb-4">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="video-container ratio ratio-16x9">
              <video src="../assets/phoVid.webm" autoplay muted></video>
            </div>
          </div>
          <div class="col-md-8">
            <div class="dish-info p-3 p-lg-4">
              <h3>Phở Hà Nội</h3>
              <p><strong>Vùng miền:</strong> Miền Bắc</p>
              <p><strong>Nguyên liệu chính:</strong> Bánh phở, thịt bò, xương bò, gia vị phở</p>
              <p><strong>Cách chế biến:</strong> Nước dùng ninh từ xương bò, thịt bò thái mỏng, chan nước dùng nóng</p>
              <p>Phở Hà Nội nổi tiếng với nước dùng trong, vị thanh nhẹ nhưng đậm đà, bánh phở mềm mại.</p>
            </div>
          </div>
        </div>

        <!-- Món Bún bò Huế -->
        <div class="row align-items-center mb-4">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="video-container ratio ratio-16x9">
              <video src="../assets/bunbohue.webm" autoplay muted></video>
            </div>
          </div>
          <div class="col-md-8">
            <div class="dish-info p-3 p-lg-4">
              <h3>Bún bò Huế</h3>
              <p><strong>Vùng miền:</strong> Miền Trung</p>
              <p><strong>Nguyên liệu chính:</strong> Bún, thịt bò, giò heo, mắm ruốc, ớt</p>
              <p><strong>Cách chế biến:</strong> Nước dùng nấu từ xương bò và mắm ruốc, thêm thịt bò và giò heo</p>
              <p>Bún bò Huế có vị cay nồng đặc trưng, nước dùng đậm đà với sắc đỏ của ớt.</p>
            </div>
          </div>
        </div>

        <!-- Món Hủ tiếu Nam Vang -->
        <div class="row align-items-center mb-4 ">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="video-container ratio ratio-16x9">
              <video src="../assets/hutieu.webm" autoplay muted></video>
            </div>
          </div>
          <div class="col-md-8">
            <div class="dish-info p-3 p-lg-4">
              <h3>Hủ tiếu Nam Vang</h3>
              <p><strong>Vùng miền:</strong> Miền Nam</p>
              <p><strong>Nguyên liệu chính:</strong> Hủ tiếu, thịt heo, tôm, gan, trứng cút</p>
              <p><strong>Cách chế biến:</strong> Nước dùng trong từ xương heo, thêm các loại thịt và hải sản</p>
              <p>Hủ tiếu Nam Vang có nước dùng ngọt thanh, nhiều topping hấp dẫn.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Phần thành tựu -->
      <div class="achievements-section">
        <h2 class="text-center mb-5 ">Thành Tựu Trên Thế Giới</h2>
        <div class="row p-3">
          <!-- Thành tựu 1 -->
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Phở lọt top 20 món ăn ngon nhất thế giới</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Tạp chí CNN bình chọn phở là một trong những món ăn ngon nhất thế giới.</p>
                <small>Phở là món ăn vô cùng đặc trưng của người Việt, hầu như tất cả du khách nước ngoài đến
                  đây du lịch đều biết tới Phở và đắm chìm trong hương vị của nó, tất cả nguyên liệu là công khai
                  và...
                </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>

              <div class="card-footer bg-transparent">
                <small class="text-muted">Báo tuổi trẻ năm: 2021</small>
              </div>
            </div>
          </div>

          <!-- Thành tựu 2 -->
          <div class="col-md-4 mb-4  ">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Bánh mì Việt Nam được vinh danh toàn cầu</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Từ điển Oxford công nhận từ "banh mi" như một từ tiếng Anh chính thức.</p>
                <small>Bánh mì là món khá giống sandwich của phương tây nhưng nó lại mang mùi vị đặc trưng và ngon
                  hơn nhiều so với các món sandwich, thường thì chúng sẽ có thịt, rau mùi và đồ chua ăn kèm...
                </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>
              <div class="card-footer bg-transparent">
                <small class="text-muted">NYnews năm: 2020</small>
              </div>
            </div>
          </div>

          <!-- Thành tựu 3 -->
          <div class="col-md-4 mb-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Nem rán trong top món khai vị hấp dẫn</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Tạp chí ẩm thực Food & Wine xếp nem rán vào top món khai vị ngon nhất.</p>
                <small>Nem rán có mặt ở hầu như tất cả vùng miền của Việt Nam với cách chế biến giống nhau nhưng có thể
                  khác nhau một chút về nguyên liệu ở từng nơi, nhưng dù vậy nem rán vẫn là món ăn vô cùng ngon của
                  người Việt... </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>
              <div class="card-footer bg-transparent">
                <small class="text-muted">Nhật báo năm: 2019</small>

              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Nem rán trong top món khai vị hấp dẫn</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Tạp chí ẩm thực Food & Wine xếp nem rán vào top món khai vị ngon nhất.</p>
                <small>Nem rán có mặt ở hầu như tất cả vùng miền của Việt Nam với cách chế biến giống nhau nhưng có thể
                  khác nhau một chút về nguyên liệu ở từng nơi, nhưng dù vậy nem rán vẫn là món ăn vô cùng ngon của
                  người Việt... </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>
              <div class="card-footer bg-transparent">
                <small class="text-muted">Nhật báo năm: 2019</small>

              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Nem rán trong top món khai vị hấp dẫn</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Tạp chí ẩm thực Food & Wine xếp nem rán vào top món khai vị ngon nhất.</p>
                <small>Nem rán có mặt ở hầu như tất cả vùng miền của Việt Nam với cách chế biến giống nhau nhưng có thể
                  khác nhau một chút về nguyên liệu ở từng nơi, nhưng dù vậy nem rán vẫn là món ăn vô cùng ngon của
                  người Việt... </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>
              <div class="card-footer bg-transparent">
                <small class="text-muted">Nhật báo năm: 2019</small>

              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 ">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Nem rán trong top món khai vị hấp dẫn</h5>
                <small class="text-muted">Lượt xem: 2000
                  <i class="fa-solid fa-eye text-secondary "></i> </small>
                <small> | </small>
                <small class="text-muted">Lượt thích: 1259
                  <i class="fa-solid fa-heart text-danger"></i> </small>
                <small> | </small>
                <small class="text-muted">Bình luận: 210
                  <i class="fa-solid fa-comment text-primary"></i> </small>
                <p class="card-text">Tạp chí ẩm thực Food & Wine xếp nem rán vào top món khai vị ngon nhất.</p>
                <small>Nem rán có mặt ở hầu như tất cả vùng miền của Việt Nam với cách chế biến giống nhau nhưng có thể
                  khác nhau một chút về nguyên liệu ở từng nơi, nhưng dù vậy nem rán vẫn là món ăn vô cùng ngon của
                  người Việt... </small>
                <a href="#" class="text-decoration-none">Đọc thêm...</a>
              </div>
              <div class="card-footer bg-transparent">
                <small class="text-muted">Nhật báo năm: 2019</small>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12 ratio ratio-16x9 mb-4">
            <video src="https://videos.pexels.com/video-files/6645672/6645672-hd_1920_1080_30fps.mp4"
            autoplay muted></video>
          </div>
          <div class="col-lg-6 col-sm-12 ratio ratio-16x9">
            <video src="/src/assets/dulich1.mp4"
            autoplay muted></video>
          </div>
        </div>
      </div>
    
    </div>
  </section>
</template>

<script>
export default {
  name: 'FoodSection'
}
</script>

<style scoped>
.achivement {
  background-image: url('https://images.creativemarket.com/0.1.0/ps/7358706/1820/1213/m1/fpnw/wm1/r4ejcddlzrzpyfjdouhnnkfgfjrjuy4xyhhcnkuxt3m6rh05n4fnjqlf92qwdpkn-.jpg?1574658759&s=bdcb7212acfc1980a7cfee59581e102a');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

}

.food-section {
  background-color: #f8f9fa;
}

.intro-section {
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.dish-showcase {
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.dish-info {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.achievements-section {
  padding: 2rem 0;
}

.card {
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.video-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .dish-info {
    margin-top: 1rem;
  }

  .intro-section,
  .dish-showcase,
  .achievements-section {
    padding: 1rem 0;
  }
}
</style>