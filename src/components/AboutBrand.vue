<template>
  <div>
    <div class="container style-description">
      <div class="row">
        <div class="col-md">
          <img data-aos="fade-up" data-aos-duration="1500" class="style-image"
               src="@/assets/leo-art.jpg" width="500" alt="">
        </div>
        <div data-aos="fade" data-aos-duration="1500"
             class="col style-text">
          Because our collection is innovative,
          each pass gives access to a
          physical, exclusive and totally unique
          artwork by the artist Leo GAVAGGIO,
          while unlocking all of the utility
          related to the L'Encrerie collection. <br>
          <br>
          The pass from the L'Encrerie
          collection features an iconic
          illustration by Leo Gavaggio,
          associated with a unique monogram,
          the artist's signature. <br>
          <br>
          L'Encrerie's use of NFTs is an
          important step in our interest for the
          notion of ownership and community.
        </div>
      </div>
      <div style="margin-top: 25vh" class="row">
        <div data-aos="fade" data-aos-duration="1500" class="col-md style-text">
          L'Encrerie is not only a design
          and tattoo studio, it's an
          international art brand that aims to
          create a unique product
          experience as much as an artists'
          incubator. <br>
          <br>
          We want to harmonize the link
          between collectibles and physical
          and digital experiences.
        </div>
        <div class="col">
          <img data-aos="fade-up" data-aos-duration="1500" class="style-image" src="@/assets/vitrine-encrerie.png"
               width="500" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBrand"
}
</script>

<style scoped>
.style-text {
  font-size: 30px;
  text-align: justify;
}

.style-image {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

@media (max-width: 1100px) {
  .style-text {
    font-size: 16px;
    text-align: justify;
  }

  .style-image {
    width: 250px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
}


</style>