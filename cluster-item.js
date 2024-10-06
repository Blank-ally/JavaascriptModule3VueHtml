// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
Cluster.component('clusterItem', {
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
        cluster:{
            type: Object,
            required: true
        }

    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        SetCurrentCluster(cluster) {
            console.log(cluster)
            this.currentCluster = cluster;
            window.location.href = 'Cluster.html'
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
      <div class="card h-100 " @click="SetCurrentCluster(cluster)">
        <div class="card-body">
          <div class="row ">
            <div v-for="(star, x) in cluster.Stars" class="col col-6 pb-2">
              <img v-if="x <= 3 " :src="star.photo" class="w-100 h-100"/>
            </div>
          </div>
        </div>
        <div class="m-auto">
          <h3>{{cluster.name}}</h3>
        </div>
      </div>
 
    `,
});
