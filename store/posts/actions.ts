import { ActionTree } from "vuex";
import { getAllUser } from "../../apollo/queries/post.query";
export const actions: ActionTree<any, any> = {
  async getAllPosts({ commit },vueIntance :any): Promise<void> {
    let posts;
    try {
      await vueIntance.$apolloProvider.defaultClient.query({
        query: getAllUser,
      }).then(({ data }: any) => {
        posts = data.getAllUser;
      });
    } catch (error: any) {
      throw new Error(error);
    }
    commit("getAllPosts",posts);
  },
};

export default actions;