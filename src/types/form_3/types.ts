import json from '@/json/3.json';
import type { InjectionKey } from 'vue';

export type Json3T = typeof json

export type DataT = Json3T['data']

export const DataS = Symbol() as InjectionKey<DataT>;

export const AddDataS = Symbol() as InjectionKey<(key: string, value: any) => void>;