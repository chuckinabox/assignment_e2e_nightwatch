const path = require('path');
const serverPath = path.resolve('./bin/selenium-server-standalone-3.5.3.jar');

module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',

  selenium: {
    start_process: true,
    server_path: serverPath,
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
