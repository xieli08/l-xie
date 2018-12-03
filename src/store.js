import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
      user_id: 'PY1611',
      month: '2018-11', 
      changeposition:0,
    },
    mutations:{
      setUserId (state, user_id) {
        state.user_id = user_id
      },
      setMonth (state, month) {
        state.month = month
      },
      changepositionX(state,changeposition) {
        state.changeposition = changeposition
      }
    },
    getters:{
      changeposition:state => state.changeposition
    },
    actions:{
        
    }

})