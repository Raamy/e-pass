<template>
  <div>
    <div class="container">
      <div class="center">
        <div data-aos="fade" data-aos-duration="700" style="margin-top: 20vh" class="row">
          <div>
            <h1>WEB3 BRAND AND INCUBATOR.</h1>
            <img style="margin-top: 5vh; margin-bottom: 5vh" src="../assets/leo-jey.png" class="style-image" alt="">
            <div>
              <div class="style-text text-ceter">
                An ecosystem that covers the real and virtual world,
                L'ENCRERIE Pass holders will have access to :
              </div>
              <br>
              <br>
              <div class="text-start style-text">
                • Virtual events organized by the team.<br>
                • Exclusive drops in limited quantities.<br>
                • Development of the brand on the Web3<br>
                • Artists' collections from our Incubator.<br>
                • Whitelists of other promising projects.<br>
                • Private chats based on unicity and knowledge
                sharing.<br>
                • Download your unique artwork in a variety of high
                resolution formats.
              </div>
            </div>
            <br>
          </div>
        </div>
        <div data-aos="fade" data-aos-duration="700" style="margin-top: 20vh" class="row">
          <div class="col-md-6">
            <img class="style-image" src="@/assets/t-shirt.png" alt="">
          </div>
          <div class="col-md-6">
            <div class="vertical-center">
              <h1>PHYSICAL BRAND.</h1>
              <div class="style-text justify">
                L'ENCRERIE pass comes with a stocking feature and accumulates a maximum of advantages to use on our
                MarketPlace : <br>
              </div>
              <br>
              <div class="style-text text-start">
                • Accessories and ready-to-wear pieces by Leo Gavaggio.<br>
                • 5000 high quality Prints, signed with anti-counterfeiting measure.<br>
                • Rare multi-medium artwork in limited editions.<br>
                • Products in collaboration with Artists and Brands.
              </div>
            </div>
            <br>
          </div>
        </div>
        <div data-aos="fade" data-aos-duration="700" style="margin-top: 20vh" class="row">
          <div class="col-md-6">
            <h1>EVENT.</h1>
            <div class="style-text text-start">
              At L'ENCRERIE we make the real life our priority. <br>
              Build relationships, make friends and enjoy unique experiences.
              <br>
              <br>
              • Annual IRL events taking place in France and the United States.<br>
              • Exclusive events: exhibitions, concerts and private parties in collaboration with iconic places and
              brands.<br>
              • Tattoos and visits to Leo Gavaggio's studio.
            </div>
            <br>
          </div>
          <div class="col-md-6">
            <img class="style-image" src="@/assets/event.png" alt="">
          </div>
        </div>
        <div data-aos="fade" data-aos-duration="700" style="margin-top: 20vh; margin-bottom: 20vh" class="row">
          <div class="col-md-6">
            <img class="style-image vertical-center" src="@/assets/basket-tattoo.jpg" alt="">
          </div>
          <div class="col-md-6">
            <h1>FUTURE AND COLLAB.</h1>
            <div class="style-text justify mt-5">
              L'Encrerie Pass is a long term project, our objective is to
              build a sustainable brand focused on community, art and
              utility.
            </div>
            <br>
            <div class="style-text justify">
              We are already working on future collaborations with artists,
              celebrities and iconic brands. Holding a L'Encrerie Pass will give you privileged access to
              Leo and Jey's circle of friends, as well as to the future of the
              project and the products and events that will be linked to it.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UtilityBrand"
}
</script>

<style scoped>
.style-text {
  font-size: 26px;
}

.justify {
  text-align: justify;
  text-justify: distribute;
  text-align-last: right;
}

.style-image {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  height: auto;
  width: 500px;
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}


@media (max-width: 1100px) {
  .style-image {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 350px;
    height: auto;
  }
}

</style>