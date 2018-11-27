<template>
  <v-layout>
    <v-flex>
      <template>
        <div>{{increment}} limones</div>
        <button @click="$store.commit('increment')">Aumentar peras</button>
      </template>
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

