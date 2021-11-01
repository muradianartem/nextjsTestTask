//server side render page
import Character from './components/Character';

const SWCharacterDynamic = ({character}) => {
  return <Character character={character} />
}

export async function getServerSideProps({ query }) {
  const characterId = query.id || Math.ceil(Math.random() * 82)
  const res = await fetch(`https://swapi.dev/api/people/${characterId}`)
  const character = await res.json()

  return {
    props: {
      character
    },
  }
}

export default SWCharacterDynamic
