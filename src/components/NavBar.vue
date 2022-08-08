<template>
  <b-navbar class="shadow-lg" sticky="true" toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item class="item" v-scroll-to="'#about'" active href="#">About</b-nav-item>
        <b-nav-item class="item" v-scroll-to="'#utility'" active href="#" >Utility</b-nav-item>
        <b-nav-item class="item" v-scroll-to="'#team'" active href="#" >Team</b-nav-item>
        <b-nav-item class="item" v-scroll-to="'#faq'" active href="#" >F.A.Q.</b-nav-item>
        <b-nav-item-dropdown class="item" text="Language" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.item {
  font-size: 24px;
  margin-left: 40px;
  margin-right: 40px;
}
</style>