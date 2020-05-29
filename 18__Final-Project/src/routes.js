import Home from './components/Home.vue'
import StockStocks from './components/stocks/Stocks.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
  {path:'', component:Home, name:'home'},
  {path:'/stocks', component:StockStocks, name:'stocks'},
  {path:'/portfolio', component:Portfolio, name:'portfolio'},
  {path:'*', redirect:'/'}
]
