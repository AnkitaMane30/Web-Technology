function Student({data}){
    return(
        <>
        <ul>
            <p><h3>{data.name}</h3></p>
            <p><h3>{data.age}</h3></p>
            <p><h3>{data.course}</h3></p>
        </ul>
        </>
    )
}

export default Student;