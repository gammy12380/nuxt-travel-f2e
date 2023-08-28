<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import "normalize.css/normalize.css";
export default {
  created() {},
  mounted() {
    console.log(process.env.AppID)
    console.log(process.env.AppKey)
  },
};
</script>
<style lang="scss">
body {
  background: #f6f7fb;
}
</style>