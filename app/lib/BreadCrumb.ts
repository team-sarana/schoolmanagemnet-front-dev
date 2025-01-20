import { create } from "zustand";

interface BreadcrumbState {
    breadcrumb: {
        title: string;
        url: string;
        image: string;
    };
    setBreadcrumb: (item: any) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>()((set) => ({
    breadcrumb: {
        title: "Loading...",
        url: "/",
        image: "",
    },
    setBreadcrumb: (item) => set((state) => ({ breadcrumb: item })),
}));