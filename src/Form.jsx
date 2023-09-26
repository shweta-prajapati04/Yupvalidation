import React, { useState } from 'react'
import Error from './Component/Error';

const Form = () => {


    let [name, setName] = useState("");
    let [number, setNumber] = useState("");
    let [password, setPassword] = useState("");
    let[email,setEmail]=useState("")
    let [confpassword, setConfirmpassword] = useState("");

    let regEx=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g

    const handleSubmit = (e) => {
        e.preventDefault();


    }
    const onBlur=()=>{
       
        if(!regEx.test(email)&& email !=="")
        alert("invalid")
    }
    
    return (
        <div>
            <center>

                <div style={{ width: "500px" }}>
                    <h4>Form</h4>
                    <form onSubmit={handleSubmit}>
                        <div>
                    
                            <input required className='form-control' type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}  ></input>
                            {name.length <=2 && name.length>0 ? <Error val="Name should be more than 2 character" />:null}
                            <br></br>
                            <input required className='form-control' type="number" value={number} placeholder='Your Mobile No' onChange={(e) => setNumber(e.target.value)} ></input>
                            {number.length >10 && number.length>0 ? <Error val="Mobile No should be 10 digit" />:null}
                            <br></br>
                            <input required  className='form-control' type="text" value={password} placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} ></input>
                            <br></br>
                            <input required className='form-control' type="text" placeholder='Your Email' 
                             value={email} onChange={(e) => setEmail(e.target.value)}  ></input>
                             {!regEx.test(email)&& email!==""?<Error val="invalid Email" />:null}
                            <br></br>
                            <input required  className='form-control' type="text" value={confpassword} placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)} ></input>
                            {confpassword!==password && confpassword!=="" ?  <Error val="Password and Confirm Password Must be same" />:null}
                            <br></br>
                            <button className='btn btn-dark' type="submit" colorScheme='orange'>Submit</button>
                        </div>

                    </form>
                </div>
            </center>
        </div>

    )
}

export default Form