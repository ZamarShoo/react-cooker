import { Routes, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';

import { HomePage, PostIdPage, LikedPostsPage, CreatePost } from './pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/like" element={<LikedPostsPage />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>  
    </>
  );
}

export default App;