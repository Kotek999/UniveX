module.exports = {
    test: /npm\.js$/,
    loader: 'string-replace-loader',
    include: path.resolve('node_modules/firebaseui/dist'),
    options: {
      search: 'require(\'firebase/app\');',
      replace: 'require(\'firebase/app\').default;',
 },
}