<template>
  <ul class="simple-comments-list">
    <li class="comment-container" v-for="(comment, index) in comments" v-bind:key="index">
        <header class="comment-metadata">
            <avatar v-bind:superior-avatar-file-path="comment.avatarURL"></avatar>
            <span v-text="comment.userNickname" class="user-login"></span> 
            <time v-text="comment.addedAgo"></time>
        </header>
        <article class="comment-body" v-text="comment.body"></article>
    </li>
  </ul>
</template>

<script lang="ts">
import Avatar from '@jscomponents/user/avatar.vue';

interface SimpleComment {
    body: string,
    userNickname: string,
    addedAgo: string,
    avatarURL: string,
}
	export default {

        props : {
            comments : {
                required : true,
                type : Array as () => SimpleComment[]
            }
        },

        components : {
            Avatar
        },

        name: 'simple-comments-list'
    }
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.simple-comments-list {
    list-style-type:none;
    padding:0;
    margin:0;
}

.comment-metadata {
    display: flex;
    justify-content:space-between;
    background: #252222;
    @include responsive-font();
    padding: 5px;
    align-items: center;
}

.comment-container {
    margin:5px;
    border: 1px solid gray;
    border-radius: 5px;
    color:white;
    overflow: hidden;
}

.user-avatar {
    display: inline-block;
    min-width: 30px;
    min-height: 30px;
    margin: 0 6px;
    width: 2vw;
    height: 2vw;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
}

.comment-body {
    @include responsive-font();
    color:white;
    padding: 7px;
}

</style>