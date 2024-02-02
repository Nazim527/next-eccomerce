import { login } from "@/api/auth/login";
import { register } from "@/api/auth/register"
import {createAsyncThunk} from "@reduxjs/toolkit"

//!Register
export const fetchAuthRegister = createAsyncThunk(
    "auth/fetchAuthRegister",
    async (regObj, {rejectWithValue}) => {
        console.log(regObj);
        try {   
            const result = await register(regObj)

            console.log(result);
            return result
        } catch (error) {
            return rejectWithValue("Qeydiyyat olarken xeta bas verdi!")
        }
    } 
)

//! Login auth
export const fetchAuthLogin = createAsyncThunk(
    "auth/fetchAuthLogin",
    async (data, {rejectWithValue}) => {
        try {
            const result = await login(data)

            return result
        } catch (error) {
            return rejectWithValue("Daxil Loginde olarken xeta bas verdi!")
        }
    } 
)