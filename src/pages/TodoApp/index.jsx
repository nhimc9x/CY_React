import {DataTable} from "@/pages/TodoApp/components/DataTable.jsx";
import {columns} from "@/pages/TodoApp/components/Columns.jsx";
import useTodoStore from "@/pages/TodoApp/store/useTodoStore.js";

export const TodoApp = () => {
    const {todos} = useTodoStore()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={todos}/>
        </div>
    )
}