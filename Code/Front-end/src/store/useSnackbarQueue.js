// src/store/useSnackbarQueue.js
import { create } from 'zustand';

export const useSnackbarQueue = create((set) => ({
  messages: [],
  showMessage: (severity, message) => {
    const id = Date.now() + Math.random(); 
    set((state) => ({
      messages: [...state.messages, { id, message, severity }],
    }));
  },
  removeMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((msg) => msg.id !== id),
    })),
}));
