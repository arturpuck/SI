<template>
  <div class="list-container">
    <expect-shadow-circle
      v-show="fetchingInProgress"
      v-bind:circle-label="translations.fetchingAnnouncements"
    ></expect-shadow-circle>
    <table class="announcements-table" v-if="userHasAnyAnnouncements">
      <thead>
        <th class="list-header" v-text="translations.nickname"></th>
        <th class="list-header" v-text="translations.region"></th>
        <th class="list-header" v-text="translations.city"></th>
        <th class="list-header" v-text="translations.phoneNumber"></th>
        <th class="list-header" v-text="translations.hiddenByAUser"></th>
        <th class="list-header" v-text="translations.photosAreValidAndUpToDate"></th>
        <th class="list-header" v-text="translations.validUntil"></th>
        <th class="list-header" v-text="translations.actions"></th>
      </thead>
      <tbody>
        <tr
          class="announcement-row"
          v-for="(announcement, index) in announcementsBasicInformationList"
          v-bind:key="index"
        >
          <td
            class="announcement-cell"
            v-bind:data-label="translations.nickname"
            v-text="announcement.nickname"
          ></td>
          <td
            class="announcement-cell"
            v-bind:data-label="translations.region"
            v-text="announcement.region"
          ></td>
          <td
            class="announcement-cell"
            v-bind:data-label="translations.city"
            v-text="announcement.city"
          ></td>
          <td
            v-bind:data-label="translations.phoneNumber"
            class="announcement-cell"
            v-text="getPhoneNumber(announcement.phoneNumber)"
          ></td>
          <td
            v-bind:data-label="translations.hiddenByAUser"
            class="announcement-cell"
            v-text="transformBooleanToYesOrNo(announcement.hiddenByAUser)"
          ></td>
          <td
            v-bind:data-label="translations.photosAreValidAndUpToDate"
            class="announcement-cell"
            v-text="transformBooleanToYesOrNo(announcement.isValid)"
          ></td>
          <td
            class="announcement-cell"
            v-bind:data-label="translations.validUntil"
            v-text="getValidUntilLabel(announcement.validUntil)"
          ></td>
          <td v-bind:data-label="translations.actions" class="announcement-cell">
            <edit-button-vertical
              class="edit"
              v-on:click="
                demonstrateUserHasSelectedAnnouncementToEdit(
                  announcement.universallyUniqueID
                )
              "
            >
            </edit-button-vertical>
            <delete-button-vertical
              v-on:click="initiateAnnouncementDeletion(announcement.universallyUniqueID)"
              class="delete"
            ></delete-button-vertical>
            <component
              v-bind:is="visibilityComponentName(announcement.hiddenByAUser)"
              class="toggle-visibility"
              v-on:click="toggleAnnouncementHiddenOrNot(index)"
            ></component>
          </td>
        </tr>
      </tbody>
    </table>
    <yes-no-dialog
      class="dialog"
      v-on:confirmed="startDeletingAnnouncement"
      v-on:denied="hideDialog"
      v-show="dialogIsVisible"
    >
    </yes-no-dialog>
    <div
      v-if="noAnnouncementsInformationShouldBeDisplayed"
      v-text="translations.youDontHaveAnyAnnouncements"
      class="no-announcements-info"
    ></div>
    <div
      v-if="errorNotificationShouldBeDisplayed"
      v-text="translations.announcementsCannotBeDisplayedBecauseAnErrorOccured"
      class="no-announcements-info"
    ></div>
  </div>
</template>

<script lang="ts">
import Routes from "@config/paths/routes";
import Translations from "@js/modules/translations/components/prostitution/prostitution_list";
import EditButtonVertical from "@js/components/form_controls/edit_button_vertical.vue";
import DeleteButtonVertical from "@js/components/form_controls/delete_button_vertical.vue";
import YesNoDialog from "@jscomponents/yes_no_dialog.vue";
import ExpectShadowCircle from "@jscomponents/decoration/expect_shadow_circle.vue";
import HideButtonVertical from "@js/components/form_controls/hide_button_vertical.vue";
import DontHideButtonVertical from "@js/components/form_controls/dont_hide_button_vertical.vue";

