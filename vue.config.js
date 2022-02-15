let path = '/'
if (process.env.GITHUB_REPOSITORY) {
  path = '/' + process.env.GITHUB_REPOSITORY.split('/')[1]
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? path
    : '/'
}