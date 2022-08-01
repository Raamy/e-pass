<template>
  <div>
    <div class="container style-description">
      <div data-aos="fade" data-aos-duration="700" class="row">
        <div class="col-md-5">
          <img class="style-image" src="../assets/leo-gavaggio.png" height="450" alt="">
        </div>
        <div class="col-md-7 style-text">
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
      <div data-aos="fade" data-aos-duration="700" style="margin-top: 20vh; margin-bottom: 20vh;" class="row">
        <div class="col-md-9 style-text">
          Jeremy Taltaud aka Jey Noname, co-founder of the studio and <br>
          brand L'encrerie, is an entrepreneur, designer and creative <br>
          director based in Paris and Los Angeles. <br>
          With a strong character, he is a raw personality who only <br>
          believes in argumentative criticism. This approach leads him to <br>
          a real reflection in his relationship with the products he develops. <br>
          With over 20 years of experience, he has worked on the artistic <br>
          direction of the place and the brand L'Encrerie with many <br>
          international actors. <br>
          Over the years, Jey has been able to impose his mark and his <br>
          talent through multiple projects with fashion, music and event <br>
          professionals.
        </div>
        <div class="col-md-3">
          <img class="style-image" src="../assets/jeremy-taltaud.webp" height="450" alt="">
        </div>
      </div>
      <hr>
      <div class="style-wodji-labs">
        <!-- Nothing -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          <h3>NOTHING (Aaron)</h3>
          <span>CO-FOUNDER / HEAD OF PRODUCT</span>
        </div>
        <!-- Nerif -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          NERIF (Vincent) <br>
          CO-FOUNDER / COO
        </div>
        <!-- Malbator -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          MALBATOR (Matthieu) <br>
          CO-FOUNDER / MARKETING DIRECTOR
        </div>
        <!-- Aikoon -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          Aikoon (Bettina) <br>
          DIRECTOR OF COMMUNICATION
        </div>
        <!-- OldCoiner -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          OLDCOINER (Seb) <br>
          COMMUNITY MANAGER / HEAD OF PARTNERSHIPS
        </div>
        <!-- Juno :D -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          JUNO (Ramy) <br>
          LEAD DEVELOPER
        </div>
        <!-- Poppy -->
        <div class="style-card">
          <img class="style-card-image" src="../assets/pfp1.png" alt="">
          POPPY (Léa) <br>
          MEDIA SPECIALIST
        </div>
      </div>
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
  font-size: 30px;
  text-align: justify;
}

.style-image {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.style-card {
  border: solid black 1px;
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

@media (max-width: 1100px) {
  .style-text {
    font-size: 18px;
    text-align: justify;
  }

  .style-image {
    width: 250px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .style-wodji-labs {
    /*display: grid;*/
    /*grid-template-columns: repeat(4, 2fr);*/
  }
}
</style>