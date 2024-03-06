import { useState, type FC } from "react";
import { AppLayout } from "../layouts/AppLayout";
import { Button, type ButtonColor } from "../components/Button";

export const ButtonPage: FC = () => {
  const [color, setColor] = useState<ButtonColor>("green");

  return (
    <AppLayout bullseye>
      <Button
        color={color}
        onClick={() => setColor(color === "green" ? "red" : "green")}
      >
        Нажми меня
      </Button>
    </AppLayout>
  );
};
