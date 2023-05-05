import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react"
import { Nav } from "./component/Nav";

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
          <button onClick={() => signIn('google')} className="flex items-center justify-center bg-white px-7 py-3 uppercase text-sm font-medium  shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
            <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
            Login With Google
          </button>
      </div>
    )
  } else {
    return (
      <div className="bg-blue-900 min-h-screen">
        <Nav />
        Signed in as {session.user.email}
      </div>
    )
  }
}
