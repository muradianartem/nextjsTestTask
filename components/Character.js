import Link from 'next/link'

const Character = ({ character, nextItem }) => {

  const renderCharacter = () => {
    if (character) {
      const properties = Object.keys(character)
      return (
        <div className="table-wrapper">
          <h1 className='table-header'>
            {character.name}
          </h1>
          {properties.map((prop, idx) => (
            <div key={idx} className="table-item">
              <span>{prop.replace('_', ' ')}</span>
              <div>{character[prop]}</div>
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div>
      {renderCharacter()}
      <div className="next-item-link">
        {nextItem && (
          <Link href={`/planets/${nextItem}`}>
            <a>next planet {nextItem}</a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Character