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
            <q-item-label>Fichero</q-item-label>
            <!--<q-item-label caption>Subhead</q-item-label>-->
            </q-item-section>
        </q-item>
        <div class="q-ma-md">
            <q-input v-model="nombre" label="Nombre" />
            <q-file color="purple-12" v-model="file" label="Fichero">
                <template v-slot:prepend>
                <q-icon name="attach_file" />
                </template>
            </q-file>
            <div class="row">
                <q-chip color="primary" text-color="white">dataproc</q-chip>
                <q-chip color="primary" text-color="white">manual</q-chip>
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
    name:"FileManager",
    data:() =>{
        return {
            nombre:"Dataproc ppt",
            file:""
        }
    }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
