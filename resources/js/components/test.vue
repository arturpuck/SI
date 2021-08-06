<template>
  <button>Test button</button>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";

@Options({name : 'TestButton'})
export default class TestButton extends Vue {

}
</script>

<style>

</style>