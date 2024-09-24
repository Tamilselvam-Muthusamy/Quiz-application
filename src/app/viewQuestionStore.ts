import { create } from "zustand";
import { BaseStoreState } from "../models/common-models";
import { apiProvider } from "../network/apiProvider";

export interface viewQuestionStore extends BaseStoreState<[]> {
  reset: () => void;
}
export const viewQuestionsStore = create<any>((set: any) => ({
  page: 1,
  search: "",
  data: {
    from: 0,
    to: 0,
    total: 0,
    totalPages: 0,
    data: [],
  },
  isLoading: false,
  setPage: (page: any) => set({ page }),
  setSearch: (search: any) => set({ search }),
  reset: () => {
    set({
      page: 1,
      search: "",
    });
  },
  async fetchData(id: any) {
    set({ isLoading: true });
    const { page, search } = viewQuestionsStore.getState();
    const result = await apiProvider.viewQuestion({
      page,
      search,
      subjectId: id,
    });
    if (result != null) {
      set({ data: result.data ?? [] });
    }
    set({ isLoading: false });
  },
}));
