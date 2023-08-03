import { ReactNode } from "react";

import "./Card.scss";

type TProps = {
  children: ReactNode;
};

export const Card = ({ children }: TProps) => {
  return <div className="card">{children}</div>;
};
