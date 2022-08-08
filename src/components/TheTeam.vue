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
      <hr>
        <!-- Nothing -->
<!--        &lt;!&ndash; Nerif &ndash;&gt;-->

<!--        &lt;!&ndash; Malbator &ndash;&gt;-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          MALBATOR (Matthieu) <br>-->
<!--          CO-FOUNDER / MARKETING DIRECTOR-->
<!--        </div>-->
<!--        &lt;!&ndash; Aikoon &ndash;&gt;-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          Aikoon (Bettina) <br>-->
<!--          DIRECTOR OF COMMUNICATION-->
<!--        </div>-->
<!--        &lt;!&ndash; OldCoiner &ndash;&gt;-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          OLDCOINER (Seb) <br>-->
<!--          COMMUNITY MANAGER / HEAD OF PARTNERSHIPS-->
<!--        </div>-->
<!--        &lt;!&ndash; Juno :D &ndash;&gt;-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          JUNO (Ramy) <br>-->
<!--          LEAD DEVELOPER-->
<!--        </div>-->
<!--        &lt;!&ndash; Poppy &ndash;&gt;-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          POPPY (Léa) <br>-->
<!--          MEDIA SPECIALIST-->
<!--        </div>-->
<!--      </div>-->
    </div>
<!--    <div>-->
<!--      <div class="marquee-rtl">-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          <h3>NOTHING</h3>-->
<!--          <span>CO-FOUNDER / HEAD OF PRODUCT</span>-->
<!--        </div>-->
<!--        <div class="style-card">-->
<!--          <img class="style-card-image" src="@/assets/pfp1.png" alt="">-->
<!--          NERIF<br>-->
<!--          CO-FOUNDER / COO-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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

/* ---------------------------- */
/* Défilement de droite à gauche */
.marquee-rtl {
  overflow: hidden; /* important */
  width: 80vw; /* A ADAPTER */
}
.marquee-rtl > div {
  display: inline-block; /* important */
  white-space: nowrap; /* important */
  animation: defilement-rtl 15s infinite linear; /* défilement */
  cursor: pointer;
  padding: 10px 2em 10px 100%;
}
.marquee-rtl:hover > div {
  animation-play-state: paused; /* met en pause le défilement */
}
@keyframes defilement-rtl {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  100% {
    -webkit-transform: translate(-100%);
    transform: translate(-100%);
  }
}
/* ---------------------------- */
/* texte sur plusieurs lignes automatiquement */
.marquee-multi-lignes > div {
  width:90%;
  white-space: normal; /* important */
}

/* ---------------------------- */
/* déco */
h2, p { text-align:center; }

.marquee-rtl {
  margin: 2em auto;
  border: solid black 1px;
  box-shadow: 0 .25em .5em #CCC,inset 0 0 1em .25em #CCC;
}
.marquee-rtl > div {
  font-size: 1.5em;
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