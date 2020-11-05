
import VueConstructor from '@jsmodules/basic.js';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import MoviePreview from '@jscomponents/movies/movie_preview.vue';
import StarRating from '@jscomponents/star_rating.vue';
import {PornstarProfileTab}  from '@js/enum/pornstar_profile_tab';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';
import Translator from '@jsmodules/translator.js';

const Vue = VueConstructor.build();
Vue.component('fixed-shadow-container', FixedShadowContainer);
Vue.component('movie-box', MovieBox);
Vue.component('movie-preview', MoviePreview);
Vue.component('star-rating', StarRating);
Vue.component('described-select', DescribedSelect);

new Vue({
    el: '#app',

    data(){
        return {
            showsPreview:false,
            activeTab : PornstarProfileTab.Movies,
            translations : null,
            csrfToken:null
        }
    },
   
   
    methods : {
        changeTab(event){
           this.activeTab = event.target.id || event.target.parentElement.id;
        },

      async  ratePornstar(sender){
          const rate = Number(sender.inputValue);
          
          try{
            

            if(isNaN(rate) || rate < 1 || rate > 10  || !Number.isInteger(rate)){
                 throw new Error('must_choose_integer_between_1_and_10');
            }

            const pornstarID = sender.$attrs['data-pornstar-id'];
            
            const data = {
                pornstar_id : pornstarID,
                rate : rate
            };

            const requestData = {
              method : 'PUT',
              headers : {
                 'X-CSRF-TOKEN' : this.csrfToken,
                 'Content-type': 'application/json; charset=UTF-8'
              },
              body : JSON.stringify(data)
           };

           const response = await fetch('/rate/pornstar', requestData);

              switch(response.status){
                case 200:
                  sender.showValueIsOK();
                break;

                default:
                  let errors = await response.json();
                  console.log(errors);
                break;

             }

          }
          catch(exception){
            console.log(exception.message);
          }
          
      }
    },

   computed : {
      pornstarMoviesTabIsActive(){
          return this.activeTab == PornstarProfileTab.Movies;
      },

      pornstarCommentsTabIsActive(){
        return this.activeTab == PornstarProfileTab.Comments;
      },

      pornstarRankingTabIsActive(){
        return this.activeTab == PornstarProfileTab.Rank;
      }
   },

    mounted(){
        this.$root.$on('showPreview', ()=> this.showsPreview = true);
        this.$root.$on('closePreview', ()=> this.showsPreview = false);
        this.translations = Translator.getPackage('pornstar_action_section');
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
      },
   
   });