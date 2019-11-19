const list = {
    // I don't want to write too many strings,so I choose Symble as my first choice
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
    Check_LogIn_Failed: Symbol()

}

export default list;