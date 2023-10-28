
import Header2 from "@components/Header/Header2"
import LoginForm from "@components/LoginFrom/LoginForm"
import Image from "next/image"
import pic from "../../public/loginImage.PNG"

const Login = () => {
  return (
    <div className="w-full ">
        <Header2/>
        <div className="w-full flex justify-center py-14">
          <div className="w-[600px] px-5">
            <LoginForm/>
          </div>
        </div>
        <div className="w-full px-10 mb-10">
          <Image
            className="w-full h-full border-2 border-gray-500 rounded-md"
            src={pic}
            alt="Picture of the author"
            width={1920}
            height={1080}
          />
        </div>
    </div>
  )
}

export default Login