<template>
  <main>
    <v-container>
      <v-layout flex align-center justify-center >
        <v-flex class="pad-b-10">
          <v-card class="grey--text">
            <v-card-text class="text-xs-center">
              <div class="headline pad-b-10">Solicitar agua</div>
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
              <v-btn color="green" class="white--text" @click="qty++">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout flex align-center justify-center>
        <v-flex class="pad-b-10">
          <v-card color="white" class="grey--text">
            <v-card-text class="text-xs-center">
              <div class="headline">Resumen de compra</div>
              <v-layout column align-center>
                <v-flex>
                  <div class="display-2">{{qty}} {{qty > 1 ? 'Aguas' : 'Agua'}}</div>
                  <div class="display-2">{{priceTotal}} Pesos</div>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
       <v-layout flex align-center justify-center>
        <v-flex>
              <v-btn block color="green" class="white--text">
                Pagar ${{priceTotal}} pesos
              </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>
<script>
export default {
  data() {
    return {
      qty: 1,
      price: 15
    };
  },
  computed: {
    increment() {
      return this.$store.state.counter;
    },
    priceTotal() {
      return this.qty * this.price
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


