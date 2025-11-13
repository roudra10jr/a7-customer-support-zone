import React, { useEffect, useState } from "react";
import CustomerCard from "../CustomerCard/CustomerCard";

const Customers = ({
	handleCustomerTicketCount,
	setTaskStatusAdd,
	TaskStatusAdd,
	removeCustomerTicket,
}) => {
	const [customersData, setCustomersData] = useState([]);

	useEffect(() => {
		setCustomersData(removeCustomerTicket);
	}, [removeCustomerTicket]);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{customersData.map((customer) => (
				<CustomerCard
					key={customer.id}
					customer={customer}
					handleCustomerTicketCount={handleCustomerTicketCount}
					setTaskStatusAdd={setTaskStatusAdd}
					TaskStatusAdd={TaskStatusAdd}
				/>
			))}
		</div>
	);
};

export default Customers;
