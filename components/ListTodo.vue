<template>
  <div class="container">
    <div class="todo-list">
     <form class="form-sutmit">
        <div class="container-input">
          <input type="text" class="input">
          <button class="form-btn">Add</button>
        </div>
     </form>
     <div class="contents">
       <ul class="container-todos">
          <li v-for="item in bookDetail" :key="item.id" class="todo">
            <div>
              {{ item.userName }}
            </div>
            <div>
              <button class="btn-delete">delete</button>
              <button class="btn-edit">edit</button>
            </div>
          </li>
       </ul>
     </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, State, Action } from "nuxt-property-decorator";
@Component({})
export default class ListTodo extends Vue {
  @State('bookDetail', { namespace: 'posts' })
  readonly bookDetail: string;

  @Action('posts/getAllPosts')
  readonly getAllPosts: Function;

  mounted() {
    this.getallpost();
    console.log(this.bookDetail)
  }

  async getallpost() {
    console.log(this)
    this.getAllPosts(this);
  }

}

</script>
<style>
  .container {
    height: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .todo-list {
  }
  .form-sutmit{

  }
  .container-input {
    display: flex;
  }
  .input{
    height: 30px;
    outline: none;
    border: 1px solid black; 
  }
  .form-btn{
    display: inline-block;
    height: 33px;
    width: 80px;
    outline: none;
    border: none; 
    background-color: black;
    color: #fff;
    font-weight: 600;
  }
  .contents{
    margin-top: 50px;
  }
  .container-todos{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .todo{
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .btn-delete{
    background-color: red;
    border: none;
    padding: 5px 10px;
    color:white;
  }
  .btn-edit{
    background-color: darkcyan;
    border: none;
    padding: 5px 10px;
  }
</style>