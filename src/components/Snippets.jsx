import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

const Snippets = () => {
  const [searchSnippet,setSearchSnippet] = useState('');
  const dispatch = useDispatch();

  const snippets = useSelector((state)=>state.snippix.snippets);
  console.log(snippets);

  const filteredData = snippets.filter(
    (snippet) => snippet.title.toLowerCase().includes(searchSnippet.toLowerCase())
  )
  return (
    <div>
      Snippets
    </div>
  )
}

export default Snippets
