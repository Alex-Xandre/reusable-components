import { createSlice } from '@reduxjs/toolkit';

export interface ModalProps {
    isOpen:false    
}

const initialState:ModalProps = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state:any) => {
      state.isOpen = true;
    },
    closeModal: (state:any) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
