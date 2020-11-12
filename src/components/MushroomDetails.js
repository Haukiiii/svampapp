import React from 'react'
import { Link, useParams } from 'react-router-dom'
import mushroom from '../MushroomDatabase.json'
import backButton from '../bilder/backButton.svg'
import logo from '../bilder/svamp.svg'

function getMushroomByName (mushroomName) {
  const found = mushroom.find(element => element.swedishName === mushroomName)
  // console.log(found)
  return (
    found
  )
}
function MushroomDetails () {
  const mushroomdata = getMushroomByName(useParams().swedishName)

  let colorArray = mushroomdata.color.map(x => x)

  if (colorArray.length === 1) {
    colorArray = colorArray[0]
  } else if (colorArray.length === 2) {
    colorArray = colorArray[0] + ', ' + colorArray[1]
  } else if (colorArray.length === 3) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2]
  } else if (colorArray.length === 4) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ', ' + colorArray[3]
  } else if (colorArray.length === 5) {
    colorArray = colorArray[0] + ', ' + colorArray[1] + ', ' + colorArray[2] + ', ' + colorArray[3] + ', ' + colorArray[4]
  }

  return (
    <div>
      <div className='searchBar1'>
        <Link to='/search'>
          <img className='backButton' src={backButton} alt='backButton' />
        </Link>
        <Link to='/search'>
          <input className='searchBarTop' type='text' placeholder='Sök efter svamp' name='title' />
        </Link>
      </div>
      <div className='mushroomDetails'>
        <div className='Info'>
          <div className='leftSida3'>
            <div className='mushroomPicture'>
              <img className='picture' src={logo} alt='logo' />
            </div>
          </div>
          <div className='rightSida3'>
            <div className='mushroomName'>
              <h4>{mushroomdata.swedishName} </h4>
              <h4>Latin: {mushroomdata.scientificName} </h4>
              <h4>{mushroomdata.edibilityValue} </h4>
            </div>
          </div>
        </div>
        <div className='mushroomDescription'>
          <h4 className='shortDescription'>Kort beskrivning</h4>
          <p className='shortDescription'>Familj: {mushroomdata.nonScGroupValue}</p>
          <p className='shortDescription'>Färg: {colorArray}</p>
          <p className='shortDescription'>Växtplats: {mushroomdata.vegetation}</p>
        </div>
        <div className='mushroomDescription'>
          <h4 className='shortDescription'>Beskrivning</h4>
          <p className='shortDescription' dangerouslySetInnerHTML={{ __html: mushroomdata.description }} />
        </div>
      </div>
    </div>
  )
}

export default MushroomDetails
// <Link to='/search'>back</Link>
