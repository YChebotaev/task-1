import { type FC } from "react";
import { AppLayout } from "../layouts/AppLayout";
import { Calendar } from "../components/Calendar";

export const CalendarPage: FC = () => (
  <AppLayout>
    <Calendar />
  </AppLayout>
);
