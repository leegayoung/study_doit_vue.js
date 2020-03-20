
<template>
<div class="inputBox shadow">
  <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keypress.enter="addTodo">
  <span class="addContainer" v-on:click="addTodo">
    <i class="addBtn fas fa-plus" aria-hidden="true"></i>
  </span>
</div>
</template>

<script>
export default {
  data(){
    return {
      newTodoItem: ''
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem !== ""){
        var value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value,value);
        this.clearInput();
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  line-height: 50px;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  /* 높이가 깨져서 임의로 추가 */
  height: 3rem;
}
.addBtn {
  color: white;
  vertical-align: middle;
  line-height: 50px;
}
</style>
