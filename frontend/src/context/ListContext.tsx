import { ReactNode, createContext, FC, useState } from "react"
import { IList } from "../components/Desktop";

interface ListProviderProps {
    children: ReactNode;
}

interface ListContextProps {
    lists: IList[];
    setLists: React.Dispatch<React.SetStateAction<IList[]>>;
}


const listas: IList[]= [
    {
      "id": "1",
      "title": "react"
    },
    {
      "id": "2",
      "title": "reactss"
    }
  ]


export const ListContext = createContext<ListContextProps>({
    lists: [],
    setLists: () => {}
});
  

export const ListProvider: FC<ListProviderProps> = ( {children} ) => {
    const [lists, setLists] = useState<IList[]>(listas)
    
    return (
        <ListContext.Provider value={{lists, setLists}}>
            {children}
        </ListContext.Provider>
    )
}

