<template>
    
    <TheHeader></TheHeader>
    <router-view>
        
    </router-view>
    <TheFooter/>
    
</template>
<style scoped>
.half {
    background: rgb(203, 187, 187);
}
</style>
<script>
import Pagination from "../components/Pagination.vue";
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue";



export default {
    components: {
        TheHeader,
        Pagination,
        TheFooter
       
    }

}

</script>