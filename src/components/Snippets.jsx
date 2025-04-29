import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromSnippets } from '../redux/SnippixSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { PencilLine, Trash2, Eye, Copy, Calendar } from 'lucide-react';

const Snippets = () => {
  const [searchSnippet, setSearchSnippet] = useState('');
  const dispatch = useDispatch();
  const snippets = useSelector((state) => state.snippix.snippets);

  const filteredData = snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchSnippet.toLowerCase())
  );

  const handleDelete = (snippetId) => {
    dispatch(RemoveFromSnippets(snippetId));
    toast.success("Snippet deleted successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white pt-10 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-y-6 mt-25px">
        {/* Search */}
        <div className="w-full flex px-4 py-2 rounded-[0.3rem] border border-gray-700 bg-[#1f1f1f]">
          <input
            type="search"
            placeholder="Search snippets here..."
            className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            value={searchSnippet}
            onChange={(e) => setSearchSnippet(e.target.value)}
          />
        </div>

        {/* Snippets List */}
        <div className="border border-gray-700 py-6 px-4 rounded-[0.4rem] bg-[#1a1a1a]">
          <h2 className="text-4xl font-bold border-b border-gray-700 pb-4 mb-4">All Snippets</h2>
          <div className="flex flex-col gap-y-5">
            {filteredData.length > 0 ? (
              filteredData.map((snippet) => (
                <div
                  key={snippet?._id}
                  className="border border-gray-700 w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem] bg-[#1f1f1f]"
                >
                  {/* Title + Content */}
                  <div className="w-full sm:w-[50%] flex flex-col space-y-3">
                    <p className="text-3xl font-semibold">{snippet?.title}</p>
                    <p className="text-sm font-normal line-clamp-3 max-w-[90%] text-gray-400">
                      {snippet?.value}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-y-4 sm:items-end">
                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                      <Link to={`/?snippetId=${snippet?._id}`}>
                        <button className="p-2 rounded bg-[#2a2a2a] border border-gray-600 hover:border-blue-500">
                          <PencilLine className="text-white hover:text-blue-500" size={20} />
                        </button>
                      </Link>
                      <button
                        className="p-2 rounded bg-[#2a2a2a] border border-gray-600 hover:border-pink-500"
                        onClick={() => handleDelete(snippet?._id)}
                      >
                        <Trash2 className="text-white hover:text-pink-500" size={20} />
                      </button>
                      <Link to={`/snippets/${snippet?._id}`}>
                        <button className="p-2 rounded bg-[#2a2a2a] border border-gray-600 hover:border-orange-500">
                          <Eye className="text-white hover:text-orange-500" size={20} />
                        </button>
                      </Link>
                      <button
                        className="p-2 rounded bg-[#2a2a2a] border border-gray-600 hover:border-green-500"
                        onClick={() => {
                          navigator.clipboard.writeText(snippet?.value);
                          toast.success("Snippet copied to clipboard!");
                        }}
                      >
                        <Copy className="text-white hover:text-green-500" size={20} />
                      </button>
                    </div>

                    <div className="gap-x-2 flex text-sm text-gray-400">
                      <Calendar className="text-white" size={20} />
                      {new Date(snippet.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-center text-red-500">No Snippets Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
