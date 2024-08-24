import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Register = () => {
  const adminLogin = import.meta.env.VITE_LOGIN;
  const adminPassword = import.meta.env.VITE_PASSWORD;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const clickBtn = () => {
    if (login === adminLogin && password === adminPassword) {
      setSuccess("good");
      setTimeout(() => {
        navigate("/home");
        setSuccess("");
      }, 2000);
    } else {
      setError("bad");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      margin={"50px auto"}
      w={"30%"}
    >
      <Input
        type="email"
        placeholder="Login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" onClick={clickBtn}>
        Enter
      </Button>

      {success && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      )}
    </Box>
  );
};

export default Register;
