import { ReactNode } from "react";

import "./Card.scss";

type TProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Card = ({ children, onClick }: TProps) => {
  return (
    <div className="card" onClick={onClick}>
      {children}
    </div>
  );
};
