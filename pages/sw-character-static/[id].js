import Character from '../../components/Character';

const SWCharacterStatic = ({character}) => {
  return <Character character={character} />
}

export default SWCharacterStatic

export async function getStaticProps({ params }) {
  const characterId = params.id || Math.ceil(Math.random() * 82)
  const res = await fetch(`https://swapi.dev/api/people/${characterId}`)
  const character = await res.json()

  return {
    props: {
      character
    },
  }
}

export async function getStaticPaths() {
  const params = []
  for (let id = 1; id <= 82; id++) {
    params.push({ params: { id: id.toString() }})
  }

  return {
    paths: [...params],
    fallback: false
  }
}