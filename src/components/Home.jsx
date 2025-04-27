import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { addToSnippets, updateToSnippets } from '../redux/SnippixSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchParams,setSearchParams] = useSearchParams();
  const snippetId = searchParams.get("SnippetId");
  const dispatch = useDispatch();
  function createSnippet() {
    const snippet = {
      title:title,
      value: value,
      _id : snippetId || Date.now().toString(36), createdAt:new Date().toISOString(),
    }
    if(snippetId) {
      //update
      dispatch(updateToSnippets(snippet));
    }
    else {
      //Create
      dispatch(addToSnippets(snippet));
    }

    setTitle('');
    setValue(''),
    setSearchParams({});
  }
  return (
    <div>
      <input 
      className = 'rounded-1xl p-2 mt-2 bg-gray-700'
      type="text"
      placeholder='Enter Title Here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)} 
      />
      <button className='bg-purple-600 text-white rounded-sm ml-4' onClick={createSnippet}>
        {snippetId? "Update Snippet" : "Create My Snippet"}
      </button>
      <div >
        <textarea className='bg-gray-600 mt-4 h-100 w-100' placeholder='Enter your content here' value={value} onChange={(e)=>setValue(e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default Home
