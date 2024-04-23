const createUserSlice = (set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) =>
    set((state) => ({ users: state.users.filter((u) => u.id !== userId) })),
});

export default createUserSlice;
