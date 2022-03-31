import React, {useMemo} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import { HeroList } from './HeroList'

export const HeroeScreen = () => {
  const {heroeId}= useParams()
  const navigate=useNavigate()
   

  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  const imagePath= `/assets/${hero.id}.jpg`

  if(!hero){
    return <Navigate to='/'/>
  }

  const handleReturn =()=>{
    navigate(-1)
  }
  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__bounceInLeft'>
        <img src={imagePath} alt={hero.superhero} className='img-thumbnail'/>
  
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className='mt-5'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-primary' onClick={handleReturn}>
          Return
        </button>
      </div>  
    </div>
  )
}
