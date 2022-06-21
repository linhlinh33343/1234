
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex);
const storeData ={
    state,
    getters,
    actions,
    mutations
    
}

const store  = new Vuex.Store(storeData);

export default store;