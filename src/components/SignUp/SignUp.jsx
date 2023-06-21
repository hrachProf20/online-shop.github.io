import './SignUp.css'

const SignUp = () => {
    return(
        <>
            <div className='header-sign-in'>
                <div className="signIn-item">
                    <div className='password'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Your Name ...'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter Your Last Name ...'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Your Email ...'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter Your Password ...'/>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Number</label>
                        <input type="text" placeholder='Enter Your Number ...'/>
                    </div>

                    {/*<div className='password'>*/}
                    {/*    <label htmlFor="">face</label>*/}
                    {/*    <input type="file" placeholder='Enter Your Number ...'/>*/}
                    {/*</div>*/}
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

export default SignUp