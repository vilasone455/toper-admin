export enum Status{
    Wait = 0,
    Accept = 1,
    Reject = 2
}

export const StatusData : any = {
    0 : {
        color : "primary",
        txt : "Wait"
    },
    1 : {
        color : "success",
        txt : "Accept"
    },
    2 : {
        color : "danger",
        txt : "Reject"
    }
}