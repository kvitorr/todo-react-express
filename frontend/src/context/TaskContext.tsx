import { ReactNode, createContext, FC, useState } from "react"
import { IList, ITask } from "../components/Desktop";

interface TaskProviderProps {
    children: ReactNode;
}

interface TaskContextProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const tasksMock: ITask[]= [
    {
        "id": "1",
        "content": "botar lixo pra fora",
        "idList": "1"
    },
    {
        "id": "2",
        "content": "caminhar",
        "idList": "1"
    },
    {
        "id": "3",
        "content": "estudar",
        "idList": "2"
    },
    {
        "id": "4",
        "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "idList": "2"
    }
  ]


export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    setTasks: () => {}
});
  

export const TaskProvider: FC<TaskProviderProps> = ( {children} ) => {
    const [tasks, setTasks] = useState<ITask[]>(tasksMock)
    
    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

