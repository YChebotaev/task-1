import { type FC } from "react";
import { type FormValues } from "../Form";
import { Root, Field, FieldLabel, FieldValue } from "./styled";

export const FormDisplay: FC<{ values: FormValues }> = ({ values }) => {
  return (
    <Root>
      <Field>
        <FieldLabel>Username:</FieldLabel>
        <FieldValue>{values.username}</FieldValue>
      </Field>
      <Field>
        <FieldLabel>Email:</FieldLabel>
        <FieldValue>{values.email}</FieldValue>
      </Field>
      <Field>
        <FieldLabel>Password:</FieldLabel>
        <FieldValue>********</FieldValue>
      </Field>
    </Root>
  );
};
