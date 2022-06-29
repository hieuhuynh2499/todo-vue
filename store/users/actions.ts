import { ActionTree } from "vuex";
import { getAllUser } from "../../apollo/queries/users.query";
import { createUserNew } from "../../apollo/mutations/users.mutation";
import { deleteUser } from "../../apollo/mutations/users.mutation";
export const actions: ActionTree<any, any> = {
  async getAllUsers({ commit },vueIntance :any): Promise<void> {
    let users;

    try {
      await vueIntance.$apolloProvider.defaultClient.query({
        query: getAllUser,
      }).then(({ data }: any) => {
        users = data.getAllUser;
      });
    } catch (error: any) {
      throw new Error(error);
    }

    commit("getAllUsers", users);
  },

  async createUserNew ({commit}, { vueIntance , newUserName} :any): Promise<void> {
    let user = {
      age: 23,
      address: 'da nang',
      userName: newUserName,
    };

    try {
      await vueIntance.$apolloProvider.defaultClient.mutate({
        mutation: createUserNew,
        variables: {
          createUser : user
        },
      }).then(({ data }: any) => {
        commit("createUser",data.createUserNew)
      });
    } catch (error: any) {
      throw new Error(error);
    }
  },

  async deleteUser ({commit}, { vueIntance, idUser} :any): Promise<void> {
    try {
      await vueIntance.$apolloProvider.defaultClient.mutate({
        mutation: deleteUser,
        variables: {
          id: idUser
        },
      }).then(({ data }: any) => {
        commit("deleteUser",idUser)
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
};

export default actions;
