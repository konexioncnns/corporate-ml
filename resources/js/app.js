import LayoutAdmin from "@/Layouts/LayoutAdmin";

require('./bootstrap');
import { store } from "./redux/app/store";
import { Provider } from "react-redux";


import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from './Components/Layout/Layout';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"; 


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props,Ziggy }) {
        return render(
           <Provider store={store}>
               <ToastContainer />
         <Layout>
                  <App  {...props} />
    </Layout>


           </Provider>

        , el,Ziggy);
    },
});

InertiaProgress.init({
    delay: 250,

    // The color of the progress bar.
    color: '#29d',
  
    // Whether to include the default NProgress styles.
    includeCSS: true,
  
    // Whether the NProgress spinner will be shown.
    showSpinner: true,
 });
