import { Tarea } from "./Tarea"


type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index: number) => void


}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
    return (
        <div className="taskList">
            { listaTareas.map((task, index) => {
                return (
                    <Tarea
                        key={index}
                        tarea={task}
                        borrarTarea={() => borrarTarea(index)}
                    />
                )
            })}
        </div>
    )
}