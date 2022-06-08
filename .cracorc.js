const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "cont",
          filename: "remoteEntry.js",
          exposes: {},
          /*remotes: {
            mfProducts: "mfProducts@http://localhost:3001/remoteEntry.js",
          },*/
          shared: {
            ...deps,
            core: {
              singleton: true,
            },
            layout: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
            }
          },
        }),
      ],
    },
  },
});
