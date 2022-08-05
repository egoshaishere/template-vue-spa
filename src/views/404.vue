<template>
<div class="nf404__container">
    <div class="text_404">404</div>
    <img class="pic_404" src="/404.jpg" alt="">
</div>
  
</template>

<script>
export default {
    name: 'NotFound'

}
</script>

<style>

.nf404__container{
    position: relative;
    text-align: center;
}

.text_404 {
    position: relative;
    z-index: 10;
    top: 40px;
    font-weight: 900;
    font-size: 70px;
}

.pic_404 {
    position: relative;
    top: -200px;
    z-index: 1;
}

</style>