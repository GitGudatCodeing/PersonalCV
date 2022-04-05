import Vue from 'Vue'
import { findIndex, uniqueId } from 'lodash'

export const state = () => ({
  snackQueue: [],
})

export const mutations = {
  set(state, { field, value }) {
    Vue.set(state, field, value)
  },
  /**
   * Pushes a snackbar to the queue to be displayed
   * @param state
   * @param snack Object { color: String, message: String, timeout: Number }
   */
  pushSnack(state, snack) {
    snack.id = uniqueId('snack_')
    state.snackQueue.push(snack)
  },
  removeSnack(state, id) {
    const idx = findIndex(state.snackQueue, { id })

    if (~idx) state.snackQueue.splice(idx, 1)
  },
}

export const getters = {}

export const actions = {
  /**
   * Builds Snack to be pushed to queue
   * @param context Object { root, state, commit, rootState, getters, dispatch, rootGetters }
   * @param snack Object { color: String, message: String }
   */
  newSnack({ commit }, { color = 'error', message, timeout = 5000 }) {
    commit('pushSnack', {
      color,
      timeout,
      message,
    })
  },
}
