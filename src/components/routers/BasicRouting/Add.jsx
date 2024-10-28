function Add(){

    return(
    <>
    <h1>ADD USER</h1>

    <form >
        <input type="text" placeholder='Name' />
        <input type="number" placeholder='Number' />
        <input type="password" placeholder='Password' />  <br />    <br />
        <button type="submit" style={{borderRadius:"20px",backgroundColor:"green", height:"30px", width:"100px"}}>ADD</button>

    </form>
    </>
    )
}

export default Add;