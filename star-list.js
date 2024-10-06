// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
Cluster.component('starList', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {}
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        list:{
            type: Array,
            required: true
        },
    },

    // methods: Usually "events" triggered by v-on:
    methods: {


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
      <div class="container m-2 p-5">

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="btn " href="NewStar.html"><i class="fa-solid fa-circle-plus"></i> New Star</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="card-group row-cols-1 row-cols-md-3 ">
              <div class="col h-100" v-for="item in list">
               <star-item :star="item"></star-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
    `,
});
