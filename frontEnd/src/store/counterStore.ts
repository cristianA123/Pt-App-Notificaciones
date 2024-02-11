import { create } from 'zustand'

interface CounterState {
    count: number
    bears: number
    increasePopulation: () => void
    getPost: () => Promise<void>
    // removeAllBears: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
// export const useCounterStore = create<CounterState>(() => ({
    count: 10,
    bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    increasePopulation: () => set((state) => ({ count: state.count + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    getPost: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }
}))

