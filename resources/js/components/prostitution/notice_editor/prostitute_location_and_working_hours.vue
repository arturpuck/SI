<template>
  <section>
    <div class="info"></div>
  </section>
</template>
        
<script lang="ts">
export default {
  name: "prostitute-location-and-working-hours",

  emits: ["validated"],

  components: {},

  methods : {
     validateData() : void {

     }
  },

  data() {
    return {};
  },

  mounted() {
    this.emitter.on("prostituteLocationAndWorkingHoursValidator", this.validateData);
  },
};
</script>
        
<style lang="scss" scoped>
@import "~sass/fonts";

</style>
        