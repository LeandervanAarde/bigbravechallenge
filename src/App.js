import logo from "./logo.svg";
import "./App.scss";
import CreateCharacter from "./Routes/CreateCharacter/CreateCharacter.Component";
import Home from "./Routes/Home/Home.component";
import { Route, Routes } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import StepOne from "./Components/FormStepOne/StepOne.component";
import FormStepTwo from "./Components/FormStepTwo/FormStepTwo.component";
import MyCharacter from "./Routes/MyCharacter/MyCharacter.Route";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<CreateCharacter />}>
          <Route index element={<StepOne />} />
          <Route path="/build/stepTwo" element={<FormStepTwo />} />
        </Route>
        <Route path="/MyCharacter" element={<MyCharacter />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
