import ActionList from '../actions/actionsList'

export const startCheckLogIn = () => ({
    type: ActionList.Check_LogIn_Start
});

export const checkLogInSuccessFull = () => ({
    type: ActionList.Check_LogIn_Successfull
});

export const checkLogInFailed = () => ({
    type: ActionList.Check_LogIn_Failed
});