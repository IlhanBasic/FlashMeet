import Login from "@/components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
const CLIENT_ID =process.env.CLIENT_ID;
export default function Auth() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Login />
      </GoogleOAuthProvider>
    </>
  );
}
