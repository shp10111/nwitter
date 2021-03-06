import { useState } from "react";
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (newAccount) {

        } else {

        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = (event) => {
      console.log
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <span onClick={toggleAccount}>
              {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button>Continue with google</button>
                <button>Continue with github</button>
            </div>
        </div>
    );
}

export default Auth