import loadble from '@loadable/component';
import { fetchCommodityData } from '../../redux/actions/Home';
const Home = loadble(() => import('../page/Home/Home'));
const LogIn = loadble(() => import('../page/LogIn/LogIn'));

const RouterList = [
    {
        path: '/',
        key: '/',
        component: Home,
        requiresAuth: false,
        showTab: true,
        prefetchData(stroe) {
            const plainObject = fetchCommodityData({ startIndex: 1, pageSize: 6 });
            stroe.dispatch(plainObject);
        }
    },
    {
        path: '/Home',
        key: '/Home',
        component: Home,
        requiresAuth: false,
        showTab: true,
        prefetchData(stroe) {
            const plainObject = fetchCommodityData({ startIndex: 1, pageSize: 6 });
            stroe.dispatch(plainObject);
        }
    },
    {
        path: '/LogIn',
        key: '/LogIn',
        component: LogIn,
        requiresAuth: false,
        showTab: false
    }
]

export default RouterList;