const api = '/api/v1'

module.exports = {
  name: '门面普查',
  prefix: 'Signboard',
  footerText: '徐汇区商业门面普查-后台管理  © 2018',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: api,
  api: {
    userLogin: `/login/account`,
    userLogout: `/logout`,
    currentInfo: `${api}/current`,
    menus: `${api}/menus`,
    // userInfo: `${api}/userInfo`,
  },
  contentPath: '/signboard'
}
