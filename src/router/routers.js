import loadable from '@loadable/component'

const Home = loadable(() => import('../shared/page/Home/Home'));
const LogIn = loadable(() => import('../shared/page/LogIn/LogIn'));
const NotFound = loadable(() => import('../shared/page/NotFound/NotFound'));
const MyInfo = loadable(() => import('../shared/page/MyInfo/MyInfo'));
const Category = loadable(() => import('../shared/page/CateList/cateList'));
const List = loadable(() => import('../shared/page/SubCateList/SubCateList'));
const Item = loadable(() => import('../shared/page/ItemDetailPage/ItemDetailPage'));

const routers = [
    {
        path: '/',
        key: '/',
        component: Home,
        requiresAuth: false,
        hidden: false,
        title: '首页',
        icon: '#iconshouye-xianxing',
        icon_selected: '#iconshouye-mianxing',
    },
    {
        path: '/Category',
        key: '/Category',
        component: Category,
        requiresAuth: false,
        hidden: false,
        title: '分类',
        icon: '#iconfenlei-xianxing',
        icon_selected: '#iconfenlei-mianxing',
    },
    {
        path: '/Cart',
        key: '/Cart',
        title: '购物车',
        component: LogIn,
        requiresAuth: false,
        icon: '#icongouwuche-xianxing',
        icon_selected: '#icongouwuche-mianxing',
        hidden: true
    },
    {
        path: '/User',
        key: '/User',
        title: '我的',
        component: MyInfo,
        requiresAuth: true,
        icon: '#iconwode-xianxing',
        icon_selected: '#iconwode-mianxing',
        hidden: false
    },
    {
        path: '/List',
        key: '/List',
        component: List,
        requiresAuth: false,
        hidden: true
    },
    {
        path: '/LogIn',
        key: '/LogIn',
        component: LogIn,
        requiresAuth: false,
        hidden: true
    },
    {
        path: '/Item',
        key: '/Item',
        component: Item,
        requiresAuth: false,
        hidden: true,
    },
    {
        path: '*',
        key: '*',
        component: NotFound,
        requiresAuth: false,
        hidden: true
    },
]

export default routers;