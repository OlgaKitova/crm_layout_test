import { configureStore } from '@reduxjs/toolkit';
import  hideSideBarReducer  from '../reducers/hideSidebar';
import hideFilterBlockReducer from '../reducers/hideFilterBlock';

export default configureStore({
  reducer: {
    sidebar: hideSideBarReducer,
    filterblock: hideFilterBlockReducer
  }
})