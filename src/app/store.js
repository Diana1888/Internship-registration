import { configureStore } from '@reduxjs/toolkit';
import { registrationApi } from '@/shared/api/registrationApi';

export const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(registrationApi.middleware),
});
