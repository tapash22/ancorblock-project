import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="w-full h-screen py-5 px-5 flex justify-center items-center">
            <p className="text-2xl font-bold tracking-widest block">
                Page Not Found !!
            </p>
            <span className="text-lg font-medium tracking-wide">
                Go to 
                <Link to='/' className="px-2 text-sm font-bold tracking-wide underline text-blue-700" >
                    Home page
                    </Link>
            </span>
        </div>
    )
}

export default NotFound;