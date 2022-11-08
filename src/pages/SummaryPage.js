import React from 'react'

export const SummaryPage = (props) => {
	const { title, details } = props.profileSummary

	return (
		<>
			<p className="mt-4">{title}</p>
			<ul>
				{details.map((detail, index) => (
					<li key={index}>{detail}</li>
				))}
			</ul>
		</>
	)
}
