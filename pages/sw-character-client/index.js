import { useEffect, useState } from 'react';
import Character from '../../components/Character';

const SWCharacterClient = (props) => {
  const [characterId, setCharacterId] = useState(null)
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if (props.id) {
      setCharacterId(props.id)
    } else {
      setCharacterId(Math.floor(Math.random() * 82))
    }
  }, [])

  useEffect(() => {
  if (characterId) {
      fetch(`https://swapi.dev/api/people/${characterId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data)
          setCharacter(data);
        });
    }
  }, [characterId])

  return <Character character={character} />
}

SWCharacterClient.getInitialProps = ({ query }) => {
  const { id } = query

  return { id }
}

export default SWCharacterClient