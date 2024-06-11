import React from 'react'
import SwitchTab from '../../components/SwitchTabs/SwitchTab'
import Carousel from '../../components/Carousel/Carousel'

const Trending = () => {
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className='trending lg:px-28 md:px-20 py-2 px-8'>
        <div className='flex justify-between'>
            <span className='text-2xl font-medium'>Trending</span>
            <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange}/>
        </div>
        <Carousel />
    </div>
  )
}

export default Trending