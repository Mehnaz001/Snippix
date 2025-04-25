import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  snippets:localStorage.getItem("snippets")?
  JSON.parse(localStorage.getItem("snippets")) : [] 
}

export const SnippixSlice = createSlice({
  name: 'snippix',
  initialState,
  reducers: {
    addToSnippets: (state, action) => {
     
    },
    updateToSnippets: (state, action) => {
      
    },
    resetAllSnippets: (state, action) => {
      
    },
    RemoveFromSnippets: (state, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToSnippets, updateToSnippets, resetAllSnippets, RemoveFromSnippets } = SnippixSlice.actions

export default SnippixSlice.reducer