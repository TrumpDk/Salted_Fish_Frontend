const list = {
    /**
     * log in action
     */
    Log_In_Start: Symbol(),
    Log_In_Successful: Symbol(),
    Log_In_Failed: Symbol(),
    Log_Out_Start: Symbol(),
    Log_Out_Failed: Symbol(),
    Log_Out_Successfull: Symbol(),

    /**
     * animate action
     */
    Start_Animating: Symbol(),
    Stop_Animating: Symbol(),

    /**
     * check auth action
     */
    Check_LogIn_Start: Symbol(),
    Check_LogIn_Successfull: Symbol(),
    Check_LogIn_Failed: Symbol(),

    /**
     * home page requests
     */
    Home_Data_Request: Symbol(),
    Home_Data_Request_Failed: Symbol(),
    Home_Data_Request_Successful: Symbol()

}

export default list;