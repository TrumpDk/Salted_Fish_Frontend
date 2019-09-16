import AsyncComponent from '../component/lazyLoadComponent'

const Home = AsyncComponent(() => import('../page/Home'));
const RouterList = [
    {
        name: "闲鱼",
        link: '/Home',
        component: Home
    }
]

export default RouterList;