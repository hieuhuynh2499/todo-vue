import { GetterTree } from "vuex";

export const getters: GetterTree<any, any> = {
  booksD: (state: any) => state.booksData.books,
};

export default getters;