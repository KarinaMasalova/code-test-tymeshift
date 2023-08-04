import { ReactNode } from "react";

import "./ErrorContainer.scss";

type TProps = {
  children: ReactNode;
};

export const ErrorContainer = ({ children }: TProps) => {
  return (
    <div className="error-container">
      <p className="error-message">Please reload the page or try again later</p>
      {children}
    </div>
  );
};
