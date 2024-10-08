import { FormValues } from './hooks/useFormValidation';

export const isObjectEmpty = (objectName: FormValues) =>
  Object.keys(objectName).length === 0;

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
