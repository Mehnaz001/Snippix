import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { RemoveFromSnippets } from '../redux/SnippixSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Snippets = () => {
  const [searchSnippet,setSearchSnippet] = useState('');
  const dispatch = useDispatch();

  const snippets = useSelector((state)=>state.snippix.snippets);
  console.log(snippets);

  const filteredData = snippets.filter(
    (snippet) => snippet.title.toLowerCase().includes(searchSnippet.toLowerCase())
  )

  function handleDelete(snippetId) {
    dispatch(RemoveFromSnippets(snippetId))
  }

  return (
    <div>
      <input type="search" placeholder='search here' value={searchSnippet} onChange={(e)=>setSearchSnippet(e.target.value)} className = 'rounded-1xl p-2 mt-2 bg-gray-500 text-white' />
      <div className="flex flex-col gap-5 mt-5">
        {
          filteredData.length > 0 &&
          filteredData.map(
            (snippet) => {
              return (
                <div className="border" key={snippet?._id}>
                  <div>
                    {snippet.title}
                  </div>
                  <div>
                    {snippet?.value}
                  </div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button>
                      <Link to={`/?snippetId=${snippet?._id}`}>Edit</Link>
                    </button>
                    <button>
                      <Link to={`/snippets/${snippet?._id}`}>View</Link>
                    </button>
                    <button onClick={()=>{handleDelete(snippet._id)}}>
                      Delete
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(snippet.value); 
                      toast.success("Copied")} }>
                      Copy
                    </button>

                  </div>
                  <div>
                    {snippet.createdAt}
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Snippets