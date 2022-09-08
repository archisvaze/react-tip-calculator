import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main";

function App(props) {

   

    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;