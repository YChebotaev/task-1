import { type FC } from "react";
import { useLocation } from "react-router";
import { Root, Link } from "./styled";

export const TopBar: FC = () => {
  const location = useLocation();

  return (
    <Root>
      <Link to="/calendar" $active={location.pathname.startsWith("/calendar")}>
        Календарь
      </Link>
      <Link to="/button" $active={location.pathname.startsWith("/button")}>
        Кнопка
      </Link>
      <Link to="/form" $active={location.pathname.startsWith("/form")}>
        Форма
      </Link>
    </Root>
  );
};
