import React from "react";

export default props => {
	const tableRows = props.data.map(function(item, index) {
		return (
			<tr key={index}>
				<td>{item}</td>
			</tr>
		);
	});

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Lap</th>
				</tr>
			</thead>
			<tbody>{tableRows}</tbody>
		</table>
	);
};
