

export default (config, env, helpers, options) => {
  if (env.production) {
    config.output.publicPath = 'https://alwarg.github.io/local-task-manager/';
  }
  return config;
}