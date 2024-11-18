import type { InjectionKey } from "vue";

export const FormValidationS = Symbol() as InjectionKey<(key: string, isValid: boolean) => void>;