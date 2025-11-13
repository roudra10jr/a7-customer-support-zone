import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/NavBar/Navbar";

const fetchCustomers = async () => {
	const res = await fetch("/Customers.json");
	return res.json();
};

const customerPromise = fetchCustomers();

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Banner></Banner>
		</>
	);
}

export default App;
