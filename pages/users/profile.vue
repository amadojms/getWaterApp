<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-text>
          <div class="headline"><v-icon>account_circle</v-icon> Informacion del perfil</div>
          <v-text-field label="Nombre" single-line v-model="profile.name"></v-text-field>
          <v-text-field label="Apellido" single-line v-model="profile.lastname"></v-text-field>
          <v-text-field label="Genero" single-line v-model="profile.genre"></v-text-field>
          <v-text-field label="telefono" single-line v-model="profile.phone"></v-text-field>

          <v-flex>
            <v-btn block color="green" class="white--text"><v-icon>save</v-icon><div class="pad-l-10"> Guardar</div></v-btn>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      profile: {}
    };
  },
  computed: {
    increment() {
      return this.$store.state.counter;
    }
  }
};
</script>

