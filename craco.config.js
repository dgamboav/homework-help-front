const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // PERSONALIZACION DE VARIABLES GLOBALES (ESTILOS) ANT DESIGN
            modifyVars: { 
              // '@primary-color': '#1DA57A' 
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};