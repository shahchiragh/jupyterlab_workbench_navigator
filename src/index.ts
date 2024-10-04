import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { MainAreaWidget } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';
// import { Message } from '@lumino/messaging';
import { ILauncher } from '@jupyterlab/launcher';
import Vue from 'vue';
// Bootstrap Vue and icons
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import WorkbenchNavigator from './WorkbenchNavigator.vue';
import WorkbenchNavigatorLauncher from './WorkbenchNavigatorLauncher.vue';
import { LabIcon } from '@jupyterlab/ui-components';
import workbenchGreenIconUrl from "../style/icons/green_workbench.svg";



const workbenchIcon = new LabIcon({
  name: 'ui-components:vue',
  svgstr: workbenchGreenIconUrl,
});


class WorkbenchNavigatorLauncherWidget extends Widget {
  /**
   * Construct a new Workbench Navigator widget.
   */
  constructor(app:JupyterFrontEnd) {
      super();
      this.id = 'arm-workbench-widget';
      this.title.icon = workbenchIcon;
      this.title.caption = 'ARM Data Workbench';
      Vue.use(BootstrapVue, {
        breakpoints: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl", "xxxxl"],
      });
      Vue.use(BootstrapVueIcons);
      new Vue({
          el: this.node,
          render: h => h(WorkbenchNavigatorLauncher, {
            props: {
              app: app,
            }
          })
      });
  }

  /**
   * Handle update requests for the widget.
   */
  // async onUpdateRequest(msg: Message): Promise<void> {
  //     // console.log(this.node);
  //     Vue.use(BootstrapVue, {
  //       breakpoints: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl", "xxxxl"],
  //     });
  //     Vue.use(BootstrapVueIcons);
  //     new Vue({
  //         el: this.node,
  //         render: h => h(WorkbenchNavigatorOpen)
  //     })
  // }
}


class WorkbenchNavigatorSidebarWidget extends Widget {
  appShell: any;
  constructor(app:JupyterFrontEnd) {
    super();
    this.id = 'arm-workbench-side-bar';
    this.title.icon = workbenchIcon;
    this.title.caption = 'ARM Data Workbench';
    this.node.id = "arm-workbench-side-bar-tab";
    this.appShell = app;

  }

  // Override the onAfterAttach method to add click event
  protected onAfterAttach(msg: any): void {
    super.onAfterAttach(msg);
    // Add a click event listener to the icon
    const iconElement = document.querySelector('[data-id="arm-workbench-side-bar-tab"]');
    if (iconElement) {
      iconElement.addEventListener('click', (event) => {
        event.stopPropagation();
        Vue.use(BootstrapVue, {
          breakpoints: ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl", "xxxxl"],
        });
        Vue.use(BootstrapVueIcons);
        new Vue({
          el: this.node,
          render: h => h(WorkbenchNavigatorLauncher, {
            props: {
              app: this.appShell,
            }
          })
        });
      });
    }
  }
}

/**
 * Initialization data for the workbench navigator widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'workbench-vue-extension',
  description: 'A minimal JupyterLab extension for ARM Workbench Navigator .',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
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


    // Add the workbench navigator items to the launcher
    const { commands } = app;

    const command = 'create-vue-widget';
    commands.addCommand(command, {
      caption: 'ARM Data Workbench',
      label: 'ARM Data Workbench',
      icon: workbenchIcon,
      execute: () => {
        const content = new WorkbenchNavigatorLauncherWidget(app);
        const widget = new MainAreaWidget({content});
        return widget;
      }
    });

    if (launcher) {
      launcher.add({
        command,
        category: 'Data Workbench',
      });
    }

    // Create the custom sidebar widget
    const sidebarWidget = new WorkbenchNavigatorSidebarWidget(app);
    // Add the widget to the left sidebar
    app.shell.add(sidebarWidget, 'left');

  }
};

export default extension;
