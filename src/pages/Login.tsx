import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";

const Login = () => {

    const handleLogin = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <Title>Login</Title>
            <Input id="username" label="Username"></Input>
            <br/>
            <Input id="password" label="Password" type="password"></Input>
            <br/>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}

export default Login
