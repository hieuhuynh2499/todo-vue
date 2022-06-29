<template>
  <ul class="container-todos">
    <li v-for="(item, index) in users" :key="item.id" class="todo">
      <div>
        <p v-if="isEdit !== index" @click="changeInput(index)">{{ item.userName }}</p>
        <input v-else v-model="updateUserName"  type="text" class="input-update"/>
      </div>
      <div>
        <button @click="deleteUserfnc(index)" class="btn-delete">delete</button>
        <button @click="updateUserfnc(index)" class="btn-edit">edit</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, State, Action } from "nuxt-property-decorator";

@Component({})
export default class Todos extends Vue {
  @State('users', { namespace: 'users' })
  readonly users: Array<any>;

  @Action('users/updateUser')
  readonly updateUser: Function;

  @Action('users/deleteUser')
  readonly deleteUser: Function;

  updateUserName :string = '';
  isEdit: number = -1;

  changeInput(index: any){
    this.isEdit = index
  }

  updateUserfnc(index:any){
    let user = {
      ...this.users[index],
      userName: this.updateUserName
    }
    this.updateUser({
       vueIntance: this,
       updateUserParams: user
    });
    this.isEdit = -1
    this.updateUserName = ''
  }

   deleteUserfnc(index: any) {
    this.deleteUser({
      vueIntance: this,
      idUser: this.users[index].id,
    })
  }
}
</script>