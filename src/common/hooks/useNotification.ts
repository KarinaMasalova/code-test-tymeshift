import React, { useCallback } from "react";
import { notification } from "antd";

export type NotificationConfig = {
  message: string;
  description: string;
  icon?: React.ReactNode;
};

export const useNotification = (config: NotificationConfig) => {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = useCallback((): void => {
    api.open(config);
  }, [api, config]);

  return { showNotification, contextHolder };
};
