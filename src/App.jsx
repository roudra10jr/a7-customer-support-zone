// import { Suspense, useState } from "react";
// import "./App.css";
// import Customers from "./Components/Customers/Customers";
// import Banner from "./Components/Banner/Banner";
// import Footer from "./Components/Footer/footer";
// import Navbar from "./Components/Navbar/Navbar";
// import TaskStatus from "./Components/TaskStatus/TaskStatus";
// import ResolvedTask from "./Components/ResolvedTask/ResolvedTask";
// import { ToastContainer } from "react-toastify";

// // import { use } from 'react'
// // import { useFormState } from 'react-dom'

// const fetchCustomers = async () => {
// 	const res = await fetch("/Customers.json");
// 	return res.json();
// };

// const customerPromise = fetchCustomers();
// function App() {
// 	const [customerTicketCount, setCustomerTicketCount] = useState([]);
// 	const [TaskStatusAdd, setTaskStatusAdd] = useState([]);
// 	// console.log(TaskStatusAdd)
// 	const [RemoveCustomerTicket, setRemoveCustomerTicket] =
// 		useState(customerPromise);
// 	console.log(RemoveCustomerTicket);
// 	const [resolved, setResolved] = useState([]); // resolved list

// 	const removeTaskCard = (p) => {
// 		// console.log(p)
// 		const filteredData = TaskStatusAdd.filter((task) => task.id !== p.id);
// 		console.log(filteredData);
// 		setTaskStatusAdd(filteredData);
// 		setResolved([...resolved, p]);
// 		const removeCustomerTicket = p.filter((task) => task.id !== p.id);
// 		setRemoveCustomerTicket(removeCustomerTicket);
// 	};

// 	// const removeCustomerCard = (r) =>{
// 	//   console.log(r)
// 	//   const filteredDataCustomer =TaskStatusAdd.filter(task => task.id !== r.id)
// 	//   console.log(filteredDataCustomer)
// 	//   // setTaskStatusAdd(filteredDataCustomer)
// 	// }

// 	const handleCustomerTicketCount = (customer) => {
// 		// console.log("handleCustomerTicketd",customer)
// 		const newCustomerTicketCount = [...customerTicketCount, customer];
// 		setCustomerTicketCount(newCustomerTicketCount);
// 	};

// 	return (
// 		<>
// 			<Navbar></Navbar>
// 			<Banner
// 				resolved={resolved}
// 				TaskStatusAdd={TaskStatusAdd}
// 				handleCustomerTicketCount={handleCustomerTicketCount}
// 			></Banner>
// 			<div className="w-11/12 grid lg:grid-cols-12 gap-4 pb-15  max-w-[1200px] mx-auto ">
// 				<div className="col-span-9 ">
// 					<h1 className="font-semibold text-[18px] pb-3">
// 						Customer Ticket
// 					</h1>
// 					<Suspense>
// 						{" "}
// 						<Customers
// 							setRemoveCustomerTicket={setRemoveCustomerTicket}
// 							RemoveCustomerTicket={RemoveCustomerTicket}
// 							TaskStatusAdd={TaskStatusAdd}
// 							setTaskStatusAdd={setTaskStatusAdd}
// 							handleCustomerTicketCount={
// 								handleCustomerTicketCount
// 							}
// 							customerPromise={customerPromise}
// 						></Customers>
// 					</Suspense>
// 				</div>

// 				<div className="col-span-3 ">
// 					<div className="shadow-xl/30 rounded-2xl">
// 						<h1 className="font-semibold  text-[18px] pb-3">
// 							{" "}
// 							Task status{" "}
// 						</h1>

// 						{/* <TaskStatus TaskStatusAdd={TaskStatusAdd}></TaskStatus> */}
// 						{TaskStatusAdd.length === 0 ? (
// 							<p className="py-10 px-2 font-medium rounded-2xl shadow-xl/30 text-center ">
// 								Select a ticket to add to Task Status
// 							</p>
// 						) : (
// 							TaskStatusAdd.map((task) => (
// 								<TaskStatus
// 									setResolved={setResolved}
// 									removeTaskCard={removeTaskCard}
// 									askStatusAdd={TaskStatusAdd}
// 									key={task.id}
// 									task={task}
// 								></TaskStatus>
// 							))
// 						)}
// 					</div>
// 					<div>
// 						<ResolvedTask resolved={resolved}></ResolvedTask>
// 						{/* {
//                   TaskStatusAdd.map(taskResolve => <ResolvedTask taskResolve={taskResolve}></ResolvedTask>)
//                  }      */}
// 					</div>
// 				</div>
// 			</div>
// 			<Footer></Footer>
// 			<ToastContainer />
// 		</>
// 	);
// }

// export default App;

// method 2:
import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Customers from "./Components/Customers/Customers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import ResolvedTask from "./Components/ResolvedTask/ResolvedTask";
import { ToastContainer } from "react-toastify";

const fetchCustomers = async () => {
	const res = await fetch("/Customers.json");
	return res.json();
};

const customerPromise = fetchCustomers();

function App() {
	const [customerTicketCount, setCustomerTicketCount] = useState([]);
	const [TaskStatusAdd, setTaskStatusAdd] = useState([]);
	const [RemoveCustomerTicket, setRemoveCustomerTicket] = useState([]); // start empty
	const [resolved, setResolved] = useState([]);

	// Fetch customers once and populate RemoveCustomerTicket state
	useEffect(() => {
		customerPromise.then((data) => setRemoveCustomerTicket(data));
	}, []);

	// Move a task from TaskStatus to Resolved
	const removeTaskCard = (task) => {
		const filteredData = TaskStatusAdd.filter((t) => t.id !== task.id);
		setTaskStatusAdd(filteredData);
		setResolved([...resolved, task]);
	};

	// Remove a resolved task and also remove corresponding customer card
	const handleRemoveResolved = (task) => {
		setResolved(resolved.filter((t) => t.id !== task.id));
		setRemoveCustomerTicket(
			RemoveCustomerTicket.filter((c) => c.id !== task.id)
		);
	};

	const handleCustomerTicketCount = (customer) => {
		setCustomerTicketCount([...customerTicketCount, customer]);
	};

	return (
		<>
			<Navbar />
			<Banner
				resolved={resolved}
				TaskStatusAdd={TaskStatusAdd}
				handleCustomerTicketCount={handleCustomerTicketCount}
			/>
			<div className="w-11/12 grid lg:grid-cols-12 gap-4 pb-15 max-w-[1200px] mx-auto">
				<div className="col-span-9">
					<h1 className="font-semibold text-[18px] pb-3">
						Customer Ticket
					</h1>
					<Suspense>
						<Customers
							setTaskStatusAdd={setTaskStatusAdd}
							TaskStatusAdd={TaskStatusAdd}
							handleCustomerTicketCount={
								handleCustomerTicketCount
							}
							removeCustomerTicket={RemoveCustomerTicket}
						/>
					</Suspense>
				</div>

				<div className="col-span-3">
					<div className="shadow-xl/30 rounded-2xl">
						<h1 className="font-semibold text-[18px] pb-3">
							Task status
						</h1>
						{TaskStatusAdd.length === 0 ? (
							<p className="py-10 px-2 font-medium rounded-2xl shadow-xl/30 text-center">
								Select a ticket to add to Task Status
							</p>
						) : (
							TaskStatusAdd.map((task) => (
								<TaskStatus
									key={task.id}
									task={task}
									removeTaskCard={removeTaskCard}
								/>
							))
						)}
					</div>
					<ResolvedTask
						resolved={resolved}
						handleRemoveResolved={handleRemoveResolved}
					/>
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;
