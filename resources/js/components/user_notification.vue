<template>
  <div v-bind:class="{'visible-user-notification-container' : visible}" class="user-notification-container">
    <header class="notification-bar">
        <h1 v-text="headerText" class="notification-header"></h1> <icon-close v-on:click.native="closeNotification"></icon-close>
    </header>
    <p v-text="notificationText" class="notification-content">

    </p>
 </div>
</template>

<script>

import IconClose from './form_controls/icon_close.vue';

	export default {
        name: 'user-notification',

        data(){
            return {
               notificationText : "",
               visible : false,
               headerText : "Informacja"
            };
        },

        methods : {
            closeNotification(){
                this.visible = false;
            },

            showNotification(content){
                
                if(content['header']){
                  this.headerText = content['header'];
                }

                if(content['notificationText']){
                   this.notificationText = content['notificationText'];
                }
                
                this.visible = true;
                
            }
        },

        components : {
            IconClose
        },

        props : {
            
        },

        mounted(){
            this.$root.$on('showNotification', this.showNotification);
        }
    }
        
</script>

<style lang="scss" scoped>

@import '../../sass/fonts';

  .user-notification-container{
      position:fixed;
      z-index:3;
      right:0;
      bottom:0;
      transform: translateY(100%);
      transition: transform 1.5s;
      width:20%;
      min-width:180px;
      overflow:hidden;
      border-radius:8px 8px 0 0;
      border:2px solid #242229;
  }

  .visible-user-notification-container{
      transform: translateY(0);
  }

  .notification-bar{
      display:flex;
      align-items: center;
      justify-content: space-between;
      background:#242229;
      padding:0 8px;
      line-height: 2.2em;
      @include responsive-font();
  }

  .notification-header{
      @include responsive-font(1.4vw,21px);
      margin:0;
      padding:0;
      color:white;
  }

  .notification-content{
      margin:0;
      padding:4px;
      background:rgba(0,0,0,0.9);
      color:white;
      @include responsive-font(1.2vw,15px);
  }

</style>