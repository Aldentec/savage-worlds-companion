/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NPCCreateFormInputValues = {
    name?: string;
    race?: string;
    attributes?: string;
    parry?: string;
    pace?: string;
    toughness?: string;
    skills?: string;
    money?: string;
    personalityTraits?: string[];
    background?: string;
    secret?: string;
    height?: string;
    weight?: string;
};
export declare type NPCCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    race?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    parry?: ValidationFunction<string>;
    pace?: ValidationFunction<string>;
    toughness?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    money?: ValidationFunction<string>;
    personalityTraits?: ValidationFunction<string>;
    background?: ValidationFunction<string>;
    secret?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NPCCreateFormOverridesProps = {
    NPCCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    race?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    parry?: PrimitiveOverrideProps<TextFieldProps>;
    pace?: PrimitiveOverrideProps<TextFieldProps>;
    toughness?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextAreaFieldProps>;
    money?: PrimitiveOverrideProps<TextFieldProps>;
    personalityTraits?: PrimitiveOverrideProps<TextFieldProps>;
    background?: PrimitiveOverrideProps<TextFieldProps>;
    secret?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NPCCreateFormProps = React.PropsWithChildren<{
    overrides?: NPCCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NPCCreateFormInputValues) => NPCCreateFormInputValues;
    onSuccess?: (fields: NPCCreateFormInputValues) => void;
    onError?: (fields: NPCCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NPCCreateFormInputValues) => NPCCreateFormInputValues;
    onValidate?: NPCCreateFormValidationValues;
} & React.CSSProperties>;
export default function NPCCreateForm(props: NPCCreateFormProps): React.ReactElement;
