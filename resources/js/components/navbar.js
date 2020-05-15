var Vue = require('vue');

module.exports = new Vue({
 el: '#navbar',

 data : {
    
 },

 methods : {

   showPornMenu()
   {
   	  const pornMenuSubList = document.getElementById("porn-sub-menu-list");
   	  pornMenuSubList.style.borderBottom = "1px solid #5c060d";
   	  pornMenuSubList.style.boxShadow = "2px 2px 2px 2px black";
   	  pornMenuSubList.style.maxHeight = "700px";
   }
 }

 });