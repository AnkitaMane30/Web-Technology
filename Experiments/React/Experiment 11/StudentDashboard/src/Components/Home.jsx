function Home(){

    return(
        <>
        <div style={styles.container}>
            <div>
                <h2>Welcome to student Dashboard</h2>
                <p>We can add view student Here</p>
            </div> 
        </div>      
        </>
    )
}

const styles = {
    container : {
        height : "80vh",
        display : "flex",
        justifyContent : "center",
        padding : "200px",
        //alignItems : "center",
        textAlign : "center",
        color : "#1c64b1",
        backgroundColor: "#e6f2ff"
    },
    h2 : {
        color : "black"
    }
};

export default Home;