<template>
    <div class="row">
        <div class="col-3">
            <q-card class="my-card">
            <q-item>
                <!--<q-item-section avatar>
                    <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>-->

                <q-item-section>
                <q-item-label>Etiqueta</q-item-label>
                <!--<q-item-label caption>Subhead</q-item-label>-->
                </q-item-section>
            </q-item>
            <div class="q-ma-md">
                <q-input v-model="nombre" label="Nombre" />                        
            </div>
            <q-card-actions >
                <q-btn flat color="primary">Aceptar</q-btn>
                <q-btn flat color="brown">Cancelar</q-btn>
            </q-card-actions>
            </q-card>
        </div>
        <div>
            <q-table  
            class="no-shadow"         
            :data="data"
            :columns="columns"
            row-key="name"
            dense
            >                
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <!--<q-td key="index" :props="props">
                            {{ props.row.index }}
                        </q-td>-->
                        <q-td key="nombre" :props="props">
                            <q-btn color="primary" icon="content_copy" dense flat/>                           
                            <q-btn color="red" outline icon="delete" dense flat/>                        
                            {{ props.row.nombre }}
                        </q-td>
                        <q-td key="fch_registro" :props="props">
                            {{ props.row.fch_registro }}
                        </q-td>
                    </q-tr>                    
                </template>
            </q-table>
        </div>
    </div>
</template>
<script>
export default {
    name:"TagManager",
    data:() =>{
        return {
            nombre:"vbox",
            data:[{
                name:"x1",
                index:"1",
                nombre:"vbox",
                link:"http://google.com",
                fch_registro:"2021-05-31",
                labels:["datio","vbox","live"]
            },{
                name:"x2",
                index:"2",
                nombre:"dataproc",
                link:"http://github.com",
                labels:["datio","vbox","work"]
            },{
                name:"x2",
                index:"2",
                nombre:"live",
                link:"http://github.com",
                labels:["datio","vbox","work"]
            },{
                name:"x2",
                index:"2",
                nombre:"work",
                link:"http://github.com",
                labels:["datio","vbox","work"]
            }],
            columns:[
                /*{
                    name: 'index',
                    label: '#',
                    field: 'index',
                    align:'left'
                },*/{
                    name: "nombre",
                    label:"nombre",        
                    field:"nombre",
                    style: 'min-width: 300px',
                    align:'left'
                },{
                    name:"fch_registro",
                    label:"Fecha de Registro",
                    field:"fch_registro",
                    align:'left'
                }
            ]
        }
    }
}
</script>
<style lang="sass" scoped>
</style>