export default {
  name: "prostitution-announcements-list",
  emits: ["selectedToEdit"],
  methods: {
    visibilityComponentName(hidden: boolean): string {
      return hidden ? "DontHideButtonVertical" : "HideButtonVertical";
    },

    toggleAnnouncementHiddenOrNot(announcementIndex: number) {
      let newState = !this.announcementsBasicInformationList[announcementIndex]
        .hiddenByAUser;
      let announcementUid = this.announcementsBasicInformationList[announcementIndex]
        .universallyUniqueID;
      this.sendHideShowRequest(announcementUid, newState).then((responseStatus) =>
        this.adjustUITochangedAnnouncementVisibility(
          announcementIndex,
          responseStatus,
          newState
        )
      );
    },

    adjustUITochangedAnnouncementVisibility(
      announcementIndex: number,
      responseStatus: number,
      hidden: boolean
    ): void {
      if (responseStatus !== 200) {
        this.notificationErrorMessage("undefined_error");
        return;
      }
      this.announcementsBasicInformationList[announcementIndex].hiddenByAUser = hidden;

      if (hidden) {
        this.notificationMessage("announcement_has_been_hidden");
        return;
      }

      this.notificationMessage("announcement_is_visible");
      this.announcementsBasicInformationList = this.announcementsBasicInformationList;
    },

    async sendHideShowRequest(announcementUid: string, hidden: boolean) {
      const requestData = {
        method: "PATCH",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },

        body: JSON.stringify({ hiddenByAUser: hidden }),
      };
      const URL = `${Routes.noticesManagement}?uniqueID=${announcementUid}`;
      const response = await fetch(URL, requestData);
      return response.status;
    },

    demonstrateUserHasSelectedAnnouncementToEdit(announcementID: number): void {
      this.$emit("selectedToEdit", announcementID);
    },

    async fetchAllCurrentUserAnnouncementsBasicInformation() {
      const requestData = {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const URL = `${Routes.noticesManagement}?detailsLevel=basic`;
      const response = await fetch(URL, requestData);
      this.processAnnouncementsFetchingResponse(response);
    },

    notificationMessage(message: string) {
      this.emitter.emit("showNotification", {
        notificationText: message,
        notificationType: "no-error",
        headerText: "information",
      });
    },

    notificationErrorMessage(message: string): void {
      this.emitter.emit("showNotification", {
        notificationText: message,
        notificationType: "error",
        headerText: "error",
      });
    },

    startDeletingAnnouncement(): void {
      this.hideDialog();
      this.deleteAnnouncement();
    },

    async deleteAnnouncement() {
      const requestData = {
        method: "DELETE",
        body: JSON.stringify({
          announcementUid: this.announcementUidMarkedAsConsideredToDelete,
        }),
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const URL = Routes.noticesManagement;
      const response = await fetch(URL, requestData);
      this.processDeleteAnnouncementResponse(response);
    },

    async processDeleteAnnouncementResponse(response: Response) {
      if (response.status === 200) {
        const deletedAnnouncement = await response.json();
        this.removeAnnouncementFromList(deletedAnnouncement.id);
      }
    },

    removeAnnouncementFromList(deletedAnnouncementID: number): void {
      this.announcementsBasicInformationList = this.announcementsBasicInformationList.filter(
        (announcement) => announcement.id != deletedAnnouncementID
      );
    },

    hideDialog(): void {
      this.dialogIsVisible = false;
    },

    hideFetchingDecoration(): void {
      this.fetchingInProgress = false;
    },

    async processAnnouncementsFetchingResponse(response: Response) {
      this.hideFetchingDecoration();
      if (response.status !== 200) {
        this.errorOccuredDuringFetchingList = true;
        this.notificationErrorMessage(
          "an_erroc_occured_while_fetching_announcements_list"
        );
        return;
      }
      const announcementsList = await response.json();
      this.announcementsBasicInformationList = announcementsList;
    },

    getCSRFToken(): void {
      this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
    },

    getPhoneNumber(number) {
      return number ?? this.translations.notProvided;
    },

    transformBooleanToYesOrNo(hidden: boolean): string {
      return hidden ? this.translations.yes : this.translations.no;
    },

    getValidUntilLabel(validUntil): string {
      return (
        validUntil ?? this.translations.notValidAwaitingVerificationNotVisibleForUsers
      );
    },

    showDialog(): void {
      this.dialogIsVisible = true;
    },

    initiateAnnouncementDeletion(announcementUid: number): void {
      this.showDialog();
      this.announcementUidMarkedAsConsideredToDelete = announcementUid;
    },
  },

  components: {
    EditButtonVertical,
    DeleteButtonVertical,
    YesNoDialog,
    ExpectShadowCircle,
    HideButtonVertical,
    DontHideButtonVertical,
  },

  computed: {
    userHasAnyAnnouncements(): boolean {
      return this.announcementsBasicInformationList.length > 0;
    },

    noAnnouncementsInformationShouldBeDisplayed(): boolean {
      return (
        !this.fetchingInProgress &&
        !this.userHasAnyAnnouncements &&
        !this.errorOccuredDuringFetchingList
      );
    },

    errorNotificationShouldBeDisplayed(): boolean {
      return !this.fetchingInProgress && this.errorOccuredDuringFetchingList;
    },
  },

  data() {
    return {
      csrfToken: undefined,
      announcementsBasicInformationList: [],
      translations: Translations,
      dialogIsVisible: false,
      announcementUidMarkedAsConsideredToDelete: undefined,
      fetchingInProgress: true,
      errorOccuredDuringFetchingList: false,
    };
  },

  mounted() {
    this.getCSRFToken();
    this.fetchAllCurrentUserAnnouncementsBasicInformation();
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.hide-eye-icon {
  width: 2.5em;
  height: 2.5em;
  fill: #ede30b;
}

.toggle-visibility {
  fill: #ede30b;
  color: white;
  margin: 4px;
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
}

.control-panel-button {
  display: inline-flex;
  flex-direction: column;
  align-content: center;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.dialog {
  background: black;
  border: 1px solid red;
  width: 200px;
  box-shadow: 2px 2px 2px 2px black;
}

.edit {
  fill: #10d51b;
  color: white;
  margin: 4px;
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
  &:hover {
    fill: #e7109f;
  }
}

.delete {
  margin: 4px;
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
  fill: #e30c0c;
  color: white;
}

.list-header {
  font-size: 15px;
  font-family: "Exo 2", sans-serif;
  background: black;
  border: 2px solid green;
  padding: 5px;
  color: white;
}

.announcements-table {
  border-collapse: collapse;
  border-radius: 5px;
}

.announcement-cell {
  border: 2px solid green;
  color: white;
  font-size: 15px;
  font-family: "Exo 2", sans-serif;
  text-align: center;
}

.list-container {
  min-height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.no-announcements-info {
  color: white;
  @include responsive-font(1.4vw, 16px);
}

@media (max-width: 950px) {
  .list-header {
    overflow: hidden;
    width: 1px;
    height: 1px;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .announcement-cell {
    display: block;
    padding: 7px;
    text-align: right;
    &::before {
      content: attr(data-label) " : ";
      float: left;
      margin-right: 5px;
      font-weight: bold;
    }
  }

  .announcements-table {
    min-width: 300px;
  }

  .announcement-row {
    display: block;
  }

  .announcement-row:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
