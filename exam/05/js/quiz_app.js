var app = new Vue({
  el:"#app",
  data:{
    message: 'Hello Vue.js',
    uid : 15,
    flag : false,
    notice:"hi~"
  },
  methods:{
    //es6 문법
    clickBtn(){
      console.log("Hi");
    },
    alertNotice(){
      this.flag = true;
    }
  }
})
