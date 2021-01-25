import { createStore, ModuleTree } from 'vuex'
import {App} from 'vue'
import getters from './getters'

const allModules = import.meta.globEager('./modules/*.ts')
const modules = {} as ModuleTree<any>
Object.keys(allModules).forEach(path => {
  const fileName = path.replace(/(.*\/)*([^.]+).*/ig,"$2")
  modules[fileName] = allModules[path][fileName] || allModules[path].default || allModules[path]
})

console.log(modules, 'modules')

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters,
  modules
})

export function setupStore (app: App) {
  app.use(store)
  console.log(store, 'store')
}

export default store
