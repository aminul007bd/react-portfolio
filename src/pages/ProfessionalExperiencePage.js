import React from 'react'

export const ProfessionalExperiencePage = (props) => {
	const experiences = props.professionalExperience

	return (
		<>
			{experiences.map((experience, index) => {
				const { companyName, from, to, role, responsibilities } = experience
				return (
					<div key={index}>
						<h6 className="mb-0">{companyName}</h6>
						<h6 className="mb-0">
							{from} - {to}
						</h6>
						<h6>{role}</h6>
						<ul>
							{responsibilities.map((tasks, index) => (
								<li key={index}>{tasks}</li>
							))}
						</ul>
					</div>
				)
			})}
		</>
	)
}
