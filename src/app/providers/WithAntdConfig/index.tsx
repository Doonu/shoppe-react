import { antdTheme } from '@app/styles';
import { selectorThemeType, themePick } from '@entities/theme';
import { useAppSelector } from '@shared/hooks';
import { ConfigProvider } from 'antd';
import React, { FC, PropsWithChildren } from 'react';

const WithAntdConfig: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectorThemeType);

  return <ConfigProvider theme={antdTheme(themePick(theme))}>{children}</ConfigProvider>;
};

export default WithAntdConfig;
