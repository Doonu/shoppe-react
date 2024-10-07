import React, { FC, PropsWithChildren } from 'react';

import { persistor } from '@app/store';
import { PersistGate } from 'redux-persist/integration/react';

const WithPersist: FC<PropsWithChildren> = ({ children }) => (
  <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>
);

export default WithPersist;
