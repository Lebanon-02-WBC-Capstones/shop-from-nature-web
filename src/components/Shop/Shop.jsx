import React from 'react'

const Shop = () => {
    return (
        <div>
            <h1 className="text-5xl text-olivegreen font-regular ml-64">Save The World!</h1>
            
            <ul className="flex justify-end">
                <div className="flex flex-col mr-8">
                <li className="text-3xl font-regular"><span  className="text-red">R</span>euse</li>
                <li className="text-3xl font-regular"><span  className="text-grey">R</span>educe</li>
                <li className="text-3xl font-regular"><span  className="text-olivegreen">R</span>ecycle</li>

                </div>
            </ul>
            <div className="ml-60">
                <h1 className="text-5xl text-grey font-regular ml-96 m-16">Shop</h1>
            </div>
        </div>
    )
}

export default Shop
