import React, { createContext, ProviderProps, useContext, useState } from "react";

export const CommentsContext = createContext({});


export const CommentsProvider = ({children}:any) => {
    const [comments, setComments] = useState([]);

    const useSetComments = async() => {
        try {
            await setComments([]);
        } catch (e) {
            console.log(e)
        }
    }

    return <CommentsContext.Provider value={{comments, useSetComments}}>{children}</CommentsContext.Provider>
}

// export const getComments = () => {
//     const comments = useContext(CommentsContext);
//     return comments
// }

// export const setComments = () => {
//     const { useSetComments }:any = useContext(CommentsContext)
//     return useSetComments
// }