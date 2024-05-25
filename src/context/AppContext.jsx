//steps1: create the context app
//Step2: provider
//step3:cosnume the context

import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);

    //data filling part
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            setPage(data?.page);
            setTotalPages(data?.totalPages);
            setPosts(data?.posts);

        } catch (error) {
            console.log("Error");
            setPosts([]);
            setPage(1);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlerPageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value ={
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange
    }

    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
}




