import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap'
import React from 'react'
function ContactPage() {
	return (
		<section id="contact" class="contact">
			<div class="container">
				<div class="section-title">
					<h2>Contact</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
					</p>
				</div>

				<div class="row aos-init aos-animate" data-aos="fade-in">
					<div class="col-lg-5 d-flex align-items-stretch">
						<div class="info">
							<div class="address">
								<h4>Location:</h4>
								<p>3039 Ne Overlook Dr</p>
							</div>

							<div class="email">
								<h4>Email:</h4>
								<p>info@example.com</p>
							</div>

							<div class="phone">
								<i class="bi bi-phone"></i>
								<h4>Call:</h4>
								<p>+1 5589 55488 55s</p>
							</div>

							<iframe
								title="address"
								src="https://www.google.com/maps/place/3039+NE+Overlook+Dr,+Hillsboro,+OR+97124/@45.544139,-122.8860377,17z/data=!3m1!4b1!4m6!3m5!1s0x54950f6185e0276d:0x7d38fe3fb470e8f4!8m2!3d45.544139!4d-122.8860377!16s%2Fg%2F11c5lqrfsx?entry=ttu"
								frameborder="0"
								style={{ border: 0, width: '100%', height: '290px' }}
								allowfullscreen=""
							></iframe>
						</div>
					</div>

					<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
						<div class="row">
							<div class="form-group col-md-6">
								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
									<Form.Control placeholder="Your Name" aria-label="Username" />
								</InputGroup>
							</div>
							<div class="form-group col-md-6">
								<InputGroup className="mb-3">
									<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
									<Form.Control
										placeholder="Your email"
										aria-label="Username"
									/>
								</InputGroup>
							</div>
						</div>
						<div class="form-group">
							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
								<Form.Control placeholder="Subject" aria-label="Username" />
							</InputGroup>
						</div>
						<div class="form-group">
							<label for="name">Message</label>
							<textarea
								class="form-control"
								name="message"
								rows="10"
								required=""
							></textarea>
						</div>
						<div class="my-3">
							<div class="loading">Loading</div>
							<div class="error-message"></div>
							<div class="sent-message">
								Your message has been sent. Thank you!
							</div>
						</div>
						<div class="text-center">
							<button type="submit">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
