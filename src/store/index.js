import { create } from 'zustand';
import createUserSlice from './slices/userSlice.js';
import createProductSlice from './slices/productSlice.js';

//Slices Pattern 사용
//https://docs.pmnd.rs/zustand/guides/slices-pattern

//slice 모아서 내보내기
export const useBoundStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createProductSlice(...a),
}));
