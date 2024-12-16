import {createStore} from 'redux'
import { rootReducer } from './combinerReducer'


export const store = createStore(rootReducer)


