import {create} from 'zustand'
import {devtools} from "zustand/middleware";

const useNoteStore = create((set) => ({
    notes: JSON.parse(localStorage.getItem('notes')) || [],

    addNote: (note) => {
        set((state) => {
            const addedNote = [...state.notes, note]
            localStorage.setItem('notes', JSON.stringify(addedNote))
            return {
                notes: addedNote
            }
        })
    },

    updateNote: (id, note) => {
        set((state) => {
            const updatedNote = state.notes.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        ...note
                    }
                }
                return item
            })
            localStorage.setItem('notes', JSON.stringify(updatedNote))
            return {
                notes: updatedNote
            }
        })
    },

    deleteNote: (id) => {
        set((state) => {
            const deletedNote = state.notes.filter((item) => item.id !== id)
            localStorage.setItem('notes', JSON.stringify(deletedNote))
            return {
                notes: deletedNote
            }
        })
    },

}))

export default useNoteStore