import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"
import TraditionalPost from "./Components/TraditionalPost"
import PostRQ from "./Components/PostRQ"

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <TraditionalPost /> */}
      {/* <PostRQ /> */}
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/posts'>Traditional Posts</Link>
              </li>
              <li>
                <Link to='/rq-posts'>RQ Posts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/posts' element={<PostsTraditional />} />
            <Route exact path='/rq-posts' element={<PostsRQ />} />
            {/* <Route exact path='/rq-posts/:postId' element={<PostDetailsRQ />} /> */}
            {/* <Route
              exact
              path='/paginated-fruits'
              element={<PaginatedQueries />}
            /> */}
            {/* <Route
              exact
              path='/infinite-fruits'
              element={<InfiniteQueries />}
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App