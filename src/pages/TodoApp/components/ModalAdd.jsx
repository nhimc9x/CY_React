import {Button} from "@/components/ui/button.jsx"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.jsx"
import {Input} from "@/components/ui/input.jsx"
import {Label} from "@/components/ui/label.jsx"
import {FilePlus2} from "lucide-react"
import {PickDate} from "@/pages/TodoApp/components/PickDate.jsx";
import {useState} from "react";
import useTodoStore from "@/pages/TodoApp/store/useTodoStore.js";

export function ModalAdd() {
    const {addTodo} = useTodoStore()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === "" || description === "" || deadline === "") {
            return
        }
        addTodo({
            id: Date.now(),
            title,
            description,
            deadline: deadline.toLocaleDateString(),
            status: "pending",
            completed: false
        })
        setTitle("")
        setDescription("")
        setDeadline(new Date())
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mb-4 bg-green-600 hover:bg-green-500">
                    <FilePlus2/> New todo
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader className='my-2'>
                        <DialogTitle className='font-bold text-xl'>Add a new todo</DialogTitle>
                        <DialogDescription>Enter the details of the new todo</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                                   className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)}
                                   className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="deadline" className="text-right">
                                Deadline
                            </Label>
                            <PickDate deadline={deadline} setDeadline={setDeadline}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className='bg-green-600 hover:bg-green-500'>Add new</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
