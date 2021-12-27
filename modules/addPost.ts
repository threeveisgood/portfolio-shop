import { createAction, handleActions } from 'redux-actions'
import { HYDRATE } from 'next-redux-wrapper';

const SETIMAGELINKS = 'addPost/SETIMAGELINKS'

export const setImageLinks = createAction(SETIMAGELINKS)

const initialState: any = {
    imageLinks: []
}

const addPost = handleActions(
    {
        [HYDRATE]: (state: any, { payload: hydrate }) => ({ ...state, hydrate}),
        [SETIMAGELINKS]: (state: any, { payload }) => ({ imageLinks: state.imageLinks })
    },
    initialState
)

export default addPost


