import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
}

export const memeSlice = createSlice({
    name: 'meme',
    initialState,
    reducers: {
        changeTopText: (state, action) => {
            state.topText = action.payload
        },
        changeBottomText: (state, action) => {
            state.bottomText = action.payload
        },
        changeMemeImage: (state, action) => {
            state.image = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeTopText, changeBottomText, changeMemeImage } = memeSlice.actions

export default memeSlice.reducer