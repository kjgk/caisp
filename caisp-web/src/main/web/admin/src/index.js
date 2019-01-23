import dva from 'dva'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import 'babel-polyfill'
import { contentPath } from 'utils/config'

const development = process.env.NODE_ENV === 'development'

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory({ basename: development ? '' : `${contentPath}/admin` }),
  onError (error) {
    console.error(error.message)
  },
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')

export default app._store // eslint-disable-line
