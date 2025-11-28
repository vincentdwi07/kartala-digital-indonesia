type Geo = {
    lat: string
    lng: string
}

type Address = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

type Company = {
    bs: string
    catchPhrase: string
    name: string
}

export interface User{
    id: number
    address: Address
    company: Company
    email: string
    name: string
    phone: string
    username: string
    website: string
}