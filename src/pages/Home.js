import { useState } from "react"
import icon from '../assets/icon-image/paper1.svg'
import Login from "../components/form/Login";
import Registration from "../components/form/Registration";

const Home = () => {


    const [show, setShow] = useState(false);

    const changeView = () => {
        setShow(!show);
    }

    return (
        <div className="w-full h-full block">
            {/* varification section */}
            <div className="flex justify-center items-center px-2 py-5 bg-white w-full">
                <div className="card-shadow w-1/3 block px-10 py-8">
                    <div className="flex justify-start py-2">
                        <img src={icon} alt="" />
                        <span className='card-logo py-2 px-2'>
                            Stack
                        </span>
                    </div>

                    <p className="card-title py-2">
                        {
                            show ?
                                ' Sign up to join with Stack' :
                                'Sign In to continue with Stack'
                        }
                    </p>

                    {
                        show ? (
                            <Login />
                        ) : (
                            <Registration />
                        )
                    }


                    <p className="sign-in-label py-2">
                    { show ? 'Already have an account?' :  'Don’t have an account?' }<button className="sign-in-link" onClick={changeView}>{show ? 'Sign Up' : 'Sign In'}</button>
                    </p>
                </div>
            </div>
             {/* varification section end */}
        </div>
    )
}

export default Home;




