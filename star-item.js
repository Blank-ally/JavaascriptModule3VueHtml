// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
Cluster.component('starItem', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {

            editStar:{...this.star},currentStar:{...this.star}
        }
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {

        star:{
            type: Object,
            required: true
        }
    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        SetCurrentStar(){
            debugger

            this.currentStar = this.star;
            this.editStar = this.currentStar
            window.location.href = 'EditStar.html'
        },


    },

    // computed:    Values that are updated and cached if dependencies change.
    //              Computed value functions need to return a value.
    //              Treat these like regular values that you would use
    //              in data or props.
    computed: {

    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    template: `
      <div class="card my-3 h-100 btn" @click="SetCurrentStar()">
        <img :src="star.photo" class="card-img-top w-100" >
        <div class="card-body">
          <h5 class="card-title">{{star.name}}</h5>
          <p class="card-text">Qty: {{star.qty}}</p>
          <p class="card-text">{{star.Classi}}</p>
          <p class="card-text">{{star.notes}}</p>
          <p class="card-text"><small class="text-body-secondary">{{star.Cluster}}</small></p>
        </div>
      </div>
    `,
    mounted: function () {
// this could also be done in the crated block as well
        if(localStorage.getItem('editStar')){
            this.editStar = JSON.parse(localStorage.getItem('editStar'))
        }
        if(localStorage.getItem('currentStar')){
            this.currentStar = JSON.parse(localStorage.getItem('currentStar'))
        }
    },
    watch: {
        editStar:{
            //this.shoppingList // = old list before the list is updated
            handler(){
                localStorage.setItem('editStar',JSON.stringify(this.editStar))
            },
            deep: true,

        },     currentStar:{
            //this.shoppingList // = old list before the list is updated
            handler(){
                localStorage.setItem('currentStar',JSON.stringify(this.currentStar))
            },
            deep: true,

        }
    }
});
