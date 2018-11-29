<template>
  <main>
    <v-container fluid fill-height>
      <v-layout flex align-center justify-center>
        <v-flex md9>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-text class="text-xs-center">
              <div class="headline">Solicitar agua</div>
              <div>
                <v-img src="../../static/img/bottle-of-water.png"></v-img>
              </div>
              <v-btn color="error"><v-icon>more</v-icon></v-btn>
              <v-btn color="success"></v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>
<script>
export default {
  computed: {
    increment() {
      return this.$store.state.counter;
    }
  }
};
</script>

