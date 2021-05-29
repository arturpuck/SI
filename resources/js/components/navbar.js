var Vue = require('vue');

module.exports = new Vue({
 el: '#navbar',

 data() {
 	return {
 		pornSubMenuIsVisible : false,
 		moviesSubMenuIsVisible : false,
 	};
 	
    
 },

 methods : {

   hideAllSecondLevelSubMenus()
   {
      this.moviesSubMenuIsVisible = false;
   },

   togglePornSubMenu()
   {
      this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
      this.hideAllSecondLevelSubMenus();
   },

   toggleMoviesSubMenu()
   {
      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
   }
 }

 });