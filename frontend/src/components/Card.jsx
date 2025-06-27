import React from 'react'

const Card = () => {
  return (
    <div className='h-screen w-screen'>
        <div className='h-80 m-5 w-60 flex flex-col'>
            <div className='h-40 bg-green-200 rounded-t-lg'>

            </div>
            <div className='h-40 pl-2 pt-2 mb-2 bg-green-500 rounded-b-lg flex flex-col'>
                <div>       
                    <p>Item 1</p>
                </div>
                <div>
                    <p>Description about Item 1</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        <p>
                            Total Price: 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
