import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CookItem } from '../components/CookItem/CookItem'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { fetchPosts } from '../store/slices/posts'
import '../prototype'

import s from './styles/homepage.module.css'

export const HomePage = ({props}) => {
    const dispatch = useDispatch()
    const { posts, selectedTags, searchPanel } = useSelector((state) => state.posts)

    const [selectedPost, setSelectedPost] = React.useState([])

    React.useEffect(() => {
        dispatch(fetchPosts())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
      let newPosts
      if (selectedTags.length > 0) {
        newPosts = posts.filter(post => 
          post.tags.contains(selectedTags))

        setSelectedPost(newPosts)
      }
      if(searchPanel.length >= 3) {
        newPosts = (selectedTags.length > 0 ? selectedPost : posts)
                .filter(post => post.title.toLowerCase()
                .includes(searchPanel.toLowerCase()))
        setSelectedPost(newPosts)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTags, searchPanel])

    return(
        <section>
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <main>
        <div className={s.home_header}>
          <h1>Home</h1>
        </div>
            <div className={s.home_body} >
              {
                selectedTags.length > 0 || searchPanel.length > 0
                ? selectedPost.map(post => (<CookItem key={post.id} post={post}/>))
                : posts.map(post => (<CookItem key={post.id} post={post}/>))
              }
            </div>
      </main>
    </div>
  </section>
    )
}