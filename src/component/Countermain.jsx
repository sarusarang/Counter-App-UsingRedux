import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset } from '../redux/slice'

function Countermain() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (

    <>

    <div className='w-100  justify-content-center d-flex align-items-center' style={{height:'100vh'}}>

        <div className='border w-50 border-light p-3'>
            <h1 className='text-white text-center'>Counter</h1>
            <h2 className='text-warning text-center'>{count}</h2>

            <div className='mt-3 d-flex justify-content-between'>

              <button  className='btn btn-success' onClick={()=>{dispatch(increase())}}>Increase</button>
              <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
              <button className='btn btn-danger' onClick={()=>{dispatch(decrease())}} >Decrease</button>


            </div>
        </div>


    </div>
    
    
    </>

  )
}

export default Countermain