import { ReactNode } from "react"

type TGeo = {
    lat: string
    lng: string
}

type TAddress = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: TGeo
}

type TCompany = {
    bs: string
    catchPhrase: string
    name: string
}

export type TUserTable = {
    name: string
    width: number
    icons: ReactNode
}

export interface IUser{
    id: number
    address: TAddress
    company: TCompany
    email: string
    name: string
    phone: string
    username: string
    website: string
}
