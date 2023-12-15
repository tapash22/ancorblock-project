import { useState } from "react"
import icon from '../assets/icon-image/paper1.svg'

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleLogin = () => {
        console.log('comming soon ')
    }

    const goSignUp = ()=>{
        setShow(true);
    }
    const goSignIn = ()=>{
        setShow(false);
    }

    return (
        <div className="w-full h-full block">

            {
                show ? (
                    <div className="flex justify-center items-center px-2 py-5 bg-white w-full">
                        <div className="card-shadow w-1/3 block px-10 py-8">
                            <div className="flex justify-start py-2">
                                <img src={icon} alt="" />
                                <span className='card-logo py-2 px-2'>
                                    Stack
                                </span>
                            </div>

                            <p className="card-title py-2">
                                Sign up to join with Stack
                            </p>
                            <form className="py-2 block" onSubmit={handleLogin}>
                                <div className="block w-full py-1">
                                    <label className="w-full input-label ">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-xl ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
                                    />
                                    <span className="input-error">
                                        error message
                                    </span>
                                </div>
                                <div className="block w-full py-1">
                                    <label>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-xl ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
                                    />
                                    <span className="input-error">
                                        error message
                                    </span>
                                </div>
                                <div className="flex justify-center w-full  py-2 items-center">
                                    <button className="button-text w-full py-1 rounded-lg">Sign Up</button>
                                </div>
                                <div className="flex justify-start py-2">
                                    <p className="sign-in-label">
                                        Already have an account? <button className="sign-in-link" onClick={goSignIn}>Sign In</button>
                                    </p>
                                </div>

                            </form>


                        </div>
                    </div>

                ) : (
                    <div className="flex justify-center items-center px-2 py-5 bg-white w-full">
                        <div className="card-shadow w-1/3 block px-10 py-8">
                            <div className="flex justify-start py-2">
                                <img src={icon} alt="" />
                                <span className='card-logo py-2 px-2'>
                                    Stack
                                </span>
                            </div>

                            <p className="card-title py-2">
                                Sign In to continue with Stack
                            </p>
                            <form className="py-2 block" onSubmit={handleLogin}>
                                <div className="block w-full py-1">
                                    <label className="w-full input-label ">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-xl ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
                                    />
                                    <span className="input-error">
                                        error message
                                    </span>
                                </div>
                                <div className="block w-full py-1">
                                    <label>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-xl ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
                                    />
                                    <span className="input-error">
                                        error message
                                    </span>
                                </div>
                                <div className="flex justify-center w-full  py-2 items-center">
                                    <button className="button-text w-full py-1 rounded-lg">Sign Up</button>
                                </div>
                                <div className="flex justify-start py-2">
                                    <p className="sign-in-label">

                                        Don’t have an account? <button className="sign-in-link" onClick={goSignUp}>Sign Up</button>
                                    </p>
                                </div>

                            </form>


                        </div>
                    </div>
                )
            }
            {/* sign up */}


            {/* sign In */}

        </div>
    )
}

export default Home;




