import './SignIn.css'
const SignIn = () => {
    return(
        <>
            <div className='header-sign-in'>
                <div className="signIn-item">

                    <div className='password'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Your Email ...'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter Your Password ...'/>
                    </div>
                    <div className="submit">
                        <button>
                            Submit
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
export default SignIn