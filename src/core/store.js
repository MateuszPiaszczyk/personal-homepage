import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import personalHomepageSlice from "../features/personalHomepageSlice";
import themeSlice from "../features/personalHomepage/Portfolio/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageSlice,
    theme: themeSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
