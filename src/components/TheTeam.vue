<template>
  <div>
    <div class="container style-description">
      <div class="row">
        <div data-aos="fade-down" data-aos-duration="700" data-aos-anchor-placement="top-center" class="col-lg-7">
          <img class="style-image vertical-center" src="@/assets/leo-gavaggio.webp" height="450" alt="">
        </div>
        <div data-aos="fade" data-aos-duration="700" data-aos-anchor-placement="top-center" class="col-lg-5 style-text">
          Leo Gavaggio, is an artist designer and tattoo artist from Paris
          with an international reputation. From modern art to Pinstriping,
          he cultivates multiple references and influences. <br>
          <br>
          Through a unique calligraphy, which made his notoriety, he
          imagines exceptional pieces with daring and delicate curves. <br>
          <br>
          Leo delivers a very singular artistic expression that combines
          both the raw and the elegant on all the mediums he has in his
          hands, from skin to ready-to-wear. <br>
          <br>
          Co-founder of L'Encrerie studio in Paris, he is known for having
          worked with several brands and celebrities, such as singers,
          models, actors and influencers from around the world.
        </div>
      </div>
      <div data-aos="fade" data-aos-duration="700" data-aos-anchor-placement="top-center" style="margin-top: 20vh; margin-bottom: 20vh;" class="row">
        <div class="col-lg-6 order-lg-1 order-md-2 style-text">
            Jeremy Taltaud aka Jey Noname, co-founder of the studio and
            brand L'encrerie, is an entrepreneur, designer and creative
            director based in Paris and Los Angeles.
          <br>
          <br>
          With a strong character, he is a raw personality who only
          believes in argumentative criticism. This approach leads him to
          a real reflection in his relationship with the products he develops.
          <br>
          <br>
          With over 20 years of experience, he has worked on the artistic
          direction of the place and the brand L'Encrerie with many
          international actors.
          <br>
          <br>
          Over the years, Jey has been able to impose his mark and his
          talent through multiple projects with fashion, music and event
          professionals.
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-center" class="col-lg-6 order-lg-2 order-md-1">
          <img class="style-image vertical-center" src="@/assets/jey.png" height="450" alt="">
        </div>
      </div>
      <!-- SECTION : Partenariat -->
      <div class="grid">
        <div><img src="../assets/givenchy.png" alt=""></div>
        <div><img src="../assets/reebook.png" alt=""></div>
        <div><img src="../assets/vans.png" alt=""></div>
        <div><img src="../assets/adidas.png" alt=""></div>
      </div>
      <div class="grid">
        <div><img src="../assets/timberland.png" alt=""></div>
        <div><img src="../assets/colette.png" alt=""></div>
        <div><img src="../assets/sarenza.png" alt=""></div>
        <div><img src="../assets/mustang.webp" alt=""></div>
      </div>
    </div>

      <hr>
      <!-- SECTION : Wodji Labs -->
      <div class="marquee">
        <!-- Nothing -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>NOTHING</h5>
          CO-FOUNDER / HEAD OF PRODUCT
        </span>
        <!-- Nerif -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>NERIF</h5>
          CO-FOUNDER / COO
        </span>
        <!-- Malbator -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>MALBATOR</h5>
          CO-FOUNDER / MARKETING DIRECTOR
        </span>
        <!-- Aikoon -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>BETTINA</h5>
          DIRECTOR OF COMMUNICATION
        </span>
        <!-- OldCoiner -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>OLDCOINER</h5>
          COMMUNITY MANAGER / HEAD OF PARTNERSHIPS
        </span>
        <!-- Juno ;) -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>JUNO</h5>
          LEAD DEVELOPER
        </span>
        <!-- Poppy -->
        <span class="style-card">
          <img class="style-card-image" src="@/assets/pfp1.png" alt="">
          <h5>POPPY</h5>
          MEDIA SPECIALIST
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: "TheTeam"
}
</script>

<style scoped>

.style-text {
  font-size: 26px;
  text-align: justify;
  text-justify: distribute;
  text-align-last: left;
}

.vertical-center {
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}


.container {
  max-width: 60%;
}

.style-image {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.style-card {
  /*border: solid black 1px;*/
  max-width: 300px;
}

.style-card-image {
  max-width: 300px;
}

.style-wodji-labs {
  margin-top: 20vh;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
}

.marquee {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.marquee span {
  display: inline-block;
  /*padding-right: 103px;*/
  margin-left: 100px;
  margin-right: 100px;
  animation: marquee 24s linear infinite;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.grid > div {
  /*background: black;*/
  padding: 1rem;
  display: grid;
}

.grid > div::before {
  content: "";
  padding-bottom: 100%;
  display: block;
}

.grid > div::before,
.grid > div > img {
  grid-area: 1 / 1 / 2 / 2;
}

.grid > div > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 0.1rem black);
}

@keyframes marquee {
  from {
    transform: translateX(450%);
  }
  to {
    transform: translateX(-1150%);
  }
}

@media (max-width: 1100px) {
  .style-text {
    font-size: 18px;
    text-align: justify;
  }

  .style-image {
    width: 350px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .style-wodji-labs {
    /*display: grid;*/
    /*grid-template-columns: repeat(4, 2fr);*/
  }

  .container {
    max-width: 85vw;
  }
}


</style>