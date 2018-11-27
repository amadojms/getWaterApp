<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer> -->
    <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn v-for="(tab, index) in tabs" :key="index"
        color="teal"
        value="recent"
        :to="tab.to"
        router
      >
        <span v-text="tab.title"></span>
        <v-icon>history</v-icon>
      </v-btn>

      <!-- <v-btn
        color="teal"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn> -->
    </v-bottom-nav>
  </v-card>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        items: [
          { icon: 'apps', title: 'Perfil', to: '/' },
          { icon: 'bubble_chart', title: 'Ajustes', to: '/inspire' }
        ],
        tabs:[
          { icon: 'apps', title: 'Solicitar agua', to: '/' },
          { icon: 'fingerprint', title: 'Perfil', to: '/' },
          { icon: 'invert_colors', title: 'Programar entregas', to: '/' },
        ],
        title: 'Vuetify.js',
        bottomNav: 'recent'
      }
    }
  }
</script>
