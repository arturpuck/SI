<template>
  <ul class="prostitution-announcements-list">
    <li
      class="prostitution-announcement"
      v-for="(announcement, index) in announcements"
      v-bind:key="index"
    >
      <a
        v-bind:href="announcement.announcementURL"
        class="prostitution-announcement-link"
      >
        <img
          v-bind:src="announcement.thumbnailURL"
          v-bind:alt="getAltAttributeContent(announcement.nickname)"
          class="prostitute-announcement-thumbnail"
        />
        <div class="visible-announcement-details">
          <div
            v-text="getAgeLabel(announcement.age)"
            v-bind:style="{ background: getBackground(announcement.age) }"
            class="prostitute-age"
          ></div>
          <div class="prostitute-nickname" v-text="announcement.nickname"></div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import ProstitutionAnnouncementUserListElement from "@interfaces/prostitution/ProstitutionAnnouncementUserListElement";
import Translator from "@jsmodules/translator.js";

export default {
  name: "prostitution-announcements-set",

  props: {
    name: {
      type: String,
      required: false,
      default: "ProstitutionAnnouncementsSet",
    },
  },
  data() {
    return {
      announcements: [],
      translator: Translator,
    };
  },

  methods: {
    updateAnnouncements(announcements: ProstitutionAnnouncementUserListElement): void {
      this.announcements = announcements;
    },

    getBackground(age: number): string {
      let red = (age - 22) * 7;
      let green = 220 - 5 * (age - 18);
      red = red > 255 ? 255 : red;
      red = red < 0 ? 0 : red;
      green = green < 0 ? 0 : green;
      return `rgba(${red},${green}, 0, 0.7)`;
    },

    getAgeLabel(age: number): string {
      return `${this.translator.translate("age")} : ${age}`;
    },

    getAltAttributeContent(nickname: string): string {
      return `${this.translator.translate(
        "profile_picture_of_a_prostitute_with_nickname"
      )} : ${nickname}`;
    },
  },

  mounted() {
    this.emitter.on(`Update${this.name}`, this.updateAnnouncements);
  },
};
</script>

<style lang="scss" scoped>
.visible-announcement-details {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
}

@mixin prostitute-details {
  padding: 6px 0;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: Aldrich;
  text-decoration: none;
}

.prostitute-age {
  @include prostitute-details();
}
.prostitute-nickname {
  background: #000000e3;
  @include prostitute-details();
}
.prostitution-announcements-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
}

.prostitution-announcement {
  height: 300px;
  width: 200px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px black;
  border: 1px solid #b11111;
  &:hover {
    border: 1px solid #e90e55;
  }
}

.prostitution-announcement-link {
  width: 100%;
  display: block;
  height: 100%;
  position: relative;
  text-decoration: none;
}

.prostitute-announcement-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: contrast(130%);
  }
}
</style>
