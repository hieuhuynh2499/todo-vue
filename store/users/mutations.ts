import { MutationTree } from 'vuex';

export const mutations: MutationTree<any> = {
  getAllUsers(state: any,payload: any): void {
    state.users.push(...payload);
  },

  createUser(state: any,payload: any): void {
    state.users.push(payload);
  },

  deleteUser(state: any,payload: any): void {
    state.users = state.users.filter((item: any) => item.id !== payload);
  },
}
export default mutations;
