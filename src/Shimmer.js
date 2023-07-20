const Shimmer  = () => {
    return (
       <div className="card-container">
        {
            Array(15).fill("").map( (e, index) => (
                <div key = {index} className="shimmer-card"></div>
            ))
        }
       </div>
    )
}

export default Shimmer