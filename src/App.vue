<template>
  <div class="style-global">
    <!--  Navigation Bar  -->
    <NavBar/>
    <!--  Introduction  -->
    <IntroBrand />
    <!--  About  -->
    <TitleBar id="about" title="ABOUT."/>
    <AboutBrand class="style-section"/>
    <!--  Utility, community etc...  -->
    <TitleBar id="utility" title="UTILITY, COMMUNITY, BRAND."/>
    <UtilityBrand class="style-section"/>
    <!--  Team  -->
    <TitleBar id="team" title="THE TEAM."/>
    <TheTeam class="style-section"/>
    <!--  Frequently asked questions  -->
    <TitleBar id="faq" title="F.A.Q."/>
    <FrequentlyAsked class="style-section"/>
  </div>
</template>

<script>
import IntroBrand from "@/components/IntroBrand";
import AboutBrand from "@/components/AboutBrand";
import UtilityBrand from "@/components/UtilityBrand";
import TheTeam from "@/components/TheTeam";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import TitleBar from "@/components/TitleBar";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar, TitleBar, FrequentlyAsked, TheTeam, UtilityBrand, AboutBrand, IntroBrand},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap');

@font-face {
  font-family: "Open Sans Condensed";
  src: local("Open Sans Condensed"),
  url("./assets/OpenSans-CondLight.ttf");
}

.style-global {
  font-family: "Ibarra Real Nova", serif;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.style-section {
  margin-top: 35vh;
  margin-bottom: 35vh;
}

@media (max-width: 1100px) {
  .style-section {
    margin-top: 25vh;
    margin-bottom: 25vh;
  }
}
</style>
