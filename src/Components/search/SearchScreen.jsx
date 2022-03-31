import React from 'react'
import { useForm } from '../hooks/useForm'

export const SearchScreen = () => {
  const formInitialState={searchText:''}
  const [formSearch, handleInputChange]=useForm(formInitialState)
  const {searchText}=formSearch
  const handleSearch=(e)=>{
    e.preventDefault()
    console.log(formSearch)
  }

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

      </div>
    </div>
  )
}
