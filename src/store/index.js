import Vue from 'vue'
import Vuex from 'vuex'

import VuexAlong from 'vuex-along'

import state from './state'
import mutations from './mutations'
import * as getters from  './getters'
import * as actions  from './actions'



Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins:[VuexAlong({
        name:'vuexalong',
        local: false,
        session: {
            list: ['menuIndex'],
            isFilter: true
        }
    })]
})
