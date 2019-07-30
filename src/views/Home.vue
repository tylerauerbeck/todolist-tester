<template>
  <div class="home">
    <img
      class="banner-image"
      src="https://www.redhat.com/cms/managed-files/RHOIL_LogoBadge_RGB_Default.png"
      width="330px"
    />
    <h1>Welcome 👋</h1>
    <AboutLabs />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutLabs from "@/components/AboutLabs.vue";

export default {
  name: "home",
  components: {
    AboutLabs
  }
};
</script>
<style scoped>
.banner-image {
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>
