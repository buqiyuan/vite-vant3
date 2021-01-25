import {Router} from 'vue-router'

export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
      document.title = to?.meta.title || document.title
      next()
  })
}
