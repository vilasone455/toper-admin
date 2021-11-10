export interface User{
    _id : string
    userName : string
    userEmail : string
    userPassword : string
}

export const defaultUser : User = {
    _id : "",
    userName : "",
    userEmail : "",
    userPassword : ""
}