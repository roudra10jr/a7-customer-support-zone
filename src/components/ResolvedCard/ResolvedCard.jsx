import React from "react";

const ResolvedCard = ({ task, handleRemoveResolved }) => {
	return (
		<div className="space-y-2.5 my-3 p-4 rounded-2xl bg-[#e6f8ea]">
			<h1 className="font-medium text-[18px]">{task.title}</h1>
			<div className="flex justify-between text-sm text-gray-600">
				<p className="text-[#02A53B] text-base font-semibold">
					✔ Completed
				</p>
				<p
					onClick={() => handleRemoveResolved(task)}
					className="cursor-pointer hover:text-red-500 text-base font-semibold"
				>
					Click to remove
				</p>
			</div>
		</div>
	);
};

export default ResolvedCard;
