import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Snippets from './components/Snippets'
import Navbar from './components/Navbar'
import ViewSnippets from './components/ViewSnippets'
import "./App.css"
const router = createBrowserRouter(
  [
    {
      path: "/",
      element : <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/snippets",
      element : <div>
        <Navbar />
        <Snippets />
      </div>
    },
    {
      path: "/snippets/:snippetId",
      element : <div>
        <Navbar />
        <ViewSnippets />
      </div>
    },
  ]
)

function App() {
  
  return (
   <div>
    <RouterProvider router = {router}/>
   </div>
  )
}

export default App
