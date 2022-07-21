import create from "zustand";

const useStore = create((set) => ({
  zoom: 1,
  setZoom: (zoomVal) => set({ zoom: zoomVal }),
}));

export default useStore;
