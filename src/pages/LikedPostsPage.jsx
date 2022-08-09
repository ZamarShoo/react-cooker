import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/slices/posts';
import { CookItem } from '../components/CookItem/CookItem';

import s from './styles/likepage.module.css'

export const LikedPostsPage = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.posts)

    React.useEffect(() => {
        dispatch(fetchPosts())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <section>
            <div className={s.wrapper}>
            <main>
                <div className={s.home_header}>
                <h1>What I like</h1>
                </div>
                <div className={s.home_body}>
                {
                    posts.map(post => (
                        post.like &&
                            <CookItem key={post.id} post={post}/>
                        
                    ))
                }
                </div>
            </main>
            </div>
        </section>
    )
}