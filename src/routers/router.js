import VueRouter from 'vue-router'

var config = require('../../config');
// var rootPath=config.build.assetsPublicPath;
var rootPath="/";


/** -------------------------------------------------- 懒加载start --------------------------------------------*/

const Home = resolve => require(['../Home.vue'], resolve)
const Demo = resolve => require(['../demos/Demo.vue'], resolve)
const Cell = resolve => require(['../demos/Cell'], resolve)
const Tab = resolve => require(['../demos/Tab'], resolve)
const Swiper = resolve => require(['../demos/Swiper'], resolve)
const Tabbar = resolve => require(['../demos/Tabbar'], resolve)
const TabbarLink = resolve => require(['../demos/TabbarLink'], resolve)
const Flexbox = resolve => require(['../demos/Flexbox'], resolve)
const Popup = resolve => require(['../demos/Popup'], resolve)
const Switch = resolve => require(['../demos/Switch'], resolve)
const Toast = resolve => require(['../demos/Toast'], resolve)
const Scroller = resolve => require(['../demos/Scroller'], resolve)
const Pulldown = resolve => require(['../demos/Pulldown'], resolve)
const Pullup = resolve => require(['../demos/Pullup'], resolve)
const PulldownPullup = resolve => require(['../demos/PulldownPullup'], resolve)
const Spinner = resolve => require(['../demos/Spinner'], resolve)
/** -------------------------------------------------- 懒加载end --------------------------------------------*/

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    //路由映射map
    routes: [

        { path: rootPath, component: Home, meta: { scrollToTop: true }, name: 'home' },
        { path: rootPath + 'demo', component: Demo , name: 'demo'},
        { path: rootPath + 'component/cell', component: Cell , name: 'cell'},
        { path: rootPath + 'component/tab', component: Tab , name: 'tab'},
        { path: rootPath + 'component/swiper', component: Swiper , name: 'swiper'},
        { path: rootPath + 'component/tabbar', component: Tabbar , name: 'tabbar'},
        { path: rootPath + 'component/tabbar-link', component: TabbarLink , name: 'tabbarLink'},
        { path: rootPath + 'component/flexbox', component: Flexbox , name: 'flexbox'},
        { path: rootPath + 'component/popup', component: Popup , name: 'popup'},
        { path: rootPath + 'component/switch', component: Switch , name: 'switch'},
        { path: rootPath + 'component/toast', component: Toast , name: 'toast'},
        { path: rootPath + 'component/scroller', component: Scroller , name: 'scroller'},
        { path: rootPath + 'component/pulldown', component: Pulldown , name: 'pulldown'},
        { path: rootPath + 'component/pullup', component: Pullup , name: 'pullup'},
        { path: rootPath + 'component/pulldown-pullup', component: PulldownPullup , name: 'pulldown-pullup'},
        { path: rootPath + 'component/spinner', component: Spinner , name: 'spinner'},
        //找不到页面就返回404页面
        {
            path: '*',
            component: { template: '<p style="height:300px;text-align:center">404</p>' }
        }
    ]
});


// // 跳转前的逻辑
// router.beforeEach((to, from, next) => {

//     console.log('before---------------');

//     console.log(to.auth);
//     next()
// })

// window.routeList = [];

// // 跳转后的逻辑
// router.afterEach(function(transition) {
//     console.log('-----------------after');
//     for (var i = 0; i < routeList.length; i++) {
//         console.log(routeList[i].name);
//     };
// });


export default router
