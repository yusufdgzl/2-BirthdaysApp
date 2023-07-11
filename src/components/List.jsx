

function List({imgSrc,imgId,imgName,imgAge,buttonClick}){


    const imgStyle = 
    {width:"100px",
    height:"100px",
    borderRadius:"50px",
    margin:"30px",
    boxShadow: "1px 2px"}

    
    
    return(
        <>
                <div className='personImg'>
                <img 
                id={imgId}
                src={imgSrc} 
                style={imgStyle} />
                <div className='personInfo'>
                  <h4>{imgName}</h4>  
                  <p>{imgAge} Years</p>
                </div>
                <div className='deleteButton'>
                  <button onClick={buttonClick}>Delete</button>
                </div>
                
            </div> 
        </>
    )
}

export default List

