import { useState } from "react"
import axios from "axios"
import { Toast } from "react-toastify/dist/components"




function Register(){

    var [values, setValues] = useState({

        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    function handleInputs(e){
      console.log(e.target.name)
      setValues({...values , [e.target.name] : e.target.value})
    }

    const handleSubmit = ()=> {
      e.preventDefault()


      var n_reg = /^[6-9]\d(9)$/
      var e_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if(values.name == ""){
        alert("Please Enter Name")
      }else if(!e_reg.test(values.email)){
        alert("Enter Valid Email")
      }
      else if(!n_reg.test(values.mobile)){
        alert("Enter Valid Mobile")
      }
      else if(values.password == ""){
        alert("Enter Password")
      }
      else{
        axios.post('http://localhost:9091/register',  values).then((res)=>{
          console.log(res)
        }).catch((err)=> {
          console.log(err)
        })
      }

    }
    


    return (
        <div style={{display: "flex", width: "80%" , margin: 'auto', justifyContent: "center"}}>
        <htmlForm>
  <div className="mb-3" >
    <label htmlFor="name" className="htmlForm-label">Name</label>
    <input type="name" onChange={handleInputs} name="name" className="htmlForm-control" id="name"/>
    </div>
  <div className="mb-3" >
    <label htmlFor="emailid" className="htmlForm-label">Email address</label>
    <input type="email"  onChange= {handleInputs} name="email" className="htmlForm-control" id="emailid" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" >
    <label htmlFor="contact" className="htmlForm-label">Contact</label>
    <input type="contact" onChange={handleInputs} name="mobile" className="htmlForm-control" id="contact"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
    <input type="password" onChange={handleInputs} name="password" className="htmlForm-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={(e)=>(handleSubmit(e))} className="btn btn-primary">Submit</button>
</htmlForm>
</div>
    )
}

export default Register