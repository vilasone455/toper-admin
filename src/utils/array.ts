import { Dictionary } from "@reduxjs/toolkit";

export function dictornaryToArray<T>(dics : Dictionary<T>) : T[] {
    let rs : T[] = []
    
    for (const key in dics) {
        if (Object.prototype.hasOwnProperty.call(dics, key)) {
            const element = dics[key];
            if(element){
                rs.push(element)
            }
        }
    }
    return rs
}