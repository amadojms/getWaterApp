<template>
  <v-layout>
    <v-flex>
      <v-card color="blue-grey darken-2" class="white--text" to="users/consumption">
          <v-card-title primary-title>
            <div>
              <div class="headline">Solicitar agua</div>
              <span>Resumen del consumo de agua por mes, semana o dia.</span>
            </div>
          </v-card-title>
        </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    increment(){
      return this.$store.state.counter
    }
  }
}
</script>

