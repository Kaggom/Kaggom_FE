import create from 'zustand';

interface StoreState {
    activeTab: 'chat' | 'record' | 'user';
    setActiveTab: (tab: 'chat' | 'record' | 'user') => void;
}

const useStore = create<StoreState>((set) => ({
    activeTab: 'chat', // 기본 탭
    setActiveTab: (tab) => set({ activeTab: tab }),
}));


export default useStore;

