import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth=()=>{
    return useContext(AuthContext);
}
export default useAuth;