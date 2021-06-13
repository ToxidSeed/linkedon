<template>
    <div>
        <div>
            <div class="text-h4 text-light-green-10 q-ml-md">Ficheros</div>
        </div>        
         <q-table  
         class="no-shadow"         
          :data="data"
          :columns="columns"
          row-key="name"
          dense
         >
            <template v-slot:top>
                <q-btn color="primary" :disable="loading" label="Add" to="/FileManager" />                
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <!--<q-td key="index" :props="props">
                        {{ props.row.index }}
                    </q-td>-->
                    <q-td key="nombre" :props="props">
                        <q-btn color="primary" icon="content_copy" dense flat/>
                        <q-btn color="orange" outline icon="favorite_border" dense flat/>
                        <q-btn color="red" outline icon="delete" dense flat/>                        
                        <a target="_blank" :href="props.row.link">{{ props.row.nombre }}</a>
                    </q-td>
                     <q-td key="fch_registro" :props="props">
                        {{ props.row.fch_registro }}
                    </q-td>
                </q-tr>
                <q-tr :props="props">
                    <q-td colspan="100%">
                        <q-chip v-for="item in props.row.labels" v-bind:key="item">
                            {{item}}
                        </q-chip>                        
                    </q-td>
                </q-tr>
            </template>
         </q-table>
    </div>
</template>
<script>
export default {
    name:"LinkList",
    data:() =>{
        return {
            data:[{
                name:"x1",
                index:"1",
                nombre:"Dataproc ppt",
                link:"http://google.com",
                fch_registro:"2021-05-31",
                labels:["datio","vbox","live"]
            },{
                name:"x2",
                index:"2",
                nombre:"Inventario hmedidas",
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