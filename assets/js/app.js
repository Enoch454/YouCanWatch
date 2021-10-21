//const jikanjs  = require('jikanjs')

const vue_app = Vue.createApp({
    data(){
        return {
            animeImageURL: "../../assets/img/E-C9YyhVcAE1Coa.jpg",
            animeTitle: "Another title anime",
            animeDescription: "Lorem ipsum tolendo tolens uwu",
            linkMoreInfo: "https://www.google.com",
            animeObject: null,
        }
    },
    methods:{
        async getRandomAnime(){
            console.log('---');
            console.log('se busca anime al azar');
            console.log('---');
            

            //  jikanjs.loadAnime(19815, 'episodes').then((response) => {this.animeObject = response} );
            //var random_id = 49999;

            do {
                var random_id = Math.round(Math.random()*(49999-1)+1);
                var api_irl = "https://api.jikan.moe/v3/anime/"+random_id;
                const res = await fetch(api_irl)
                    .then(response => {
                        console.log('-----response-----');
                        console.log(response)
                        return response.json();
                    })
                    .then(data => {
                        console.log('-----data-----');
                        console.log(data);
                        this.animeObject = data;
                    });
    

            } while (this.animeObject.status == 404);
            
                
            
            this.linkMoreInfo = this.animeObject.url;
            this.animeTitle = this.animeObject.title;
            this.animeDescription = this.animeObject.synopsis;
            this.animeImageURL = this.animeObject.image_url;
        },
    },
    mounted(){
        this.getRandomAnime();
    },
}).mount("#recomendation_card");