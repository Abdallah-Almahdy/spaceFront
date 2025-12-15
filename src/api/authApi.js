import { postData } from "./configs"


const login =  async ({username,password})=>{
    try{
        const res = await postData("/login",{
            "username":username,
            "password":password
        })
        console.log(res)
    }
    catch(e){
        console.log(e)
    }
}


export{login}