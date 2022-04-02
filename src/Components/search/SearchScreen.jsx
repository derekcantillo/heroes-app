import React, {useMemo}  from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroeByName } from '../../selectors/getHeroeByName'
import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'

export const SearchScreen = () => {
  
  
  const navigate=useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)



  const [formValues, handleInputChange]=useForm({
    searchText:q,})

    const {searchText}=formValues

  const handleSearch=(e)=>{
    e.preventDefault()
    console.log(searchText)

    navigate(`?q=${searchText}`)
    
      
  }

  const heroesFileted=useMemo(()=>getHeroeByName(q), [q])

  return (
    <div>
      <h1>Searches</h1>
      <hr/>

      <div className='row'>
        <div className='col-5'>
            <h4>Search</h4>
            <hr/>

            <form onSubmit={handleSearch}>
              <input
               type='text'
               placeholder='Search a hero'
               className='form-control'
               name='searchText'
               autoComplete='off'
               value={searchText}
               onChange={handleInputChange}
              />

              <button className='btn btn-outline-primary mt-1 btn-block' 
                      type='submit'
                      onClick={handleSearch}>
                Search...
              </button>
            </form>


        </div> 
        <div className='col-7'>
          <h4>Results</h4>
          <hr/>

          {
            (q=='') ? (
              <div className='alert alert-info'>Busque un héroe para mostrar resultados...</div>
            ):(heroesFileted.length===0) && <div className='alert alert-danger'>No hay resultados para {q}</div>
          }

          {
            heroesFileted.map(hero=>(
              <HeroCard key={hero.id}
              {...hero}
              />
            ))
          }

        </div>

      </div>
    </div>
  )
}
