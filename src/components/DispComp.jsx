export default function DispComp({displayData}){
    console.log("display component rendeing...");
    return(
        <>
        
        <h3>name:{displayData.name}</h3>
        <h3>email:{displayData.email}</h3>
        <h3>place:{displayData.place}</h3>
        <h3>pincode:{displayData.pincode}</h3>
        
        </>
    )
}