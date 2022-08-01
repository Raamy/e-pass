<template>
  <div class="style-title-bar">
    <span data-aos="fade" data-aos-anchor-placement="top-center" class="vertical-center">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: String
  }
}
</script>

<style scoped>
.style-title-bar {
  height: 30vh;
  background-color: black;
  color: white;
  font-size: 63px;
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media (max-width: 1100px) {
  .style-title-bar {
    height: 30vh;
    background-color: black;
    color: white;
    font-size: 34px;
  }
}
</style>