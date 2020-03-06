import React, { useState } from 'react';




const Box = ({custom_color}) =>{
    const divStyles = {
        backgroundColor: custom_color,
        width: '100px',
        height: '100px',
        display: 'inline-block',
        margin: '10px',
    }
    return(
        <div style={divStyles}>

        </div>
    )
}


const BoxGenerator = () => {
    const [state, setState] = useState({
        color: "",
        boxes: [],
    })

    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); 
        setState({
            boxes: state.boxes.concat(state.color), 
            color: "",
        })
    }


    return (
        <div>
            <h1>Color</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="color" onChange={onChangeHandler} />
                <input type="submit" value="Add" />
               
            </form>
            <div>
                {state.boxes.map((item, i) => (
                    // <div key={i} style={divStyles}> {item} </div>
                    <Box key={i} custom_color={item} />

                ))}
            </div>
{/*             
            <p>{state.color}</p>
            <p>{state.boxes}</p> */}
        </div>        
    )
}

export default BoxGenerator


