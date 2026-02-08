import { useNavigation } from "expo-router";
import  { useEffect } from "react";

export default function useHeaderTitle (name:string){
    const navigate = useNavigation()
    // This updates the header title of the parent Drawer
    useEffect(()=>{
        navigate.setOptions({title:`${name}`})
    },[navigate])
}