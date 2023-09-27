<template>
  <ul class="prostitution-announcements-list">
    <li
      class="prostitution-announcement"
      v-for="(announcement, index) in announcements"
      v-bind:key="index"
    >
      <a
        v-bind:href="announcement.announcementURL"
        v-bind:style="{ 'background-image': `url(${announcement.thumbnailURL})` }"
        class="prostitution-announcement-link"
      >
        <span class="prostitute-nickname" v-text="announcement.nickname"></span>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import ProstitutionAnnouncementUserListElement from "@interfaces/prostitution/ProstitutionAnnouncementUserListElement";

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
    };
  },

  methods: {
    updateAnnouncements(announcements: ProstitutionAnnouncementUserListElement): void {
      alert("w komponencie announcements set");
      this.announcements = announcements;
    },
  },

  mounted() {
    this.emitter.on(`Update${this.name}`, this.updateAnnouncements);
  },
};
</script>

<style lang="scss" scoped>
.prostitute-nickname {
  width: 100%;
  padding: 6px 0;
  text-align: center;
  color: white;
  background: #000000e3;
  font-size: 16px;
  font-family: Aldrich;
  text-decoration: none;
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
  border: 2px solid #232121;
}

.prostitution-announcement-link {
  width: 100%;
  display: block;
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-decoration: none;
}
</style>
