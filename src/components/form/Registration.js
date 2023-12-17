import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/UserSlice";

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const handleRegistration = (e) => {
      e.preventDefault();
      const userData = {
        email,
        password,
      };
      dispatch(registerUser(userData));
      console.log(userData)
    };

    return (
        <>
            <form className="py-2 block" onSubmit={handleRegistration}>
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
                    <button className="button-text w-full py-1 rounded-lg" type="submit">{loading ? "loading.." : "Sign Up"}</button>
                </div>
                <div>
          {error && (
            <div className="bg-red-700 opacity-60 text-sm font-normal py-3 text-red-400">
              {error}
            </div>
          )}
        </div>
            </form>
        </>
    )
}

export default Registration;