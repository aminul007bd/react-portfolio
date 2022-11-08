import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const HeaderPage = (props) => {
	const { name, mobile, address, linkedin } = props.personalInformation
	console.log(name)
	return (
		<>
			<Row>
				<Col>
					<h1> {name}</h1>
					<h1> {mobile}</h1>
					<h1> {address}</h1>
					<h1> {linkedin}</h1>
				</Col>
			</Row>
		</>
	)
}
