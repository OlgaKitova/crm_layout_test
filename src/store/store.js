import { configureStore } from '@reduxjs/toolkit';
import  hideSideBarReducer  from '../reducers/hideSidebar';

export default configureStore({
  reducer: {
    sidebar: hideSideBarReducer
  }
})