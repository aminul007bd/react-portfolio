import './App.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { HeaderPage } from './pages/HeaderPage'
import Row from 'react-bootstrap/Row'
import data from './data.json'

function App() {
	const [personalData] = data
	// console.log(personalData.personalInformation)
	return (
		<>
			<Container>
				<HeaderPage personalInformation={personalData.personalInformation} />
			</Container>
		</>
	)
}

export default App
