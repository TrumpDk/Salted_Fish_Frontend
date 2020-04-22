import loadable from '@loadable/component'

import { fetchCommodityData } from '../action/Home';

const Home = loadable(() => import('../shared/page/Home/Home'));
const LogIn = loadable(() => import('../shared/page/LogIn/LogIn'));

const routers = [
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

export default routers;