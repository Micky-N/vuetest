import type { IPerson as IPerson1 } from "../main/IPerson";

export interface IPerson extends IPerson1 {
    projects: string[];
}