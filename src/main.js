import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import i18n from './i18n.js'


const app = createApp(App)

app.use(i18n);


app.use(PrimeVue,{
    theme:{
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    },
});

app.component('pb-Button', Button);
app.component('pb-SelectButton', SelectButton);


    app.mount('#app')

