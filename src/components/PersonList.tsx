import { HeroListype } from '../App';

type PersonListprops = {
    hero:HeroListype[]
}

export const PersonList = ({hero}:PersonListprops) => {
  return (
    <div>
      {hero.map(hero => (
        <p key={hero.id}>{hero.first},{hero.last}</p>
      ))}
    </div>
  )
}
