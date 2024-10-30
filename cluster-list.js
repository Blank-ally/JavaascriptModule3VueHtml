// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
Cluster.component('clusterList', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {
            filterKeyword: '',
        }
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        list:{
            type: Array,
            required: true
        }

    },

    // methods: Usually "events" triggered by v-on:
    methods: {
        search(keyword){
            console.log('search: ', keyword);
            this.filterKeyword = keyword;
        },
        sort(property){
            this.sortProperty = property;
        }

    },

    // computed:    Values that are updated and cached if dependencies change.
    //              Computed value functions need to return a value.
    //              Treat these like regular values that you would use
    //              in data or props.
    computed: {
        filteredlist(){
            debugger
            return this.list.filter(clust => {
                return clust.name.toLowerCase().includes(this.filterKeyword.toLowerCase())

            })

        }

    },

    // template:    A string "template" of HTML. It should consist of only
    //              ONE root HTML element. You can reference any
    //              data, props, methods, computed, etc using: {{ name }}
    template: `
      <div>
      <div class="col-6 col-md-4">
        <l-search :onSearch="search"></l-search>
      </div>
      <div class="row q-col-gutter-md">
      <div class="col-lg-4 col-sm-6" v-for="cluster in filteredlist">
       <cluster-item :cluster="cluster"></cluster-item>
      </div>
      </div>
      </div>
    `,

});
