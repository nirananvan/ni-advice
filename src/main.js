//Vueのライブラリを読み込み
import Vue from 'vue'
//アプリのメインとなる部分を読み込み
import App from './App.vue'
//ルーティング機能を読み込み
import router from './router'
//storeを読み込み
import store from './store'
//vuetifyを読み込み
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

//vueのインスタンスを作成
new Vue({
  router,
  store,
  vuetify,
  //render→HTMLを描画するための関数、templateでも書き換え可能
  render: h => h(App),
  //引数のセレクタで指定したhtml要素の子要素にVueインスタンスを挿入
}).$mount('#app')




// 上記 render: h => h(App),は下記の短縮形
//引数のcreateElementはVueインスタンスの関数で、指定されたパラメータの情報を元に生成した仮想DOMを返す

// render: function (createElement) {
// return createElement(App);
// }

//render (createElement) {
//   return createElement(App);
//}

// render (h){
//  return h(App);
// }

