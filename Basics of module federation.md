# The Basics of Module Federation

## Steps to Integrate Two Frontend Pages Using Microfrontend Architecture

### 1. Designate Host and Remote Applications
       Choose one application to act as the Host and the other as the Remote.
### 2. Expose Modules in the Remote Application
     Decide which modules (files) you want to make available to other projects.
     Set up module federation plugin in the wepack.config.js to expose these modules.
``` javascript
// Remote's webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  // other configurations...
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component', // Expose the component
      },
    }),
  ],
};
```


### 3. Set Up Module Federation in the Host Application 
    Decide which files you want to get from the Remote.
    Set up module federation plugin in the webpack.config.js to fetch these files.
  ``` javaScript
    // Host's webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  // other configurations...
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};
```
### 4. Refactor the Entry Point in the Host Application
      Modify the entry point to load asynchronously.
  ``` javaScript
      // Host's src/index.js
import('./bootstrap'); // Dynamically import the bootstrap file
```


### 5. Import Modules from the Remote in the Host Application
       Import the necessary files from the Remote.
  ``` javaScript
    // Host's src/App.js
import React from 'react';

const RemoteComponent = React.lazy(() => import('remoteApp/Component'));

const App = () => (
  <React.Suspense fallback="Loading...">
    <RemoteComponent />
  </React.Suspense>
);

export default App;
```

    
