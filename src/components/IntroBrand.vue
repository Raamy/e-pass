<template>
  <div>
    <div class="style-introduction-brand text-center">
    <span data-aos="fade" data-aos-delay="500" class="vertical-center">
      L'Encrerie Pass.
    </span>
    </div>
    <div class="style-description">
      <div>
        <div data-aos="fade" data-aos-duration="1200">
          A collection of 5000 pass living on the <br>
          ethereum blockchain.Each pass <br>
          gives an exclusive access to the <br>
          universe of L'Encrerie, an emblematic <br>
          Parisian place focused on art, <br>
          tattooing, events and ready-to-wear.<br>
          <br>
        </div>
        <div data-aos="fade" data-aos-duration="1200">
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
}

@media (max-width: 1100px) {
  .style-description {
    /*height: 130vh;*/
    font-size: 22px;
  }
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>