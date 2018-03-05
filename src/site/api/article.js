import Vue from 'vue';

export default {
    get(){
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/tiles').then(response => {
                resolve(response.data.tiles)
            },response => {
                reject([])
            })
        })
    }

}