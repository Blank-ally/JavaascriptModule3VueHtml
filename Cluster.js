const Cluster = Vue.createApp({
    // data: all the data for the Cluster, must return an object
    data: function() {
        return {

            NewStar:{
                photo:'',
                name:'',
                Cluster:'',
                Classi :'',
                qty: 0,
                notes:'',
                Trade:false
                //TODO:add trade stuff with
            },
            editStar:{
                photo:'',
                name:'',
                Cluster:'',
                Classi:'',
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
                Complete: false,
                classifications: [],
                type:'',
                Stars:[]
            },
            editCluster: {
                name: '',
                public: false,
                favorite: false,
                purchased: false,
                Complete: false,
                classifications:[],
                type:'',
                Stars:[]
            },
            classification:{
                name: ''
            },
            CLusterList: [
                {name: 'MilkyWay', type: 'cards',public:true, favorite: true,  Complete: false,classifications: [{name: "Rare"},{name: "common"}, {name: "supernova"}],Stars:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",classi:'common',notes:"lorem ipsum" },
                        {name:'star2',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" },
                        {name:'star3',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" },
                        {name:'star4',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" }] ,type: "galaxies"},
                {name: 'test2',type: 'cards' ,public:true, favorite: true, Complete: false, classifications: [{name: "Rare"},{name: "common"}, {name: "supernova"}], Stars:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" }]},
                {name: 'test3',type: 'cards' ,public:true, favorite: true,  Complete: false,classifications: [{name: "Rare"},{name: "common"}, {name: "supernova"}], Stars:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" }]},
                {name: 'test4',type: 'cards' ,public:true, favorite: true,  Complete: false,classifications: [{name: "Rare"},{name: "common"}, {name: "supernova"}], Stars:[{name:'Absolutno',photo: "pexels-pixabay-41951.jpg",Classi:'common',notes:"lorem ipsum" }]},
                {name: 'Nova',type: 'cards',public:true, favorite: true , Complete: false, Stars:[],classifications: []},

            ],

       /*     StarList:[
                {name:'Absolutno',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum", Cluster: 'Milkway' },
                {name:'star2',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" , Cluster: 'Milkway'},
                {name:'star3',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum",Cluster: 'Milkway' },
                {name:'star4',photo: "pexels-pixabay-41951.jpg",class:'common',notes:"lorem ipsum" ,Cluster: 'Nova' }

            ],*/
            currentCluster:{
                name: '',
                public: false,
                favorite: false,
                purchased: false,
                Complete: false,
                classifications: [],
                type:'',
                Stars:[]
            },
            currentStar:{
                photo:'',
                name:'',
                Cluster:'',
                Classi:'',
                qty: 0,
                notes:'',
                Trade:false
            },
            clusterTypes: [
                {name:'Figurine'},
                {name:'Food'},
                {name:'cards'}

            ]

        }
    },

    // methods: usually "events" triggered by v-on:
    methods: {


        Alert() {
            alert("hiiiiiiiiiiiiiii")
        },
        SetCurrentCluster(cluster) {
            console.log(cluster)
            this.currentCluster = cluster;
            window.location.href = 'Cluster.html'
        },
        SetCurrentStar(star){
            debugger

            this.currentStar = star;
            this.setEditStar()


        },
        addNewStar() {
            debugger;
            clus =  this.CLusterList.find( e=> e.name === this.currentCluster.name)
            ind = this.CLusterList.indexOf(clus)
            this.currentCluster.Stars.push(this.NewStar)
            this.CLusterList[ind] = this.currentCluster
            // clear the form
  //todo: refactor to accept multiple aruguments for cluster
            this.NewStar = {
                photo: '',
                name: '',
                Cluster: '',
                Classi: '',
                qty: 0,
                notes: '',
                Trade: false
                //TODO:add trade stuff with
            }
             window.location.href = 'Cluster.html'
        },
        addNewCluster() {
            debugger
            this.CLusterList.push(this.newCluster);
            // clear the form
            this.currentCluster = this.newCluster

            this.newCluster = {
                name: '',
                public: false,
                favorite: false,
                purchased: false,
                Complete: false,
                classifications: [],
                type: '',
                Stars: []
            };

            window.location.href = 'NewStar.html'
        },
        addClassification(name) {
            debugger;

            if (name.trim() !== '') {
                this.classification.name = name
                this.newCluster.classifications.push(this.classification);
                this.classification = {name: ''}
            }

        },
        addEditClassification(name) {
            debugger;
            if (name.trim() !== '') {
                this.classification.name = name
                this.editCluster.classifications.push(this.classification)
                this.classification = {name: ''}
            }
        },
        deleteCluster(item) {
            // TODO: confirm with user first!
            this.CLusterList.splice(this.CLusterList.indexOf(item), 1);
            window.location.href = 'Clusters.html'


        },
        deleteStar(item){
            debugger
            // TODO: confirm with user first!
            clus =  this.CLusterList.find( e=> e.name === this.currentCluster.name)
            ind = this.CLusterList.indexOf(clus)
            this.CLusterList[ind].Stars.splice(this.currentCluster.Stars.indexOf(item), 1);
            this.currentCluster =  this.CLusterList[ind]
            window.location.href = 'Cluster.html'



        },
        editCurrentCluster() {
            // TODO: confirm with user first!
            debugger

            clus =  this.CLusterList.find( e=> e.name === this.currentCluster.name)
            ind = this.CLusterList.indexOf(clus)

            this.CLusterList[ind].name = this.editCluster.name
            this.CLusterList[ind].public = this.editCluster.public
            this.CLusterList[ind].favorite = this.editCluster.favorite
            this.CLusterList[ind].purchased = this.editCluster.purchased
            this.CLusterList[ind].Complete = this.editCluster.Complete
            this.CLusterList[ind].classifications = this.editCluster.classifications
            this.CLusterList[ind].type = this.editCluster.type

            this.CLusterList[ind].Stars.forEach(s => s.Cluster = this.editCluster.name)

            //this.CLusterList[this.CLusterList.indexOf(this.currentCluster )].Cluster = item
            this.currentCluster =  this.CLusterList[ind]
            window.location.href = 'Cluster.html';

        },
        setEditCluster() {
            debugger
            this.editCluster = this.currentCluster
            window.location.href = 'EditCluster.html'


        },
        setEditStar() {
            debugger
            console.log(this.currentCluster)
            this.editStar = this.currentStar
            console.log(this.currentCluster)
            window.location.href = 'EditStar.html'


        },
        editCurrentStar(item){
            debugger
            // TODO: confirm with user first!
            clus =  this.CLusterList.find( e=> e.name === this.currentCluster.name)
            ind = this.CLusterList.indexOf(clus)
            star = this.CLusterList[ind].Stars.find(e => e.name === this.currentStar.name)
            sind = this.CLusterList[ind].Stars.indexOf(star)
            this.CLusterList[ind].Stars[sind].name = this.editStar.name
            this.CLusterList[ind].Stars[sind].photo = this.editStar.photo
            this.CLusterList[ind].Stars[sind].qty = this.editStar.qty
            this.CLusterList[ind].Stars[sind].Classi = this.editStar.Classi
            this.CLusterList[ind].Stars[sind].notes = this.editStar.notes
            this.CLusterList[ind].Stars[sind].Trade = this.editStar.Trade
            this.CLusterList[ind].Stars[sind].Cluster = this.editStar.Cluster



            this.currentCluster =  this.CLusterList[ind]
            window.location.href = 'Cluster.html';




        }
    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        StarList(){
            return this.StarList().filter(function (item){
                return item.Cluster = 'MilkyWay' // retrun the search results
            })

        }

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {
// this could also be done in the crated block as well

        if(localStorage.getItem('currentCluster')){
            this.currentCluster = JSON.parse(localStorage.getItem('currentCluster'))
        }
        if(localStorage.getItem('currentStar')){
            this.currentStar = JSON.parse(localStorage.getItem('currentStar'))
        }
        if(localStorage.getItem('CLusterList')){
            this.CLusterList = JSON.parse(localStorage.getItem('CLusterList'))
        }
       if(localStorage.getItem('newCluster')){
            this.newCluster = JSON.parse(localStorage.getItem('newCluster'))
        }
       if(localStorage.getItem('editCluster')){
            this.editCluster = JSON.parse(localStorage.getItem('editCluster'))
        }
       if(localStorage.getItem('editStar')){
            this.editStar = JSON.parse(localStorage.getItem('editStar'))
        }
    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        currentCluster:{
            //this.shoppingList // = old list before the list is updated
            handler(){
                localStorage.setItem('currentCluster',JSON.stringify(this.currentCluster))
            },
            deep: true,
        },
        currentStar:{
            //this.shoppingList // = old list before the list is updated
            handler(){
                localStorage.setItem('currentStar',JSON.stringify(this.currentStar))
            },
            deep: true,

        },
        CLusterList:{
            //this.shoppingList // = old list before the list is updated
            handler(newList){
                localStorage.setItem('CLusterList',JSON.stringify(this.CLusterList))
            },
            deep: true,

        },
        newCluster:{
            //this.shoppingList // = old list before the list is updated
            handler(newList){
                localStorage.setItem('newCluster',JSON.stringify(this.newCluster))
            },
            deep: true,

        },
        editCluster:{
            //this.shoppingList // = old list before the list is updated
            handler(newList){
                localStorage.setItem('editCluster',JSON.stringify(this.editCluster))
            },
            deep: true,

        },
        editStar:{
            //this.shoppingList // = old list before the list is updated
            handler(newList){
                localStorage.setItem('editStar',JSON.stringify(this.editStar))
            },
            deep: true,

        }

    }
});
