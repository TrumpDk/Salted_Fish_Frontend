import AsyncComponent from '../component/lazyLoadComponent'

const Home = AsyncComponent(() => import('../page/Home/Home'));
const LogIn = AsyncComponent(() => import('../page/LogIn/LogIn'));

const RouterList = [
    {
        path: '/',
        component: Home,
        exact: true,
        requiresAuth: false,
        showTab: true
    },
    {
        path: '/Home',
        component: Home,
        exact: true,
        requiresAuth: false,
        showTab: true
    },
    {
        path: '/LogIn',
        component: LogIn,
        exact: true,
        requiresAuth: false,
        showTab: false
    }
]

export default RouterList;