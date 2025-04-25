<template>
    <div class="container-fluid">
        <h2 class="text-center">Trang bài viết và hình ảnh</h2>
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-center align-items-center">
                <a-image :preview="{ visible: false }" :width="200"
                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    @click="visible = true" />
                <div style="display: none">
                    <a-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
                        <a-image
                            src="https://scr.vn/wp-content/uploads/2020/09/Hinh-dep-ve-cuoc-song.jpg" />
                        <a-image
                            src="https://nvnorthwest.com/wp-content/uploads/2020/06/G%C3%A1nh-h%C3%A0ng-b%C3%AC-cu%E1%BB%91n..jpg" />
                        <a-image
                            src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </a-image-preview-group>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const visible = ref(false);
</script>