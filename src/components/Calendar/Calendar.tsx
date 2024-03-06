import { useState, type FC } from "react";
import {
  Calendar as CalendarBase,
  CalendarControls,
} from "react-yearly-calendar";
import { Root } from "./styled";
import "./style.css";

const now = new Date()

export const Calendar: FC = () => {

  const [year, setYear] = useState(now.getFullYear());

  return (
    <Root>
      <CalendarControls
        year={year}
        showTodayButton={false}
        onNextYear={() => setYear(year + 1)}
        onPrevYear={() => setYear(year - 1)}
      />
      <CalendarBase year={year} />
    </Root>
  );
};

export default Calendar;
