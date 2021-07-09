import create from 'zustand';

const useStore = create(set => ({

  inputInfo: {},
  setInputInfo: (info) => set(state => ({inputInfo: info})),

  preview: '',
  setPreview: (a) => set(state => ({preview: a})),

  image: '',
  setImage: (b) => set(state => ({image: b})),

  mobile: false,
  setMobile: (a) => set(state => ({mobile: a}))

}));


export default useStore;
