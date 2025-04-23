<template>
    <link rel="stylesheet" href="/src/GlobalCSS/main.scss">
    <section class="travel-video py-5 text-center">
        <div class="container">
            <div class="row text-center d-flex justify-content-center
             text-uppercase fs-4">
                <div class="col-lg-3 col-sm-6">
                    <a href="#bien">Du lịch vùng biển</a>
                    <video src="/src/assets/bienVH.mp4" class="img-fluid" autoplay muted></video>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="#dongbang">Du lịch đồng bằng</a>
                    <video src="/src/assets/cairang.mp4" class="img-fluid" autoplay muted></video>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="#tonghop">Du lịch tổng hợp</a>
                    <video src="/src/assets/tonghop.mp4" class="img-fluid" autoplay muted></video>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <a href="#vungcao">Du lịch vùng cao</a>
                    <video src="/src/assets/dalat.mp4" class="img-fluid" autoplay muted></video>
                </div>
            </div>
        </div>
    </section>

    <section class="travel-text">
        <div class="container">
            <!-- phần chữ -->
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-6 col-sm-12 bg-light p-4 rounded-3 text-travel">
                    <h1>Khám phá vẻ đẹp đa sắc màu của Việt Nam</h1>
                    <p>Việt Nam có rất nhiều nơi lý tưởng để du khách ghé thăm và du lịch, chắc chắn sẽ mang đến trải
                        nghiệm khó quên. (Nội dung được lặp lại để minh họa)</p>
                    <p>Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.
                        Những địa điểm du lịch nổi tiếng từ Bắc vào Nam với cảnh quan thiên nhiên hùng vĩ, di sản văn
                        hóa
                        độc đáo và ẩm thực phong phú.</p>
                </div>

                <!-- phần ảnh -->
                <div class="col-lg-6 col-sm-12 mt-4 mt-lg-0">
                    <div class="carousel slide" data-bs-ride="carousel" ref="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(img, index) in images"
                                :class="{ active: index === activeIndex }" :key="images[index]">
                                <img :src="img" class="d-block w-100 rounded-3 img-fluid" alt="Vietnam landscape">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" @click="prevSlide">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" @click="nextSlide">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="search-place py-5 text-center" id="search-place">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 text-center mb-3">
                    <h1 class="text-uppercase py-3">Tìm kiếm địa điểm du lịch</h1>
                    <p>Nhập tên địa điểm bạn muốn tìm kiếm</p>
                    <input type="text" class="form-control" placeholder="Nhập tên địa điểm...">
                    <button class="btn btn-primary mt-3">Tìm kiếm</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import hoiAn from '/src/assets/hoiAn.jpg'
import ruongbt from '/src/assets/ruongbt.jpg'
import duongphovn from '/src/assets/duongphovn.jpg'
import hoiAn2 from '/src/assets/hoiAn2.jpg'
import chua from '/src/assets/chua.jpg'
import snque from '/src/assets/snque.jpeg'
export default {
    data() {
        return {


            tours: [
                { name: 'Hội An', image: hoiAn },
                { name: 'Ruộng bậc thang', image: ruongbt },
                { name: 'Đường phố Việt Nam', image: duongphovn },
                { name: 'Hội An 2', image: hoiAn2 },
                { name: 'Chùa', image: chua },
                { name: 'Sapa', image: snque }
            ],
            images: [
                hoiAn,
                ruongbt,
                duongphovn,
                hoiAn2,
                chua,
                snque,
            ],
            activeIndex: 0
        };
    },
    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
        }
    },

};
</script>


<style>
.text-travel {
    height: 400px;
    overflow: hidden;
}

.carousel-control-prev,
.carousel-control-next {
    background-color: rgba(0, 0, 0, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
    background-color: rgba(0, 0, 0, 0.4);
}

.carousel-item {
    height: 400px;
    overflow: hidden;
}

.carousel-item img {
    height: 100%;
    object-fit: cover;
}
</style>