<template>
  <img
    v-bind:src="processedAvatarFilePath"
    alt=""
    v-if="processedAvatarFilePath"
    class="user-image"
  />
  <avatar-icon
    class="unregistered-user-icon"
    v-if="!processedAvatarFilePath"
  ></avatar-icon>
</template>

<script lang="ts">
import AvatarIcon from "@svgicon/avatar_icon.vue";

export default {
  name: "avatar",

  props: {
    superiorAvatarFilePath: {
      type: String,
      required: false,
      default: "",
    },
  },

  inject: {
    avatarFilePath: {
      default: "",
    },
  },

  components: {
    AvatarIcon,
  },

  computed: {
    processedAvatarFilePath(): string {
      return this.superiorAvatarFilePath || this.avatarFilePath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/responsive_icon";

.unregistered-user-icon {
  fill: white;
  @include responsive-icon(0 7px, 2.3vw, 28px);
}

.user-image {
  display: inline-block;
  min-width: 30px;
  min-height: 30px;
  margin: 0 6px;
  width: 2vw;
  height: 2vw;
  border-radius: 6px;
}
</style>