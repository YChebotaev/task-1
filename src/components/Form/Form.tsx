import { type FC } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Root, Input, Button, StyledErrorMessage } from "./styled";

export type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Form: FC<{ onSubmit(values: FormValues): void }> = ({
  onSubmit,
}) => {
  const {
    formState: { errors },
    getValues,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("username", {
          required: "Имя пользователя обязательно для заполнения",
        })}
        placeholder="Имя пользователя"
      />
      <ErrorMessage
        as={<StyledErrorMessage />}
        errors={errors}
        name="username"
      />

      <Input
        type="email"
        {...register("email", {
          required: "Емейл обязателен для заполнения",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Емейл не валидный. Введите валидный емейл",
          },
        })}
        placeholder="Емейл"
      />
      <ErrorMessage as={<StyledErrorMessage />} errors={errors} name="email" />

      <Input
        {...register("password", {
          required: "Пароль обязателен для заполнения",
          minLength: {
            value: 8,
            message: "Пароль должен состоять минимум из 8 символов",
          },
        })}
        type="password"
        placeholder="Пароль"
      />
      <ErrorMessage
        as={<StyledErrorMessage />}
        errors={errors}
        name="password"
      />

      <Input
        {...register("confirmPassword", {
          required: "Подтверждение пароля обязательно",
          validate(value) {
            if (value !== getValues("password")) {
              return "Подтверждение должно совпадать с паролем";
            }
          },
        })}
        type="password"
        placeholder="Подтверждение пароля"
      />
      <ErrorMessage
        as={<StyledErrorMessage />}
        errors={errors}
        name="confirmPassword"
      />

      <Button>Зарегистрироваться</Button>
    </Root>
  );
};
