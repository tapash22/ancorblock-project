import { useState } from "react"

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); e.preventDefault();
        console.log({email, password})
    }

    return (
        <>
            <form className="py-2 block" onSubmit={handleSubmit}>
                <div className="block w-full py-1">
                    <label className="w-full input-label ">
                        Email
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-lg ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
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
                        className="h-8 rounded-lg bg-white py-1 px-3 focus:shadow-lg ring-1 ring-gray-400 focus:shadow-red-500 w-full my-1"
                    />
                    <span className="input-error">
                        error message
                    </span>
                </div>
                <div className="flex justify-center w-full  py-2 items-center">
                    <button className="button-text w-full py-1 rounded-lg">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default Registration;