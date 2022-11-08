import React from 'react'

export const CertificatePage = (props) => {
	return (
		<>
			<h5> Certificates: </h5>
			{props.certificate.map((certificate) => (
				<span className="badge bg-success m-2" key={certificate.title}>
					{certificate.title}
				</span>
			))}
		</>
	)
}
