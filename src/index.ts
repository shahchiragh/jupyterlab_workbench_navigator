import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_workbench_navigator extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_workbench_navigator:plugin',
  description: 'A JupyterLab extension for adding a navigator widget at the bottom of JupyterLab page to facilitate quick access to data workbench and other relevant applications',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_workbench_navigator is activated!');
  }
};

export default plugin;
