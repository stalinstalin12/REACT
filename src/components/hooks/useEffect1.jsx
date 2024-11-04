import { Component, useEffect,useState } from "react";
import './useEffect.css'
export default function UseEffectComponent1(){
    console.log("Component has been rendered");
    const [datas,setDatas]=useState(null);
    useEffect(()=>{
        function fetchData(){
            fetch('https://jsonplaceholder.typicode.com/users').then(async(datas)=>{
                console.log("datas",datas);
                let parsed_datas=await datas.json();
                console.log(parsed_datas);
                setDatas(parsed_datas);

            })
        }
        fetchData();
    },[]);


    return(
        <>
        {
            datas?
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data)=>{
                            return(
                                <tr>
                                    <td>${data.name}</td>
                                    <td>${data.username}</td>
                                    <td>${data.email}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>: <h1>Loading...</h1>
        }
        </>
    )


}