import { createContext } from "react";

const UserContext = createContext ({
    email : "default@example.com",
    setEmail : () => { }
});

//this default value will override with whatever you have provided in the app.js provider

export default UserContext;