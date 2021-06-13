<template>
    <div class="row">
        <q-card class="my-card">
        <q-item>
            <!--<q-item-section avatar>
                <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
            </q-item-section>-->

            <q-item-section>
            <q-item-label>Enlace</q-item-label>
            <!--<q-item-label caption>Subhead</q-item-label>-->
            </q-item-section>
        </q-item>
        <div class="q-ma-md">
            <q-input v-model="nombre" label="Nombre" />
            <q-input v-model="enlace" label="Enlace" />
            <div class="row">
                <q-chip color="primary" text-color="white">datio</q-chip>
                <q-chip color="primary" text-color="white">live</q-chip>
            </div>
        </div>
        <q-card-actions >
            <q-btn flat color="primary">Aceptar</q-btn>
            <q-btn flat color="brown">Cancelar</q-btn>
        </q-card-actions>
        </q-card>
    </div>
</template>
<script>
export default {
    name:"LinkManager",
    data:() =>{
        return {
            nombre:"vbox live",
            enlace:"https://vbox.live.com"
        }
    }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
