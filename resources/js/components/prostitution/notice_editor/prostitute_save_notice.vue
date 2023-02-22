<template>
    <section class="save-notice">
        <div class="info-container">
            <span v-text="translations['prostitute_save_announcement_info']"></span>
            <strong class="important-info" v-text="translations['announcement_must_be_accepted_reminder']"></strong>
        </div>
        <add-button>{{ translations['add_notice'] }}</add-button>
    </section>
</template>

<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitution_save_notice";
import RoutesConfig from "@config/paths/routes";
import AddButton from "@jscomponents-form-controls/add_button.vue";


export default {
    name: "prostitution-save-notice",

    emits: ['validated'],

    components: {
        AddButton
    },

    data() {
        return {
            translations: Translations,
            routesConfig: RoutesConfig,
        };
    },

};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.save-notice {
    padding: 4px;
    background: rgba(0,0,0,0.85);
    color: white;
    text-align: center;
    @include responsive-font();
}

.important-info {
    color : red;
}

.info-container {
    padding:10px 0;
}
</style>
