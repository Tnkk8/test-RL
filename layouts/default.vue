<template>
  <v-app class="joystix-font" dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-coffee-outline</v-icon>
        <v-img src="../assets/img/coffee_cup_logo.svg">
        </v-img>
      </v-btn> -->
      <v-avatar width="20" height="20">
        <img src="../assets/img/coffee_cup_logo.svg" alt="logo">
      </v-avatar>
      <v-toolbar-title class="text-title">{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; sync {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Order',
          to: '/order'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Stock',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Weed s Store'
    }
  }
}
</script>
<style lang="scss">
.text-title {
  font-size: 32px;
}
</style>
