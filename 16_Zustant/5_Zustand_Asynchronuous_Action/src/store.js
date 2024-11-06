import create from "zustand";
import axios from "axios";

const initialState = {
  users: [],
};

const useStore = create((set) => ({
  ...initialState,
  getUsers: async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    set(() => ({ users: data }));
  },
}));

export default useStore;
