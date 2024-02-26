import { useState } from 'react';
import Banner from './Components/Banner';
import CardForm from './Components/CardForm';
import Team from './Components/Team';

function App() {

  const teams = [
    {
      cardName: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      cardName: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      cardName: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      cardName: 'UX e Design',
      primaryColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      cardName: 'Mobile',
      primaryColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      cardName: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF',
    } 
  ]

  const [registerCard, setRegisterCard] = useState([])

  const handleNewCardRegister = (card) => {
    // debugger
    setRegisterCard([...registerCard, card])
  }

  return (
    <div className="App">
      <Banner/>
      <CardForm teams={teams.map(team => team.cardName)} handleCardRegister={handleNewCardRegister} />
      {teams.map(team =>  <Team  
        key={team.cardName} 
        name={team.cardName} 
        primaryColor={team.primaryColor} 
        secondColor={team.secondColor} 
        registers={registerCard.filter(rc => rc.team === team.cardName)}
      />)}
     
    </div>
  );
}

export default App;
