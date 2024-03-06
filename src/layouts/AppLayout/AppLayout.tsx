import { type FC, type ReactNode } from "react";
import { Bullseye } from "./styled";
import { TopBar } from "../../components/TopBar";

export const AppLayout: FC<{ bullseye?: boolean; children: ReactNode }> = ({
  bullseye = false,
  children,
}) => (
  <div>
    <TopBar />
    {bullseye ? <Bullseye>{children}</Bullseye> : children}
  </div>
);
