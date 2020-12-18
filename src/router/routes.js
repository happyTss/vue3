const demo1 = () => import ('../demo/demo1.vue')
const demo2 = () => import ('../demo/demo2.vue')
const demo3 = () => import ('../demo/demo3.vue')
const demo4 = () => import ('../demo/demo4.vue')
const demo5 = () => import ('../demo/demo5.vue')
const demo6 = () => import ('../demo/demo6.vue')
const demo7 = () => import ('../demo/demo7.vue')
const demo8 = () => import ('../demo/demo8.vue')
const demo9 = () => import ('../demo/demo9.vue')


export const routes = [
  {path:'/demo1',component:demo1},
  {path:'/demo2',component:demo2},
  {path:'/demo3',component:demo3},
  {path:'/demo4',component:demo4},
  {path:'/demo5',component:demo5},
  {path:'/demo6',component:demo6},
  {path:'/demo7',component:demo7},
  {path:'/demo8',component:demo8},
  {path:'/demo9',component:demo9}
]