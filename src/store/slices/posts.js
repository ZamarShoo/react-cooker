import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import db from "../../firebase/index.js"
import { getDocs, collection, updateDoc, doc, addDoc } from "firebase/firestore"

const postsColRef = collection(db, "posts")
const tagsColRef = collection(db, "tags")


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    let postSnapShot = await getDocs(postsColRef);
    let posts = [];
    postSnapShot.forEach((post) => {
      let cityData = post.data();
      cityData.id = post.id;
      posts.push(cityData);
    });

    return posts
})

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
    let tagsSnapShot = await getDocs(tagsColRef);
      let tags = [];
      tagsSnapShot.forEach((tag) => {
        let tagData = tag.data();
        tagData.id = tag.id;
        tags.push(tagData);
      });

    return tags
})

export const editLikeToDB = createAsyncThunk('posts/editLikeToDB', async (action) => {
    const {id, like} = action
    const postDocRef = doc(db, "posts", id);
      await updateDoc(postDocRef, {
        "like": !like,
    });

    return id
})

export const createPost = createAsyncThunk('posts/createPost', async (newPost) => {
  await addDoc(postsColRef, newPost);

  return newPost
})


const initialState = {
    posts: [],
    selectedTags: [],
    tags: [],
    isLoading: false,
    searchPanel: ''
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSearchedTags: (state, action) => {
            if(!state.selectedTags.includes(action.payload)) {
              state.selectedTags.push(action.payload);
            } else {
              state.selectedTags = state.selectedTags.filter(tagArr => tagArr !== action.payload)
            }
        },
        setSearchPanel: (state, action) => {
          state.searchPanel = action.payload
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags = action.payload
        },
        [editLikeToDB.fulfilled]: (state, action) => {
            state.posts.filter(post => post.id === action.payload && (post.like = !post.like))
        },
    }
})

export const postsReducer = postSlice.reducer
export const { setSearchedTags, setSearchPanel } = postSlice.actions