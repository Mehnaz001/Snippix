import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addToSnippets, updateToSnippets } from '../redux/SnippixSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const snippetId = searchParams.get("snippetId");
  const dispatch = useDispatch();
  const snippets = useSelector((state) => state.snippix.snippets);

  useEffect(() => {
    const snippet = snippets.find((p) => p._id === snippetId);
    if (snippet) {
      setTitle(snippet.title);
      setValue(snippet.value);
    }
  }, [snippetId, snippets]);

  function createSnippet() {
    const snippet = {
      title,
      value,
      _id: snippetId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (snippetId) {
      dispatch(updateToSnippets(snippet));
    } else {
      dispatch(addToSnippets(snippet));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white pt-10 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-6">
        <input 
          className="w-full p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          className="w-full h-60 p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button 
          className="self-start bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-2 rounded-md"
          onClick={createSnippet}
        >
          {snippetId ? "Update Snippet" : "Create My Snippet"}
        </button>
      </div>
    </div>
  );
};

export default Home;
