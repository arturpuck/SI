<template>
<div class="icon-close-container">
    <div class="icon-close"></div>
</div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";

@Options({name : 'IconClose'})
	export default class IconClose extends Vue{
}
</script>

<style lang="scss">

.icon-close{
    display: inline-block;
    background:#ef0244;
    width: 65%;
    height: 65%;
    position: absolute;
    font-size: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.icon-close-container:hover .icon-close{
        background:white;
}

.icon-close-container{
    position:relative;
    background:white;
    border-radius:50%;
    border:3px solid #ef0244;
    font-size: 0;
    min-width: 30px;
    min-height: 30px;
    width: 2.3vw;
    height: 2.3vw;
    cursor: pointer;
    display: inline-block;
    &:hover{
        background:#ef0244;
    }
}

</style>