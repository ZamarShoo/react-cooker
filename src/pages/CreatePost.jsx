import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from './../store/slices/posts'
import { useForm } from "react-hook-form";

import { Input } from '../components/UI/Input/Input';
import { Textarea } from '../components/UI/textarea/Texarea';

import s from './styles/createpost.module.css'

export const CreatePost = () => {
    const [selectTags, setSelectTags] = React.useState([])
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { tags } = useSelector((state) => state.posts)

    const onSubmit = (data) => {
        data.tags = selectTags
        data.like = false
        console.log(data)
    };

    const addToTags = (taged) => {
        if(!selectTags.includes(taged)) {
            setSelectTags(state => ([ ...state, taged]))
        } else {
            setSelectTags(tag => selectTags.filter(tagArr => tagArr !== taged))
        }
    }

    React.useEffect(() => {
        dispatch(fetchTags())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <section className="wrapper">
            <h1>Create</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="title" title="Заголовок" register={register} required />
                <Input label="img" title="Изображение" register={register} required />
                <Textarea label="excerpt" title="Краткое описание" register={register} required />
                <Textarea label="description" title="Текст" register={register} required />
                <ul className={s.tags}>
                {
                    tags.map(tag => (
                    <li 
                        key={tag.id}
                        className={
                            selectTags.includes(tag.name)  ? s.active : ''
                        }
                        onClick={() => addToTags(tag.name)}
                    >
                        {tag.name}
                    </li>
                    ))
                }
                </ul>
            <input type="submit" value="Create"/>
            </form>
        </section>
    )
}