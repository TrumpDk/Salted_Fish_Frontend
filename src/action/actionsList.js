const list = {
    /**
     * log in action
     */
    Log_In_Request: Symbol(),
    Log_In_Successful: Symbol(),
    Log_In_Failed: Symbol(),
    Log_In_Duration: Symbol(),
    Log_Out_Request: Symbol(),
    Log_Out_End: Symbol(),

    /**
     * animate action
     */
    Start_Animating: Symbol(),
    Stop_Animating: Symbol(),

    /**
     * check auth action
     */
    Check_LogIn_Request: Symbol(),
    Check_LogIn_Loged: Symbol(),
    Check_LogIn_Not_Loged: Symbol(),

    /**
     * home page requests
     */
    Home_Data_Request: Symbol(),
    Home_Data_Request_Failed: Symbol(),
    Home_Data_Request_Successful: Symbol(),

}

export default list;