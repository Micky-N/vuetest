import type { InjectionKey } from 'vue';
import type { Json3T } from './form_3/types';
import type { Json2T } from './form_2/types';
import type { Json1T } from './form_1/types';

export type JsonT = Json3T | Json2T | Json1T;

export type DataT = JsonT['data'];

export const DataS = Symbol() as InjectionKey<DataT>;

export const AddDataS = Symbol() as InjectionKey<(key: string, value: any) => void>;