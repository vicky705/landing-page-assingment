import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDark : false,
    openNav : false
}

export const storeSlice = createSlice({
    name : "store",
    initialState,
    reducers : {
        toggleTheme : (state, actions) => {
            state.isDark = !state.isDark
        },
        toggleNav : (state, actions) => {
            state.openNav = !state.openNav
        }
    }
})

export const {toggleTheme, toggleNav} = storeSlice.actions

export default storeSlice.reducer