import React from "react";
import Table from "./table";

const students = [{
    student: 'Bruce Wayne',
    course: 'Criminal Justice',
    grade: 94
}, 
{
    student: 'Barry Allen',
    course: 'Forensic Science',
    grade: 98
}, 
{
    student: 'Clark Kent',
    course: 'Creative Writing',
    grade: 86
}];

function App() {
	return (
		<div className="container">
			<h1>Student Grade Table</h1>
			<Table data={students}/>
		</div>
	);
}

export default App;
