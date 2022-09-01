import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'

function App() 
{
  const[showButton,setShowButton]=useState(true)
  const[showMessage,setShowMessage]=useState(false)

  return (
    <>
      { showButton &&
        <button className='block px-[1rem] uppercase py-[.8rem] rounded-[.5rem] text-white font-bold bg-green-700'
         onClick={()=> setShowMessage(true)}
        >
          press me
        </button>
      }
      <CSSTransition
       in={showMessage}
       unmountOnExit
       timeout={200}
       classNames='popup'
       onEnter={()=>setShowButton(false)}
       onExited={()=>setShowButton(true)}
      >
        <PopUp lol={setShowMessage}/>
      </CSSTransition>
    </>
  )
}

function PopUp({lol}) 
{
  return (
  <div className='flex flex-col items-center w-[70rem] bg-slate-700 rounded-[.5rem] max-w-[100%] my-0 mx-auto p-[3rem]'>
      <h1 className='font-bold text-center block uppercase mb-[2rem]'>
         important message
      </h1>
      <p className='text-center block mb-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque recusandae perferendis laudantium, necessitatibus unde quaerat autem maiores voluptate magnam officia consequatur voluptatem veritatis quod modi vero ut itaque tempore!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci debitis dolorem ab! Ut, suscipit voluptatibus deleniti quas unde, quasi perspiciatis consequatur tenetur deserunt cum ad commodi nesciunt repellat nihil.
      </p>
      <button className='inline-block px-[1rem] uppercase py-[.8rem] rounded-[.5rem] text-white font-bold bg-blue-500'
       onClick={()=>lol(false)}
      >
          back
      </button>
  </div>
  );
}

export default App

  