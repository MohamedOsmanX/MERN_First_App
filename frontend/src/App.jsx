import { Box } from "@chakra-ui/react"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/createPage"
import Navbar from "./component/Navbar"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />

      </Routes>
    </Box>
  )
}

export default App
