import GlobalStyles from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import EditAuthor from "./EditAuthor/EditAuthor";
import RegisterAuthor from "./RegisterAuthor/RegisterAuthor";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/editAuthor/:idAuthor" element={<EditAuthor />}/>
					<Route path="/registerAuthor" element={<RegisterAuthor />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}