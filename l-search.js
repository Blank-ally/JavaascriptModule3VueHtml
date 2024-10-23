// Component names should be TitleCase/PascalCase
// and should be multi-word, but singular in plurality.
// When used in HTML/templates, they become kabob-case.
Cluster.component('lSearch', {
    // data:    Data created and maintained by this component.
    //          This function is like a constructor. It gets called
    //          separately for each instance of this component
    data: function(){
        return {

            keyword: '',
        }
    },

    // props:   Data passed into the component via attributes.
    //          Props can be optional or required. Objects and arrays
    //          are pass-by-reference. Primitives (number, string, boolean)
    //          are pass-by-value.
    props: {
        onSearch: Function
    },


    // methods: Usually "events" triggered by v-on:
    methods: {
        search(){
            //this.$emit('search', this.keyword)
            this.onSearch(this.keyword);
        }
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
      <q-form @submit.prevent="search" class="q-flex row q-pb-lg">
        <q-input
            v-model="keyword"
            label="Search"
            placeholder="Collection"
            class="col"
            filled
            bg-color="white"
        />
        <q-btn type="submit" color="primary" class="col-auto">
          <q-icon name="search" />
        </q-btn>
      </q-form>
    `,
});
