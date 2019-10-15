import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

import CoursesList from "./CoursesList";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CoursesList/>
    </Provider>
  )
}

export default App;
