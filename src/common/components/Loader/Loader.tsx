import { Spin } from "antd";

import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="spinner-container">
      <Spin className="spinner" size="large"></Spin>
    </div>
  );
};
