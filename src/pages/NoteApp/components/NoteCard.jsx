import {MdDeleteForever, MdEdit, MdOutlineSave, MdClose  } from "react-icons/md"
import {useState} from "react";
import useNoteStore from "../store/useNoteStore.js";

const NoteCard = ({data}) => {
    const {updateNote, deleteNote} = useNoteStore()

    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(data.title)
    const [level, setLevel] = useState(data.level)
    const [content, setContent] = useState(data.content)

    const formatColor = (level) => {
        switch (level) {
            case 'Medium':
                return 'bg-yellow-500'
            case 'High':
                return 'bg-red-500'
            default:
                return 'bg-green-500'
        }
    }

    const handleSaveEdit = () => {
        updateNote(data.id, {
            title,
            level,
            content
        })
        setIsEdit(false)
    }

    if (isEdit) {
        return (
            <div className="bg-gray-300/10 rounded-md">
                <div className="px-3 pb-6">

                    <input value={title} onChange={(e) => setTitle(e.target.value)} autoFocus type="text" className="text-white py-3 w-full outline-0 text-lg tracking-wider text-center bg-transparent font-medium"/>

                    <div className="flex items-center justify-between">
                        <select
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="text-white outline-0 bg-blue-400 w-max py-1 text-lg px-4 rounded-md">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>

                        <div className="flex items-center gap-2 text-2xl">
                            <MdClose onClick={() => setIsEdit(false)} className='text-red-500 cursor-pointer'/>
                            <MdOutlineSave onClick={handleSaveEdit} className='text-green-500 cursor-pointer'/>
                        </div>

                    </div>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="mt-2 p-1 w-full border border-highlight rounded outline-none text-gray-400 h-[320px] bg-transparent"></textarea>

                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-300/10 rounded-md">
            <div className="px-3 pb-6">

                <div className="text-white py-3 text-lg tracking-wider text-center font-medium">{data?.title}</div>

                <div className="flex items-center justify-between">
                    <div
                        className={`text-white w-max py-1 text-lg px-4 rounded-md ${formatColor(data?.level)}`}>{data?.level}</div>

                    <div className="flex items-center gap-2 text-2xl">
                        <MdEdit onClick={() => setIsEdit(true)} className='text-yellow-500 cursor-pointer'/>
                        <MdDeleteForever onClick={() => deleteNote(data?.id)} className='text-red-500 cursor-pointer'/>
                    </div>

                </div>

                <div className="mt-4 text-gray-400 min-h-[200px] h-[320px] overflow-y-auto">
                    {data?.content}
                </div>
            </div>
        </div>
    )
}
export default NoteCard
