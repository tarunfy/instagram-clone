import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseContext } from "./context/firebase";

ReactDOM.render(
  <firebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </firebaseContext.Provider>,
  document.getElementById("root")
);

//client side rendered app: built on react(create-react-app)
// -> database: firebase,
// -> react-loading-skeleton,
// -> Styles: tailwaing CSS

// architecture(folder structure)
//src
// -> components,
// -> constants,
// -> context,
// -> helpers,
// -> hooks,
// -> pages,
// -> lib( firebase going to live in here ),
// -> services( firebase functions in here ),
// -> styles(tailwind's folder(app/tailwind))
