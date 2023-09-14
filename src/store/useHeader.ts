import { create } from "zustand"


// Define the interface of the Cart state
interface State {
  header: string
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  setHeader: (header: string) => void
}

// Initialize a default state
const INITIAL_STATE: State = {
  header: 'noheader'
}

// Create the store with Zustand, combining the status interface and actions
export const useHeaderStore = create<State & Actions>((set, get) => ({
  header: INITIAL_STATE.header,
  setHeader: (header: string) => {
    set(state => ({
      header,
    }))
  },
}))
