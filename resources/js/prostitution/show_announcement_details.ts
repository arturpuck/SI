import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ImagesGallery from '@jscomponents/image_gallery/images_gallery.vue';


const settings = {
    data() {
        return {
            testURLs : [
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=362ba139-59e9-46e0-8080-306450b8bae2.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=aade3d64-e403-48bf-9a25-b25a6434703a.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=362ba139-59e9-46e0-8080-306450b8bae2.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=aade3d64-e403-48bf-9a25-b25a6434703a.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=362ba139-59e9-46e0-8080-306450b8bae2.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=aade3d64-e403-48bf-9a25-b25a6434703a.jpg',
                'http://localhost/prostytucja/announcement-photo?announcementUniqueIdentifier=88b8d950-cccc-40a4-a8da-faec374097d0&fileName=362ba139-59e9-46e0-8080-306450b8bae2.jpg',
            ] 
        };
    },

    components : {
       ImagesGallery
    },

    methods : {
        
    }
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");