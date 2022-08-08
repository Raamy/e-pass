<template>
  <div>
    <div class="container style-description">
      <div class="row">
        <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="top-center" class="col-md">
          <img class="style-image vertical-center"
               src="@/assets/leo-art.webp" width="500" alt="">
        </div>
        <div data-aos="fade" data-aos-duration="1500" data-aos-anchor-placement="top-center"
             class="col-md style-text">
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
        <div data-aos="fade" data-aos-duration="1500" data-aos-anchor-placement="top-center" class="col-md style-text">
          <div class="vertical-center">
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
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-center" class="col-md">
          <img class="style-image  vertical-center"
               src="@/assets/vitrine-encrerie.webp"
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
  text-justify: distribute;
  text-align-last: left;
}

.style-image {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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