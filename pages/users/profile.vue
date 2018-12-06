<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-text>
          <div class="headline">Informacion del perfil</div>
          <v-text-field label="Nombre" single-line v-model="profile.name"></v-text-field>
          <v-text-field label="Apellido" single-line v-model="profile.lastname"></v-text-field>
          <v-text-field label="Genero" single-line v-model="profile.genre"></v-text-field>
          <v-text-field label="telefono" single-line v-model="profile.phone"></v-text-field>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data(){
    return{
      profile:{}
    }
  },
  computed: {
    increment(){
      return this.$store.state.counter
    }
  }
}
</script>

