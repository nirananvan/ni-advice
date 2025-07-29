<template>
    <v-container>
     <v-row justify="center">
    <v-col cols="12" md="6">
        <h2 class="text-h5 font-weight-purple text-center mb-4">
          お気に入りまとめ
          <ul>
            <li v-for="favorite in FavoriteArray" :key="favorite.id">{{ favorite }}</li>
          </ul>
        </h2>
    </v-col>
</v-row>


</v-container>



</template>

<script>
 export default {
        computed: {
            FavoriteArray(){
                return this.$store.state.FavoriteArray;
            }
        },

        methods: {
            // ボタン押下でmutationをcommitする
            async setData(data) {
                this.$store.commit('data/setData', data); // 名前空間の変更
            }
        }
    }

</script>