import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  snippets: localStorage.getItem("snippets")
    ? JSON.parse(localStorage.getItem("snippets"))
    : []
};

export const SnippixSlice = createSlice({
  name: 'snippix',
  initialState,
  reducers: {
    addToSnippets: (state, action) => {
      const snippet = action.payload;
      state.snippets.push(snippet);
      localStorage.setItem("snippets", JSON.stringify(state.snippets));
      toast.success("Snippet saved successfully");
    },

    updateToSnippets: (state, action) => {
      const snippet = action.payload;
      const index = state.snippets.findIndex(item => item._id === snippet._id);

      if (index >= 0) {
        state.snippets[index] = snippet;
        localStorage.setItem("snippets", JSON.stringify(state.snippets));
        toast.success("Snippet updated");
      }
    },

    resetAllSnippets: (state) => {
      state.snippets = [];
      localStorage.removeItem("snippets");
    },

    RemoveFromSnippets: (state, action) => {
      const snippetId = action.payload;
      const index = state.snippets.findIndex(item => item._id === snippetId);

      if (index >= 0) {
        state.snippets.splice(index, 1);
        localStorage.setItem("snippets", JSON.stringify(state.snippets));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToSnippets, updateToSnippets, resetAllSnippets, RemoveFromSnippets } = SnippixSlice.actions;

export default SnippixSlice.reducer;
