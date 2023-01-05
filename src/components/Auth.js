import { useAuth } from "../hooks/useAuth";

export const Auth = () => {
  // Now all the data stored in the context can
  // be accessed with the auth variable
  const { status, login } = useAuth();
  console.log(status);
  return (
    <div>
      <h1>Are you authenticated?</h1>
      {status ? <p>Yes you are</p> : <p>Nopes</p>}

      <button onClick={login}>Click To Login</button>
    </div>
  );
};
