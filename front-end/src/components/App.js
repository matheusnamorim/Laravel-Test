import GlobalStyles from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import EditAuthor from "./EditAuthor/EditAuthor";

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/editAuthor/:idAuthor" element={<EditAuthor />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}