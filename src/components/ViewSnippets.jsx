import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route params
import { useSelector } from 'react-redux';
import { Copy } from 'lucide-react'; // Import Copy icon

const ViewSnippets = () => {
  const { snippetId } = useParams(); // Get the snippetId from the URL parameter
  const snippets = useSelector((state) => state.snippix.snippets); // Get snippets from Redux store
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    const foundSnippet = snippets.find((s) => s._id === snippetId); // Find the snippet by ID
    setSnippet(foundSnippet); // Set snippet to the found snippet
  }, [snippetId, snippets]);

  // Handle the copy action
  const handleCopy = () => {
    if (snippet) {
      navigator.clipboard.writeText(snippet.value);
      alert('Snippet copied to clipboard!'); // You can replace this with a toast or custom message
    }
  };

  if (!snippet) {
    return <div className="text-center text-white">Snippet not found!</div>; // Display if no snippet is found
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4 py-6 bg-gray-800 rounded-md border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">{snippet.title}</h1>
        <button
          className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 hover:bg-gray-600"
          onClick={handleCopy}
        >
          <Copy size={20} className="text-white" />
        </button>
      </div>

      <p className="text-gray-300 mb-4">{snippet.value}</p>
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">{new Date(snippet.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ViewSnippets;
