import React from 'react'

export const EducationPage = (props) => {
	return (
		<>
			{props.education.map((education, index) => {
				const { degree, university, course } = education
				return (
					<div key={index}>
						<h6 className="mb-0">{degree}</h6>
						<h6 className="mb-0">{university}</h6>
						<p>{course}</p>
					</div>
				)
			})}
		</>
	)
}
