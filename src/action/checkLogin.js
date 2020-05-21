import ActionList from './actionsList'

export const checkLogin = () => ({
    type: ActionList.Check_LogIn_Request
})

export const userDoLogin = () => ({
    type: ActionList.Check_LogIn_Loged
})

export const userLogout = () => ({
    type: ActionList.Log_Out_Request
})

export const userDoLogout = () => ({
    type: ActionList.Log_Out_End
})