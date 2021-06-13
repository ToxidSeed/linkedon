import Vue from 'vue'
import LinkList from './components/LinkList.vue'
import LinkManager from './components/LinkManager.vue'
import FileManager from './components/FileManager.vue'
import TagManager from './components/TagManager.vue'
import FavoriteList from './components/FavoriteList.vue'
import FileList from './components/FileList.vue'
/*import WinLogin from './components/WinLogin.vue'
//import WinMain from './components/WinMain.vue'
import WinInicio from './components/WinInicio.vue'
import WinRegistrarse from './components/WinRegistrarse.vue'
import WinCampo from './components/WinCampo.vue'
import WinTabla from './components/WinTabla.vue'
import WinProveedor from './components/WinProveedor.vue'
import TipoDatoLista from './components/TipoDatoLista.vue'
import CampoLista from './components/CampoLista.vue'
import WinTipoDato from './components/WinTipoDato.vue'
import ProveedorBDLista from './components/ProveedorBDLista.vue'
import WinIntro from './components/WinIntro.vue'
import WinProyecto from './components/WinProyecto.vue'
import WinUsuario from './components/WinUsuario.vue'
import WinPerfil from './components/WinPerfil.vue'*/
import VueRouter from 'vue-router'
/*import ResultadosBusqueda from './components/ResultadosBusqueda.vue';
import PanelDatabase from './components/PanelDatabase.vue'
import PanelEsquema from './components/PanelEsquema.vue'
import PanelTablaList from './components/PanelTablaList.vue'
import PanelProyectoList from './components/PanelProyectoList.vue';
import PanelBaseDatosLista from './components/PanelBaseDatosLista.vue';
import PanelTipoObjetoList from './components/PanelTipoObjetoList.vue';
import PanelEsquemaList from './components/PanelEsquemaList.vue';
*/

Vue.use(VueRouter);

const routes =  [
    {
      path:'/', component:LinkList,     
    },
    {
      path:'/link',component:LinkManager
    },
    {
      path:'/favoritelist', component:FavoriteList
    },{
      path:'/filelist', component:FileList
    },{
      path:'/FileManager', component:FileManager
    },{
      path:'/tagmanager', component:TagManager
    }
]

const router = new VueRouter({
  routes
})


export default router;