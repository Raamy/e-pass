<template>
  <div class="style-global">
    <!--  Introduction  -->
    <IntroBrand />
    <!--  About  -->
    <TitleBar title="ABOUT."/>
    <AboutBrand class="style-section"/>
    <!--  Utility, community etc...  -->
    <TitleBar title="UTILITY, COMMUNITY, BRAND."/>
    <UtilityBrand class="style-section"/>
    <!--  Team  -->
    <TitleBar title="THE TEAM."/>
    <TheTeam class="style-section"/>
    <!--  Frequently asked questions  -->
    <TitleBar title="F.A.Q."/>
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

export default {
  name: 'App',
  components: {TitleBar, FrequentlyAsked, TheTeam, UtilityBrand, AboutBrand, IntroBrand},
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
  font-family: "Open Sans Condensed", serif;
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
</style>
