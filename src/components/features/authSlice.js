import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { email, isPasswordEqual } = action.payload;
      const similarEmail = state.users.filter((user) => user.email === email);

      if (similarEmail.length > 0 && isPasswordEqual === false) {
        state.errors = [
          {
            status: 400,
            message: "password is not equal",
          },
          {
            status: 400,
            message: "email is already registered",
          },
        ];

        state.hasErrors = true;
      } else if (isPasswordEqual === false) {
        state.errors = [
          {
            status: 400,
            message: "password is not equal",
          },
        ];
        state.hasErrors = true;
      } else if (similarEmail.length > 0) {
        state.errors = [
          {
            status: 400,
            message: "email is already registered",
          },
        ];
        state.hasErrors = true;
      } else {
        state.users = [...state.users, action.payload];
        state.hasErrors = false;
        state.errors = undefined;
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      console.log(email);

      const emailFound = state.users.filter((user) => user.email === email);
      const passwordFound = state.users.filter(
        (user) => user.password === password
      );

      if (emailFound.length > 0 && passwordFound.length > 0) {
        state.isAuthenticated = true;
        state.errors = undefined;
      } else {
        state.isAuthenticated = false;
        state.errors = [
          {
            status: 401,
            message: "Invalid Login",
          },
        ];
      }
    },
    createPost: (state, action) => {
      const { user, title, details } = action.payload;
      state.allPosts = state.users.map((userd) => [
        ...userd.posts,
        { user, title, details },
      ]);
    },
    addComments: (state, action) => {
      const { email } = action.payload;
      state.users = state.users.map((user) => {
        if (user.email === email) {
          return user.posts.filter((post) => {
            return (post.comments = action.payload);
          });
        } else {
          return user;
        }
      });
    },
    getPosts: (state) => {
      state.allPosts = state.users.map((user) => user.posts);
    },
    errorCleanup: (state) => {
      state.errors = undefined;
    },
  },
  extraReducers: {},
});

export const {
  registerUser,
  loginUser,
  errorCleanup,
  getPosts,
  addComments,
  createPost,
} = authSlice.actions;
export const authSelect = (state) => state.auth;
export default authSlice.reducer;
