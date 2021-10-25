import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  count: 0,
})

type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  count: (state) => {
    return state.count
  },
}

export const mutations: MutationTree<RootState> = {
  SET_COUNT: (state, count) => {
    state.count += count
  },
}

export const actions: ActionTree<RootState, RootState> = {
  countUp: ({ commit }) => {
    commit('SET_COUNT', 1)
  },
}
