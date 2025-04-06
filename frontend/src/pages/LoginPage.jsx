import 	{React,useState} from 'react'
import Banner from "../components/Banner"
import LoginForm from '@/components/LoginForm';
import { Flex } from '@chakra-ui/react';
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <Flex direction={"column"} gap={14}>
        <Banner title="My Account" path="Home > My Account"></Banner>
        <LoginForm></LoginForm>
      </Flex>
    </div>
  );
}

export default LoginPage;
