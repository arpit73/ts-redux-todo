import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'

import { RootState } from '../redux/rootReducer'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
