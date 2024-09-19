const Cluster = Vue.createApp({
    // data: all the data for the Cluster, must return an object
    data: function() {
        return {

            NewStar:{
                photo:'pexels-pixabay-41951.jpg',
                name:'',
                Cluster:'',
                Class:'',
                qty: 0,
                notes:'',
                Trade:false
                //TODO:add trade stuff with



            },
            newCluster: {
                name: '',
                public: false,
                favorite: false,
                purchased: false,
                classifications: [],
                type:[],
                Stars:[]
            },
            CLusterList: [
                {name: 'MilkyWay', public:true, favorite: true, classification: ["Rare","common", "supernova"],star:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" },
                        {name:'star2',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" },
                        {name:'star3',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" },
                        {name:'star4',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" }]},
                {name: 'test2', public:true, favorite: true, classification: ["Rare","common", "supernova"], star:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" }]},
                {name: 'test3', public:true, favorite: true, classification: ["Rare","common", "supernova"], star:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" }]},
                {name: 'test4', public:true, favorite: true, classification: ["Rare","common", "supernova"], star:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" }]},
                {name: 'Nova',public:true, favorite: true },

            ],

            StarList:[
                {name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum", Cluster: 'Milkway' },
                {name:'star2',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" , Cluster: 'Milkway'},
                {name:'star3',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum",Cluster: 'Milkway' },
                {name:'star4',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" ,Cluster: 'Nova' }

            ],
            currentCluster:{},
            currentStar:{}

            //two seperater list and filter
        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {




    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        StarList(){
            return this.StarList().filter(function (item){
                return item.Cluster = 'MilkyWay'
            })

        }

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {
// this could also be done in the crated block as well

        if(localStorage.getItem('shoppingList')){
            this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'))
        }
    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        shoppingList:{
            //this.shoppingList // = old list before the list is updated
            handler(newList){
                localStorage.setItem('shoppingList',JSON.stringify(newList))
            },
            deep: true,
        }

    }
});
