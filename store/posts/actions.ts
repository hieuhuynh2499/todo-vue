import { ActionTree } from "vuex";

export const actions: ActionTree<any, any> = {
  setBooksData({ commit }, payload: any[]): void {
    commit("setBooksData", payload);
  },
};

export default actions;