import React, { useState } from 'react';
function Accordian({listData}) {
    const [clickedAccordian, setAccordian] = useState(null);

    const handleToggle = (index) =>{
        console.log( index);
        if(clickedAccordian === index){
            setAccordian(null);
        }
        else{
            setAccordian(index);
        }
    }
    return (
        <div>
            {
                listData?.map((data, index)=>{
            return (
                <div className='accordian'>
                <div className='header' onClick = {()=>handleToggle(index)}>
                <h4>user: {data.id} </h4>
                <button >{index === clickedAccordian ? '-' : '+'}</button>
                </div>
                {index === clickedAccordian && <p>{data.title} </p>}
               </div>
            )
        })
            }
        </div>
    );
}

export default Accordian;