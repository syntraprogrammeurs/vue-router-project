import {createRouter,createWebHistory} from "vue-router";
// import HomePageComponent from "@/components/HomePageComponent.vue";
// import AboutPageComponent from "@/components/AboutPageComponent.vue";
import ContactPageComponent from "@/components/ContactPageComponent.vue";
import userProfileComponent from "@/components/UserProfileComponent.vue";
import DashboardComponent from "@/components/DashboardComponent.vue";
import DashboardProfileComponent from "@/components/DashboardProfileComponent.vue";
import DashboardSettingsComponent from "@/components/DashboardSettingsComponent.vue";
import ShopComponent from "@/components/ShopComponent.vue";

const routes =[
    { path: '/', component: () => import('../components/HomePageComponent.vue') },
    { path: '/about', component: () => import('../components/AboutPageComponent.vue') },

    // {path:'/', name:'home', component:HomePageComponent},
    // {path:'/about', name:'about', component:AboutPageComponent},
    {path:'/contact', name:'contact', component:ContactPageComponent},
    {path:'/user/:id', name:'user', component:userProfileComponent},
    {path:'/dashboard',
        component:DashboardComponent,
        children:[
            {path:'/dashboard/profile', name:'dashboardprofile', component: DashboardProfileComponent},
            {path:'/dashboard/settings', name:'dashboardsettings', component: DashboardSettingsComponent},
        ]
    },
    {path:'/shop', name:'shop', component:ShopComponent},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;