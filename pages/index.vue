<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <div class="display-3 text-xs-center grey--text grey lighten-3 ">¿Que deseas hacer?</div>
        <!-- <logo/> -->
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card class="grey--text" to="users/consumption">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Consumo de agua</div>
              <span>Resumen del consumo de agua por mes, semana o dia.</span>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card class="grey--text" to="users/getWater">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Solicitar agua</div>
              <span>Necesitas agua, no dudes en solicitarlo de manera simple</span>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card class="grey--text" to="users/messages">
          <v-card-text class="text-xs-center">
            <div>
              <div class="headline">Mis Mensajes</div>
              <span>Para cualquier duda rapida, puedes enviar</span>
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
