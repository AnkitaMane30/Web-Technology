function Student({data}){
    return(
        <>
        <ul>
            <li>
                <h3>{data.name}</h3>
            </li>
            <li>
                <h3>{data.age}</h3>
            </li>
            <li>
                <h3>{data.course}</h3>
            </li>
        </ul>
        </>
    )
}

export default Student;