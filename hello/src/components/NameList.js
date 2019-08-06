import React from 'react'
import Child from './Child'

function  NameList(){
  const Person = [
    {
      index : 1,
      name : 'shubham',
      skill : 'React'
    },
    {
      index : 2,
      name : 'rohit',
      skill : 'Angular'
    },
    {
      index : 3,
      name : 'mohit',
      skill : 'VUE'
    }
  ]

  const names = Person.map(Person=> <Child key={Person.index} person={Person} />)
  return(
      <div>{names}</div>
  )
}

export default NameList
