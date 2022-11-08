import './App.css'

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
		<>
			<Container>
				<HeaderPage personalInformation={personalData.personalInformation} />
				<SummaryPage profileSummary={personalData.profileSummary} />
				<ProfessionalExperiencePage
					professionalExperience={personalData.professionalExperience}
				/>
				<EducationPage education={personalData.education} />
				<CertificatePage certificate={personalData.certificate} />
			</Container>
		</>
	)
}

export default App
