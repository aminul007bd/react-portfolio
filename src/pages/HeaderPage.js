import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const HeaderPage = (props) => {
	const { name, mobile, address, linkedin } = props.personalInformation
	return (
		<>
			<Row>
				<Col className="text-center">
					<p className="mb-0 "> {name}</p>
					<p className="mb-0"> {mobile}</p>
					<p className="mb-0"> {address}</p>
					<p className="mb-0"> {linkedin}</p>
				</Col>
			</Row>
		</>
	)
}
