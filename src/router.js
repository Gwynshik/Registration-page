import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import RegistrationForm from "./components/RegistrationFormPage.vue";
import AccountRegistered from "./components/AccountRegistered.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/regform', component: RegistrationForm, alias: '/'},
        {path: '/account-registered', component: AccountRegistered}
    ]
})