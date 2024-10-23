app.component('lSort', {
    data(){
        let sortOptions = [
             // get from  cluster
           /* {label: 'Rating', value: 'rating'},
            {label: 'Title', value: 'title'},
            {label: 'Artist', value: 'artist'},
            {label: 'Runtime', value: 'runtime'},*/
        ];
        return {
            sortOptions, // same as sortOptions: sortOptions
            sortValue: sortOptions[0], // set default to first option

        }
    },

    props: {
        sortFunction: Function
    },

    methods: {
        sort(){
            this.sortFunction(this.sortValue.value);
        }
    },

    template: `
        <q-form class="q-flex row">
            <q-select 
                v-model="sortValue"
                :options="sortOptions" 
                @update:model-value="sort"
                label="Sort By" 
                class="col"
                filled 
            />
            <select v-model="sortValue" @change="sort">
              <option v-for="option in sortOptions" 
                      :key="option.value" 
                      :value="option">{{option.label}}</option>
            </select>
        </q-form>
    `
})
