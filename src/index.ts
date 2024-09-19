import {
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import Vue from 'vue';
// Bootstrap Vue and icons
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import WorkbenchNavigator from './WorkbenchNavigator.vue';

/**
 * Initialization data for the workbench navigator widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'workbench-vue-extension',
  description: 'A minimal JupyterLab extension for ARM Workbench Navigator .',
  autoStart: true,
  activate: () => {
    console.log('JupyterLab extension with Vue Component is activated!');
    // Create a container for the Vue footer
    const node = document.createElement('div');
    node.id = 'custom-footer-container';
    // Append the footer to the body, below the status bar
    document.body.appendChild(node);
    Vue.use(BootstrapVue, {
      breakpoints: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl", "xxxxl"],
    });
    Vue.use(BootstrapVueIcons);
    // Render the Vue footer component inside the container
    new Vue({
      el: node,
      render: h => h(WorkbenchNavigator)
    })
  }
};

export default extension;
