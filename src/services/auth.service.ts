import { instance } from "../api/axios.api"
import { ILoginDto } from "../types/user"

export const AuthService={
    async login(userData:ILoginDto):Promise<string|undefined>{
    const result= await instance.post<string>('accounts/login',userData);
        console.log(result);
    return undefined;
    },
    async logout(){}
}