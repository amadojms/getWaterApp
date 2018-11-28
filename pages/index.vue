<template>
  <v-container grid-list-lg>
    <v-layout column align-center>
      <v-flex xs12 sm8 md6>
        <div class="subheading">¿Que deseas hacer?</div>
        <!-- <logo/> -->
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <v-card color="blue-grey darken-2" class="white--text" to="users/consumption">
          <v-card-title primary-title>
            <div>
              <div class="headline">Consumo de agua</div>
              <span>Resumen del consumo de agua por mes, semana o dia.</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card color="cyan darken-2" class="white--text text-xs-center" to="users/getWater">
          <v-card-title primary-title>
            <div>
              <div class="headline">Solicitar agua</div>
              <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text text-xs-center" to="users/messages">
          <v-card-title primary-title>
            <div>
              <div class="headline">Mensajes</div>
              <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
};
</script>
