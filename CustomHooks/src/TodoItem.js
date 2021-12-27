import React from "react";

const TodoItem = (props) => {

console.log(props)
	return (
		<>
			{/* {list.map((task) => {
				return (
					<div className='todo-item' key={task.id}>
						<input type='checkbox' checked={task.completed}/>
						<p>{task.text}</p>
					</div>
				);
			})} */}
		</>
	);
};

export default TodoItem;
