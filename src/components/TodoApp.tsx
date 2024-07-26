import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

// type Props = {}

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listatareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return
        setListaTareas([...listatareas, nuevaTarea])
        setNuevaTarea('')
    }

    const borrarTarea = (index: number) => {
        setListaTareas(listatareas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea" 
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listatareas} borrarTarea={borrarTarea } />
        </div>
    )
}