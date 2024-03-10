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
export declare type NPCUpdateFormInputValues = {
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
export declare type NPCUpdateFormValidationValues = {
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
export declare type NPCUpdateFormOverridesProps = {
    NPCUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type NPCUpdateFormProps = React.PropsWithChildren<{
    overrides?: NPCUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nPC?: any;
    onSubmit?: (fields: NPCUpdateFormInputValues) => NPCUpdateFormInputValues;
    onSuccess?: (fields: NPCUpdateFormInputValues) => void;
    onError?: (fields: NPCUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NPCUpdateFormInputValues) => NPCUpdateFormInputValues;
    onValidate?: NPCUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NPCUpdateForm(props: NPCUpdateFormProps): React.ReactElement;
