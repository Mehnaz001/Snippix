import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
  snippets:localStorage.getItem("snippets")?
  JSON.parse(localStorage.getItem("snippets")) : [] 
}

export const SnippixSlice = createSlice({
  name: 'snippix',
  initialState,
  reducers: {
    addToSnippets: (state, action) => {
     const snippet = action.payload;
     state.snippets.push(snippet);
     localStorage.setItem("snippets",JSON.stringify(state.snippets));
     toast("Snippet saved Succesfully");
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