import NoteCard from "./components/NoteCard.jsx";
import {useState} from "react";
import ModalAdd from "./components/ModalAdd.jsx";
import useNoteStore from "./store/useNoteStore.js";

const Index = () => {

    const {notes} = useNoteStore()
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    return (
        <>
            {isAddModalOpen && <ModalAdd setIsAddModalOpen={setIsAddModalOpen}/>}
            <div className="bg-primary min-h-screen pt-10">
                <div className="max-w-[1280px] mx-auto w-full bg-[#262d47] py-10">
                    <div className="text-4xl font-bold tracking-widest text-accent text-center mb-14">Note App</div>
                    <div className="max-w-[920px] mx-auto text-lg">
                        <button onClick={() => setIsAddModalOpen(true)} className="bg-highlight px-4 py-1 rounded-md font-medium text-accent mb-4">
                            Add new note
                        </button>
                    </div>
                    <div className="grid grid-cols-3 mx-auto max-w-[900px] w-[92%] gap-6">
                        {notes.map(item => (
                            <NoteCard key={item.id} data={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
