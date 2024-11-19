import {create} from "zustand"
import {createJSONStorage, persist} from 'zustand/middleware'

const useTodoStore = create(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo) => {
                set((state) => ({
                    todos: [...state.todos, todo]
                }))
            },
            removeTodo: (id) => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id)
                }))
            },
            updateTodo: (id, update) => {
                set((state) => ({
                    todos: state.todos.map((todo) => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                ...update
                            }
                        }
                        return todo
                    })
                }))
            },
        }),
        {
            name: 'todo-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
export default useTodoStore
