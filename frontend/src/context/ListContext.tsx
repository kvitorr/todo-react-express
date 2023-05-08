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
      "title": "react",
      "tasks": [
        {
          "id": "1",
          "content": "botar lixo pra fora"
        },
        {
          "id": "2",
          "content": "caminhar"
        }
      ]
    },
    {
      "id": "2",
      "title": "reactss",
      "tasks": [
        {
          "id": "3",
          "content": "estudar"
        },
        {
          "id": "4",
          "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          "id": "5",
          "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          "id": "6",
          "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          "id": "7",
          "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          "id": "8",
          "content": "ouvir músicaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
      ]
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

