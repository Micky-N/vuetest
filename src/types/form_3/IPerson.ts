import type { IPerson as IPerson2 } from "../form_2/IPerson";

export interface IPerson extends IPerson2 {
    notes: string[];
}