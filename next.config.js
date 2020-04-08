const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

// Variables de entorno para utilizar distita API o lo que sea... diferenciando el servidor de desarrollo y el servidor de producción

module.exports = phase => {
  const isDevelopment  = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    SITE_NAME:"EDblog",
    API_BLOG: (() =>  {
      if (isDevelopment) {
        return 'https://jsonplaceholder.typicode.com/'
      } else {
        return 'https://api.edblog.com'
      }
    })()
  }
  return {
    env,
  }
}

