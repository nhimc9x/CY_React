import {useState} from "react";
import useNoteStore from "../store/useNoteStore.js";

// eslint-disable-next-line react/prop-types
const ModalAdd = ({setIsAddModalOpen}) => {
    const {addNote} = useNoteStore()

    const [title, setTitle] = useState('')
    const [level, setLevel] = useState('Low')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote({
            id: Date.now(),
            title,
            level,
            content
        })
        setIsAddModalOpen(false)
    }

    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/10 flex items-center justify-center">
            <div
                className="bg-white rounded-md min-w-[360px] px-4 py-6 relative">
                <div className="text-secondary uppercase text-center text-xl font-semibold mb-4">Add new note</div>
                <form onSubmit={handleSubmit}>
                    <div className="text-accent">Title</div>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="my-2 bg-gray-300/60 px-4 py-2 w-full rounded-md text-gray-600 font-medium"/>
                    <div className="text-accent">Level</div>
                    <select value={level} onChange={(e) => setLevel(e.target.value)}
                            className="mt-2 bg-gray-300/60 px-4 py-2 w-full rounded-md text-gray-600 font-medium">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <div className="mt-4 text-accent">Content</div>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full min-h-32 mt-2 px-4 py-2 rounded-md bg-gray-300/60 text-gray-600"></textarea>
                    <div className="mt-4 flex justify-end gap-2">
                        <button type="button" className="bg-red-500 px-4 py-2 rounded-md text-white font-medium"
                                onClick={() => setIsAddModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button type="submit"
                                className="bg-highlight px-4 py-2 rounded-md text-accent font-medium">Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAdd;