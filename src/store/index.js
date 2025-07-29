import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:null,
    FavoriteArray: [],
  },
  getters: {
  },
    mutations : {
        setData(state, data ){
            state.data = data
        },
        addFavorite(state, advice){
          state.FavoriteArray.push(advice);
          console.log(state.FavoriteArray)
        }
      },
  actions: {
    async fetchData({ commit }){
      const response = await axios.get('https://api.adviceslip.com/advice')
      commit('setData',response.data.slip.advice)
    }
    }
})