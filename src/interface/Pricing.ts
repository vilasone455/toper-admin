export interface Pricing{
    _id : string
    planName : string
    price : number
    features : string[]
}

export const defaultPricing : Pricing = {
    _id : "",
    planName : "",
    price : 0,
    features : []
}