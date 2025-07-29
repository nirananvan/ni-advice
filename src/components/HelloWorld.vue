<template>
    <v-container>
     <v-row justify="center">
    <v-col cols="12" md="6">
        <h2 class="text-h5 font-weight-purple text-center mb-4">
          <v-btn @click="fetchData()">アドバイス発言！</v-btn>
                 <h1>{{ slip }}</h1>
          <v-btn @click="addFavorite()">お気に入り追加！</v-btn>
        </h2>
        <h3></h3>
    </v-col>
</v-row>


</v-container>

</template>

<script>
//他のコンポーネントでも利用できるようにする
 export default {
        computed: {
          slip(){
            return this.$store.state.data;
          }
        },

        methods: {
            // ボタン押下でmutationをcommitする
            fetchData(){
          this.$store.dispatch('fetchData')
        },
        addFavorite(){
          this.$store.commit('addFavorite', this.slip);
        },
    }
  }
</script>
