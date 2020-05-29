import * as types from '../types';

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter + ' Clicks';
  }
}

const mutations = {
  increment: state => {
    state.counter ++;
  },
  decrement: state => {
    state.counter --;
  }
}

const actions = {
  increment: context => {
    context.commit('increment');
  },
  decrement: ({ commit }) => {
    commit('decrement');
  },
  asyncIncrement:({ commit }) => {
    setTimeout(() => { commit('increment'); }, 1000);
  },
  asyncDecrement:({ commit }) => {
    setTimeout(() => { commit('decrement'); }, 1000);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
