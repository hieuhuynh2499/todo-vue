import { ActionTree } from "vuex";
import { getAllUser } from "../../apollo/queries/users.query";
import { createUserNew } from "../../apollo/mutations/users.mutation";
import { deleteUser } from "../../apollo/mutations/users.mutation";
import { updateUser } from "../../apollo/mutations/users.mutation";
import { UserState } from "~/models/user.state";
import { RootState } from "~/models/root.state";

export const actions: ActionTree<UserState, RootState> = {
  async getAllUsers({ commit }): Promise<void> {
    let users;
    if(this.app.apolloProvider){
      try {
        await this.app.apolloProvider.defaultClient.query({
          query: getAllUser,
        }).then(({ data }: any) => {
          users = data.getAllUser;
        });
      } catch (error: any) {
        throw new Error(error);
      }
    }

    commit("getAllUsers", users);
  },

  async createUserNew ({commit}, newUserName ): Promise<void> {
    let user = {
      age: 23,
      address: 'da nang',
      userName: newUserName,
    };

    try {
      if(this.app.apolloProvider){
        await this.app.apolloProvider.defaultClient.mutate({
          mutation: createUserNew,
          variables: {
            createUser : user
          },
        }).then(({ data }: any) => {
          commit("createUser",data.createUserNew)
        });
      }
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
  },

  async updateUser ({commit}, { vueIntance , updateUserParams} :any): Promise<void> {
    let updateUserObject = {
      age: 23,
      address: 'da nang',
      userName: updateUserParams.userName,
    };
    console.log(updateUserObject)
    try {
      await vueIntance.$apolloProvider.defaultClient.mutate({
        mutation: updateUser,
        variables: {
          updateUserInput : updateUserObject,
          id: updateUserParams.id
        },
      }).then(({ data }: any) => {
        console.log(data)
        commit("updateUser", data.updateUser)
      });
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default actions;
