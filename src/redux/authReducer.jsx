import { SIGNUP } from "./authAction"

const initState ={
    users : []
}

export const authReducer =(state = initState,{type,payload})=>{
    switch(type){
        case SIGNUP :
            return{
                ...state,
                
            }
    }
}