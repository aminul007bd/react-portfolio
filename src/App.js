import './App.css'

import * as Icon from 'react-bootstrap-icons'

import AboutPage from './pages/AboutPage'
import { CertificatePage } from './pages/CertificatePage'
import Container from 'react-bootstrap/Container'
import { EducationPage } from './pages/EducationPage'
import { HeaderPage } from './pages/HeaderPage'
import { ProfessionalExperiencePage } from './pages/ProfessionalExperiencePage'
import { SummaryPage } from './pages/SummaryPage'
import data from './data.json'

function App() {
	const [personalData] = data
	return (
		<main id="main">
			<Container>
				<HeaderPage personalInformation={personalData.personalInformation} />
				<AboutPage />
				<SummaryPage profileSummary={personalData.profileSummary} />
				<ProfessionalExperiencePage
					professionalExperience={personalData.professionalExperience}
				/>
				<EducationPage education={personalData.education} />
				<CertificatePage certificate={personalData.certificate} />
			</Container>
		</main>
	)
}

export default App
