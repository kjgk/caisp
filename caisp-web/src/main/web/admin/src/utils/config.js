const api = '/api/v1'

module.exports = {
  name: '绿化市容主题库',
  prefix: 'caisp',
  footerText: '绿化市容主题库-后台管理  © 2018',
  openPages: ['/login'],
  apiPrefix: api,
  api: {
    userLogin: `/login/account`,
    userLogout: `/logout`,
    currentInfo: `${api}/current`,
    menus: `${api}/menus`,
  },
  contentPath: '/caisp'
}
