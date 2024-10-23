function Clust (name,description,public, favorite, classifications, type, Stars,  complete){
    this.name = name ?? '';
    this.description = description ?? '';
    this.public = public ?? false;
    this.favorite = favorite ?? false;
    this.classifications = classifications ?? [];
    this.type = type ?? '';
    this.Stars = Stars ?? [];
    this.complete = complete ?? false;

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${month}-${day}-${year}`

    this.creationDate = currentDate

}

function Star (name,photo,cluster, classi, qty, notes, trade ){

    this.name = name ?? '';
    this.photo = photo ?? '';
    this.cluster = cluster ?? '';
    this.classi = classi ?? '';
    this.qty = qty ?? 0;
    this.notes = notes ?? '';
    this.trade = trade ?? false;
}

function Classification (name){
    this.name = name ?? '';
}
/*
cluster
name: '',
    public: false,
    favorite: false,
    purchased: false,
    Complete: false,
    classifications: [],
    type:'',
    Stars:[]*/

/*
photo:'',
    name:'',
    Cluster:'',
    Classi:'',
    qty: 0,
    notes:'',
    Trade:false*/
