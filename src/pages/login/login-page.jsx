import { Button, Card, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { auth, google } from "../../config/firebase";
import { loginSaga } from "./redux/login-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const { handleSubmit, errors, register, control } = useForm({
    mode: "all",
  });
  const onSubmit = (data) => {
    dispatch(loginSaga(data));
  };
  const handleSigninWithGoogle = async () => {
    const {user} = await auth.signInWithPopup(google);
    console.log(user)
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h4">
          Welcome to Login || Register Page
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ maxWidth: "450px", marginTop: "50px" }}
        >
          <Controller
            name="email"
            control={control}
            render={({ onChange, value }) => (
              <TextField
                fullWidth
                style={{ margin: "10px auto" }}
                label="Email"
                type="email"
                ref={register}
                required
                variant="outlined"
                onChange={onChange}
                value={value}
                error={errors.email}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ onChange, value }) => (
              <TextField
                fullWidth
                style={{ margin: "10px auto" }}
                label="Password"
                type="password"
                ref={register}
                required
                variant="outlined"
                onChange={onChange}
                value={value}
                error={errors.password}
              />
            )}
          />
          <Button variant="outlined" type="submit">
            Signin || Singup
          </Button>
          <Button
            variant="outlined"
            style={{ margin: "auto 10px" }}
            onClick={handleSigninWithGoogle}
          >
            Login With Google
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
