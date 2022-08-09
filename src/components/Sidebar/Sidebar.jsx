import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags, setSearchedTags, } from './../../store/slices/posts'
import { setSearchPanel } from './../../store/slices/posts'


import s from './sidebar.module.css'

export const Sidebar = () => {
    const dispatch = useDispatch()

    const { tags, selectedTags } = useSelector((state) => state.posts)

    React.useEffect(() => {
        dispatch(fetchTags())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const clickToTag = (tag) => {
        dispatch(setSearchedTags(tag))
    }

    const searchPanelType = (val) => {
        dispatch(setSearchPanel(val))
    }


    return (
        <aside>
            <h2>SideBar</h2>

            <label>
                <input onInput={(e) => searchPanelType(e.target.value)} type='text' placeholder="Поиск"/>
            </label>
            
            <ul className={s.tags}>

                {
                    tags.map(tag => (
                        <li 
                    key={tag.id}
                    className={selectedTags.includes(tag.name)  ? s.active : ''}
                    onClick={() => clickToTag(tag.name)}
                >
                    {tag.name}
                    </li>
                    ))
                }
            </ul>
        </aside>
    )
}