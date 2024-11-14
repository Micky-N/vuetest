import type { IAddress } from "./IAddress"
import type { IPhone } from "./IPhone"

export interface IPerson {
    name: string;
    age: number;
    gender: string;
    address: IAddress;
    phones: IPhone[];
    email: string;
}