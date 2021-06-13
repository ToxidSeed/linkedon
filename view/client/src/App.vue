<template>
  <q-layout view="hHh Lpr lFf">
    <q-header   >
      <q-toolbar class="bg-blue-10">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          LinkedOn BBVA
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="link" class="text-light-green-10"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Enlaces</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <!--<q-item clickable tag="a" href="/link">-->
        <q-item clickable  tag="a" to="/favoritelist">
          <q-item-section avatar>
            <q-icon name="favorite" class="text-orange"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Favoritos</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="filelist">
          <q-item-section avatar>
            <q-icon name="inventory_2" class="text-brown" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ficheros</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/tagmanager">
          <q-item-section avatar>
            <q-icon name="label" class="text-green"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Tags</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    //HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
