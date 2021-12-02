import { MONTHS } from "../utils/constants";

export const Month = ({ mid, children }) => {
  return (
    <div className="months" id={MONTHS[mid]}>
      {children}
    </div>
  );
};
