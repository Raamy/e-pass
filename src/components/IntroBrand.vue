<template>
  <div>
    <div class="style-introduction-brand text-center">
    <span data-aos="fade" data-aos-delay="500" class="vertical-center">
      L'ENCRERIE PASS
    </span>
    </div>
    <div class="style-description">
      <div class="container">
        <div data-aos="fade" data-aos-duration="1200">
          A collection of 5000 pass living on the
          ethereum blockchain. Each pass
          gives an exclusive access to the
          universe of L'Encrerie, an emblematic
          Parisian place focused on art,
          tattooing, events and ready-to-wear.
          <br>
        </div>
        <div class="text-center mt-5" data-aos="fade" data-aos-duration="1200">
          - Let's bring romance and utility to WEB3 -
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroBrand"
}
</script>

<style scoped>
.style-introduction-brand {
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 63px;
}

.style-description {
  margin-top: 35vh;
  margin-bottom: 35vh;
  font-size: 44px;
  text-align: justify;
  justify-content: center;
}

.container {
  max-width: 50vw;
  justify-content: center;
}

@media (max-width: 1100px) {
  .style-description {
    /*height: 130vh;*/
    font-size: 22px;
  }

  .container {
    max-width: 100vw;
  }
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>