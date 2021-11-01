import Character from '../../components/Character';

const swCharacterClient = ({ planet, nextPlanet }) => {
  return <Character character={planet} nextItem={nextPlanet} />
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://swapi.dev/api/planets`)
  const { results } = await res.json()
  let planet = null
  const leftPlanets = results.filter((result, idx) => {
    if (result.name.toLowerCase() == query.planet.toLowerCase()) {
      planet = result
      return false
    }

    return result
  })

  const nextPlanetId = Math.floor(Math.random() * leftPlanets.length)
  
  return {
    props: {
      planet,
      nextPlanet: leftPlanets[nextPlanetId].name
    },
  }
}

export default swCharacterClient