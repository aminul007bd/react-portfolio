import * as Icon from 'react-bootstrap-icons'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const HeaderPage = (props) => {
	const { name, mobile, address, linkedin } = props.personalInformation
	return (
		<>
			{/* <Row>
				<Col classNameName="text-center">
					<p classNameName="mb-0 "> {name}</p>
					<p classNameName="mb-0"> {mobile}</p>
					<p classNameName="mb-0"> {address}</p>
					<p classNameName="mb-0"> {linkedin}</p>
				</Col>
			</Row> */}
			<header id="header">
				<div className="d-flex flex-column">
					<div className="profile">
						<Image src="/img/profile-img.jpg" roundedCircle />
						<h1 className="text-light">
							<a href="index.html">{name}</a>
						</h1>
						<div className="social-links text-center mt-3">
							<Icon.Twitter />

							<Icon.Facebook />

							<Icon.Github />

							<Icon.Linkedin size={20} />
						</div>
					</div>

					<nav id="navbar" className="nav-menu navbar">
						<ul>
							<li>
								<a href="#hero" className="nav-link scrollto active">
									<Icon.House />
									<span>Home</span>
								</a>
							</li>
							<li>
								<a href="#about" className="nav-link scrollto">
									<Icon.Person /> <span>About</span>
								</a>
							</li>
							<li>
								<a href="#resume" className="nav-link scrollto">
									<Icon.File />
									<span>Resume</span>
								</a>
							</li>
							<li>
								<a href="#portfolio" className="nav-link scrollto">
									<Icon.FileEarmarkArrowUpFill /> <span>Portfolio</span>
								</a>
							</li>
							<li>
								<a href="#services" className="nav-link scrollto">
									<Icon.Grid3x3 /> <span>Services</span>
								</a>
							</li>
							<li>
								<a href="#contact" className="nav-link scrollto">
									<Icon.Geo /> <span>Contact</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}
