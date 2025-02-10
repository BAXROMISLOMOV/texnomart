import { create } from 'zustand'



const smthStore = ()=>({
        counter:[],
        count:[]
        
})
const useSmthStore = create(smthStore)

export default useSmthStore;