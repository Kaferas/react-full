import { createContext,useReducer,useEffect } from "react";
import githubReducer from "./githubReducer";
const GithubContext=createContext()

const GITHUB_URL= process.env.REACT_APP_URL
const GITHUB_TOKEN= process.env.REACT_APP_TOKEN

export const GithubProvider=({children})=>{
    const initialState={
        users:[],
        loading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)
    
    // useEffect(()=>{
    //     fetchUsers()
    // },[])

    const searchUsers = async(text)=>{
        setLoading()
        const params= new URLSearchParams({
            q: text
        })
        const search= await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await search.json()
        dispatch({
            type: 'GET_USER',
            payload: items
        })
    }

    const clearUsers=()=>dispatch({type:'CLEAR_USERS'})

    const setLoading= () => dispatch({type:'SET_LOADING'})

    return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading,
        searchUsers,
        clearUsers
    }}>
        {children}
     </GithubContext.Provider>
}

export default GithubContext; 