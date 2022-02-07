import create from 'zustand'

const useStore = create(set => ({
  users: undefined,
  setUsers: (value) => set(state => ({users: value})),
  search:"",
  setSearch: (value) => set(state => ({search:value})),
  userArray: [],
  setUserArray: (value) => set(state => ({userArray:value})),
}))

export default useStore;