import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversations: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversations: selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
