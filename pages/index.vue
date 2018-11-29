<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <div class="display-3 text-xs-center">¿Que deseas hacer?</div>
        <!-- <logo/> -->
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card color="blue-grey darken-2" class="white--text" to="users/consumption">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Consumo de agua</div>
              <span>Resumen del consumo de agua por mes, semana o dia.</span>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card color="cyan darken-2" class="white--text" to="users/getWater">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Solicitar agua</div>
              <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card color="blue-grey darken-2" class="white--text" to="users/messages">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Mensajes</div>
              <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
            </div>
          </v-card-text>
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
