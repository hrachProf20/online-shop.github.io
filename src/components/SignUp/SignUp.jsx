import './SignUp.css'
import {useEffect, useState} from "react";
import SignIn from "../SignIn/Sign-in";
import {NavLink} from "react-router-dom";
import userData from "../../common/header/Menu/userData";
const SignUp = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [phone, setPhone] = useState('');
    const [flag, setFlag] = useState(false)
    const [signIn, setSignIn] = useState(true)

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     var myArraySignIn = [
    //         {
    //             id: 0,
    //             name: name,
    //             pass: password,
    //             phone: phone,
    //             email: email
    //         }
    //     ]
    //
    //

    //         var JsonStringSignIn = JSON.stringify(myArraySignIn)
    //         localStorage.setItem("Users", JsonStringSignIn);
    //         var storeDataSignIn = localStorage.getItem("Users");
    //         var retrievedArray = JSON.parse(storeDataSignIn)
    //
    //     }
    // }
    //


    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
    })
    const [data,setData] = useState([])
    console.log(inpval)

    const getData = (e) => {
      const {value,name} = e.target;


      setInpval(() => {
          return{
              ...inpval,
              [name]:value,
          }
      })
    }

    const addData = (e) => {
        e.preventDefault();
        const {name,email,phone,password} = inpval;

        if(name === ""){
            alert("name field is required")
        } else if (email === ""){
            alert("email field is required")
        } else if (!email.includes("@")){
            alert("plz enter valid email addres")
        } else if (phone === ""){
            alert("phone field is required")
        } else if (phone.length <=8){
            alert('phone length grater five ')
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5){
            alert("password length grater five ")
        } else {
            console.log("data succesfully")
            localStorage.setItem("user",JSON.stringify([...data,inpval]))
        }


    }
    function handleClick() {
        setSignIn(!signIn)
    }


            return (
                <>
                    {signIn ? (
                        <form action="" className='form-register'  onSubmit={addData}>
                             <h1>Registration</h1>
                             <div className='form-group'>
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter Full Name'
                                    name='name'
                                    onChange={getData}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="">Email</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter  Email'
                                    name='email'
                                    onChange={getData}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    className='form-control'
                                    placeholder='Enter  password'
                                    name='password'
                                    onChange={getData}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="">Phone no.</label>
                                <input
                                    type="phone"
                                    className='form-control'
                                    placeholder='Enter contact no'
                                    name='phone'
                                    onChange={getData}
                                />
                            </div>

                            <button type='submit' className='btn btn-dark btn-lg btn-block' onClick={addData}>Register
                            </button>

                            <p onClick={handleClick}>Alreay registered {" "} Login in?</p>
                            {flag && (
                                <alert className='alert' color='primary' variant='danger'>
                                    Please Fill Every Field
                                </alert>
                            )}
                        </form>
                    ) : (
                        <SignIn/>
                    )}
                </>
            )
        }

export default SignUp