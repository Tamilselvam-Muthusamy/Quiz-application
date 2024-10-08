import { create } from "zustand";
import { apiProvider } from "../network/apiProvider";
import { BaseStoreState } from "../models/common-models";
import { UserResponse } from "../models/user";

export interface userStoreType extends BaseStoreState<UserResponse> {
  positionId: string | number;
  subjectId: string | number;
  experienceLevel: string | number;
  roleId: string | number;
  dateFilter: string;
  isFilterApplied: boolean;
  setPosition: (position: string) => void;
  setSubjectId: (subject: string) => void;
  setRoleId: (subject: string) => void;

  setExperienceLevel: (experience: string) => void;
  setDateFilter: (search: string) => void;
  setIsFilterApplied: (isApplied: boolean) => void;
  setStartDate: (startDate: string | undefined) => void;
  setEndDate: (endDate: string | undefined) => void;
  startDate: string | undefined;
  endDate: string | undefined;
  reset: () => void;
}

export const userStore = create<userStoreType>((set) => ({
  page: 1,
  search: "",
  dateFilter: "All",
  positionId: 0,
  roleId: 0,
  experienceLevel: 0,
  subjectId: 0,
  isFilterApplied: false,
  startDate: undefined,
  endDate: undefined,
  data: {
    from: 0,
    to: 0,
    total: 0,
    totalPages: 0,
    data: [],
  },

  isLoading: false,
  setPage: (page) => set({ page }),
  setSearch: (search) => set({ search }),
  setDateFilter: (type: string) => set({ dateFilter: type }),
  setDateRange: (startDate: string, endDate: string) =>
    set({ startDate, endDate }),
  setPosition: (position: string) => set({ positionId: position }),
  setExperienceLevel: (experienceLevel: string) => set({ experienceLevel }),
  setSubjectId: (subjectId: string) => set({ subjectId }),
  setRoleId: (roleId: string) => set({ roleId }),
  setStartDate: (startDate: string | undefined) => set({ startDate }),
  setEndDate: (endDate: string | undefined) => set({ endDate }),
  setIsFilterApplied: (isApplied: boolean) =>
    set({ isFilterApplied: isApplied }),
  reset: () => {
    set({
      page: 1,
      search: "",
      dateFilter: "All",
      positionId: 0,
      subjectId: 0,
      roleId: 0,
      experienceLevel: 0,
      isFilterApplied: false,
      startDate: undefined,
      endDate: undefined,
    });
  },

  async fetchData() {
    set({ isLoading: true });
    const {
      page,
      search,
      positionId,
      dateFilter,
      startDate,
      endDate,
      roleId,
      subjectId,
      experienceLevel,
    } = userStore.getState();
    const result = await apiProvider.fetchAllUser({
      page,
      search,
      roleId,
      subjectId,
      experienceLevel,
      positionId,
      dateFilter,
      startDate,
      endDate,
    });
    if (result != null) {
      set({ data: result.data ?? [] });
    }
    set({ isLoading: false });
  },
}));
