import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './modules'



//persisting store to local storage
const persistConfig = {
    key: 'root',
    storage,
}
const persistedStore = persistReducer(persistConfig, rootReducer)

//logger middleware
const logger = createLogger()

export default () => {
    let store = createStore(persistedStore, composeWithDevTools(
        applyMiddleware(logger, thunk)
    ))
    let persistor = persistStore(store)
    return { store, persistor }
}
