import {createSlice} from "@reduxjs/toolkit"
import { fetchAuthLogin, fetchAuthRegister } from "../action/authThunk"

const initialState = {
    logToken: "",
    userDatas: {},
    logUserDatas: {},
    error: "",
    status: "nothing",
    logOutStatus: true,
}

export const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutAuth: (state, action) => {
            state.logToken = action.payload
        },
        logoutQuery: (state, action) => {
            state.logOutStatus = action.payload
        }
    },

    extraReducers:(builder) => {
        builder.addCase(fetchAuthRegister.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchAuthRegister.fulfilled, (state,action) => {
            state.userDatas = action.payload
            state.status = "Success"
        })
        builder.addCase(fetchAuthRegister.rejected, (state,action) => {
            state.status = "Error",
            state.error = action.payload
        })

        // !Login Reducer
        builder.addCase(fetchAuthLogin.pending,  (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchAuthLogin.fulfilled, (state,action) => {
            state.logToken = action.payload.token
            state.logUserDatas = action.payload
            state.status = "Success"
        })
        builder.addCase(fetchAuthLogin.rejected, (state,action) => {
            state.status = "Error",
            state.error = action.payload
        })
    }
})

export const { logoutAuth, logoutQuery } = authReducer.actions
export default authReducer.reducer