import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        alert("info:"+username + password);
        console.log(event);
        console.log(username);
        console.log(password);
        fetch("http://localhost:4001/signup", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Logged in!");
        })
        .catch((err) => {
            console.log("catching error");
            alert("Error!" + err.message)
            console.log(err.message);
        })

        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <Title>Signup</Title>
                <Input id="username" label="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)}></Input>
                <br/>
                <Input id="password" label="Password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}></Input>
                <br/>
                <Input id="confirm-password" label="Confirm Password" type="password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}></Input>
                <br/>
                <Button type="submit">Create Account</Button>
            </form>
        </div>
    );
}

export default Signup;
