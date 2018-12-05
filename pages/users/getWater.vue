<template>
  <main>
    <v-container>
      <v-layout flex align-center justify-center >
        <v-flex class="pad-b-10">
          <v-card color="white" class="blue--text">
            <v-card-text class="text-xs-center">
              <div class="headline padding">Solicitar agua</div>
              <v-layout column align-center>
                <v-flex>
                  <v-img class="size-img" src="../../img/bottle-of-water.png"></v-img>
                </v-flex>
                <v-flex>
                  <v-text-field label="Cantidad de agua" single-line v-model="qty"></v-text-field>
                </v-flex>
              </v-layout>
              <v-btn color="error" @click="qty--">
                <v-icon>remove</v-icon>
              </v-btn>
              <v-btn color="success" @click="qty++">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout flex align-center justify-center>
        <v-flex>
          <v-card color="white" class="blue--text">
            <v-card-text class="text-xs-center">
              <div class="headline">Resumen de compra</div>
              <v-layout column align-center>
                <v-flex>
                  <div class>{{qty}} {{qty > 1 ? 'Aguas' : 'Agua'}}</div>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>
<script>
export default {
  data() {
    return {
      qty: 0
    };
  },
  computed: {
    increment() {
      return this.$store.state.counter;
    }
  }
};
</script>
<style>
.size-img {
  width: 100px;
  height: 100px;
}
</style>


