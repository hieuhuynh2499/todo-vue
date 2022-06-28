import { MutationTree } from 'vuex';

export const mutations: MutationTree<any> = {
  getAllPosts(state: any,payload: any): void {
    state.bookDetail.push(...payload);
  },
}
export default mutations;
