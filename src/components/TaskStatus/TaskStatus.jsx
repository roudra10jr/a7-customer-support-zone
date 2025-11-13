import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ task, removeTaskCard }) => {
	const handleRemoved = () => {
		toast.success("Completed!");
		removeTaskCard(task);
	};

	return (
		<div className="space-y-2.5 my-3 p-4 rounded-2xl">
			<h1 className="font-medium text-[18px]">{task.title}</h1>
			<button
				onClick={handleRemoved}
				className="btn w-full bg-[#02A53B] text-white rounded-[5px]"
			>
				Complete
			</button>
		</div>
	);
};

export default TaskStatus;
