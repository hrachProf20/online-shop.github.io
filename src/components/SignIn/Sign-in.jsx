import {useState} from "react";
import Home from "./Home";
import './SignIn.css'
import {useNavigate} from "react-router";
const SignIn = () => {
    // const [mail,setMail] = useState('')
    // const [pass,setPass] = useState('')
    // const [flag,setFlag] = useState(false);
    const [home,setHome] = useState(true);
    //
    // function handleLogin(e) {
    //   e.preventDefault()
    //     var myArraySignIn = {
    //             id:1,
    //             name:mail,
    //             pass:pass,
    //         }
    //
    //
    //     // let emaiLlog = localStorage.getItem("Email").replace(/"/g,"")
    //     // let passLog = localStorage.getItem("Password").replace(/"/g,"")
    //     if(!mail || !pass){
    //         setFlag(true)
    //         console.log("Empty")
    //     }
    //     else{
    //         setHome(!home)
    //         setFlag(false)
    //     }
    //     var JsonStringSignIn = JSON.stringify(myArraySignIn)
    //     localStorage.setItem("user",JsonStringSignIn);
    //     var storeDataSignIn = localStorage.getItem("user");
    //     var retrievedArray = JSON.parse(storeDataSignIn)
    //
    //
    //     if(!mail || !pass){
    //         setFlag(true)
    //     } else{
    //         setFlag(false)
    //     }
    //
    //  localStorage.getItem('Email',JSON.parse(mail));
    //  localStorage.getItem('Password',JSON.parse(pass))
    // }
    //

    //
    // const history = useNavigate();

    function handleClick () {
        setHome(!home)
    }

    const [inpval,setInpval] = useState({
        email:"",
        password:"",
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

        const getUserArr = localStorage.getItem("user")
        console.log(getUserArr)
        const {email,password} = inpval;
         if (email === ""){
            alert("email field is required")
        } else if (!email.includes("@")){
             alert("plz enter valid email addres")
         }
          else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5){
            alert("password length grater five ")
        } else {
            if (getUserArr && getUserArr.length) {
                const userData = JSON.parse(getUserArr)
                const userLogin = userData.filter((el,k)=> {
                    return el.email === email && el.password === password
                });
              if (userLogin.length === 0) {
                  alert("invalid drtails")
              } else {
                  console.log("user login succesfully")
                  localStorage.setItem("user_login",JSON.stringify(userLogin))
                  setHome(!home)
                  // history("/details")
              }

            }



        }
    }

    return(
        <>
            {home ? (
            <form action="" /*onSubmit={handleLogin} */ className='form-action'>
                <h3>Login</h3>
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
                <button type='submit' className='btn btn-dark btn-lg btn-block' onClick={addData} >Login</button>
                {/*{flag && (*/}
                {/*    <alert className='alert' color='primary' variant='danger'>*/}
                {/*        Please Fill Current Info*/}
                {/*    </alert>*/}
                {/*)}*/}
            </form>
            ):(
                <Home />
            )}
        </>
    )
}
export default SignIn




///How To Add Login Authentication to React Applications