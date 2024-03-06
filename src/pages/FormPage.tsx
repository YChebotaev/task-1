import { useState, type FC } from "react";
import { AppLayout } from "../layouts/AppLayout";
import { Form, FormValues } from "../components/Form";
import { FormDisplay } from "../components/FormDisplay";

export const FormPage: FC = () => {
  const [values, setValues] = useState<FormValues | null>(null);

  return (
    <AppLayout bullseye>
      {values == null && <Form onSubmit={setValues} />}
      {values != null && <FormDisplay values={values} />}
    </AppLayout>
  );
};
