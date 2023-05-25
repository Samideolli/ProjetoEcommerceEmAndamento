import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Carrinho from '../views/CarrinhoView.vue'
import CadastroUsuario from '../views/CadastroUsuarioView.vue'
import Produtos from '../views/ProdutosView.vue'
const routes = [
// {
  //  path: '/about',
   // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//  },
{
  path: '/',
  redirect: '/login',
},
{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho
  },
  {
    path: '/cadastroUsuario',
    name: 'cadastroUsuario',
    component: CadastroUsuario
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
