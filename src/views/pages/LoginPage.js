import axios from "axios";

export default function LoginPage() {

    const handleLogin = async (e) => {

        e.preventDefault();

        const credential = {
            userid: e.target.id.value,
            password: e.target.password.value
        };
        console.log(credential)
        try {
            const response = await axios.post(
                'http://192.168.0.126:8080/login',
                credential
            );
            
            if (response.status === 200) {
                const token = response.headers['authorization'];
                // token = token.substring(7)
                sessionStorage.setItem('Token', token);
                sessionStorage.setItem('userid', credential.userid);

            }
            window.location.href = '/home';

        } catch (error) {
            console.error('==> Login Failed', error);
            alert('Username or password not matched. Try again.')
        }
    }

    return (
        <div className="w-1/4 min-w-96 py-6 min-h-96 rounded-lg bg-white/[.55] shadow-lg flex flex-col justify-center items-center">
            <p className="text-[#2b50bd] text-3xl font-bold w-full px-8">
                Login
            </p>
            <form
                className="w-full px-8 pt-12 space-y-4 md:space-y-6"
                onSubmit={handleLogin}
            >
                <div>
                    <label
                        htmlFor="id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        ID
                    </label>
                    <input
                        type="id"
                        name="id"
                        id="id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>

                <div className="py-1"></div>
                <button
                    type="submit"
                    className="w-full text-white bg-[#343077] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    로그인
                </button>
            </form>
        </div>
    )
}
