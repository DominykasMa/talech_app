import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import warehouseMiddleWare from '../middleWare/warehouseMiddleWare'

const store = createStore(rootReducer, applyMiddleware(
    logger, warehouseMiddleWare
))


export default store