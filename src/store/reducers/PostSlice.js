import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: {
    title: "Title",
    desc: "Some description",
    header: {
      show: false,
      text: "Header",
    },
    image: {
      show: false,
      elem: null,
    },
  },
  alert: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostData(state) {
      state.post =
          JSON.parse(localStorage.getItem("post-editor")) || state.post;
    },
    changeTitle(state, action) {
      state.post.title = action.payload;
    },
    changeDesc(state, action) {
      state.post.desc = action.payload;
    },
    toggleHeader(state, action) {
      state.post.header.show = action.payload;
    },
    toggleImage(state, action) {
      state.post.image.show = action.payload;
    },
    changeHeader(state, action) {
      state.post.header.text = action.payload;
    },
    changeImage(state, action) {
      state.post.image.elem = action.payload;
    },
    saveChanges(state) {
      localStorage.setItem("post-editor", JSON.stringify(state.post));

      state.alert = true;
    },
    hideAlert(state) {
      state.alert = false;
    }
  },
});

export default postSlice.reducer;
