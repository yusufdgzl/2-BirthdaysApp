import { useState } from 'react'
import './App.css'
import Data from './components/Data'
import List from './components/List'

function App() {
  
  

  const [people, setPeople] = useState(Data)

  function clearHandler(e){
    setPeople([])
  }

  function deleteHandler(id){
    setPeople(people.filter((item,index)=> id !== index
       
    ))
  }

      // 4. kişiden silmeye başlayıp sırayla devam edince sıkıntı çıkmıyor/ Birinciden silmeye başlayınca sorun çıkarıyor !  
  
    
  

  return (
    <>
      <div className='container'>
        <div className='list'>
        <h2>{people.length} Birthdays Today...</h2>     
        
         {
         people.map((item,index)=> <List 
         key={index}
         imgId={item.id}
         imgAge={item.age}
         imgSrc={item.src}
         imgName={item.name}
         buttonClick={()=>deleteHandler(index)}/>)
         }

         <button className='allClearButton' onClick={()=>clearHandler()}>All Clear</button>
         
        </div>
      </div>
    </>
  )
}

export default App
