import '@/App.css';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type InputLogin = {
  email : string
  password : string
}

function Login() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const {
    register,
    handleSubmit 
  } = useForm<InputLogin>();
  const navigate = useNavigate();
  const onSubmit : SubmitHandler<InputLogin> = async (data) => {
    try{
      await axios.post(" http://localhost:3000/auth/login", data, {
        headers : {
          "Content-Type" : "application/json"
        },
      }).then((response) => {;
        const result = response.data
        console.log(result);
        if (result.success){
          setSuccessMsg("Login berhasil!");
          setErrorMsg(null);
          localStorage.setItem("token", result.token);
          navigate("/dashboard");

        } else {
          setErrorMsg("Login gagal, email atau password salah.");
          setSuccessMsg(null);
        }
      });
      } catch(error) {
        setErrorMsg("Terjadi kesalahan saat mengirim permintaan.");
        setSuccessMsg(null);
        console.error("Error:", error);
      }
  };
   
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card>
          <CardHeader>
             <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="post" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">Email</Label>
            <Input type='email' placeholder='Email' {...register("email")} />
            <Label htmlFor="password">Password</Label>
            <Input type='password' placeholder='Password' {...register("password")}></Input>
            <Input type='submit'></Input>
            </form>
          </CardContent>
      </Card>

      {/* ALERT */}
      {errorMsg && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
      )}

      {successMsg && (
        <Alert>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMsg}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default Login