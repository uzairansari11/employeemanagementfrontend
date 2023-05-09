import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Input,
	Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
export const Authentication = () => {
	const [loginEmail, setLoginEamil] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [signupEmail, setsignupEmail] = useState("");
	const [signupPassword, setsignupPassword] = useState("");
	const [verifysignupPassword, setverifysignupPassword] = useState("");
	const handleLogin = async () => {
		let res = await axios.post(`https://lastmanagement.onrender.com/login`, {
			email: loginEmail,
			password: loginPassword,
		});

		console.log(res);
	};
	const handleSignup = async () => {
		let res = await axios.post("https://lastmanagement.onrender.com/signup", {
			email: signupEmail,
			password: signupPassword,
			confirm_password: verifysignupPassword,
		});
		console.log(res);
	};
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			width={"50%"}
			margin={"auto"}
			height={"100vh"}
			alignItems={"center"}
		>
			<Tabs size="md" variant="enclosed">
				<TabList>
					<Tab>Login</Tab>
					<Tab>Signup</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Input
							type="text"
							value={loginEmail}
							onChange={(e) => setLoginEamil(e.target.value)}
						/>
						<Input
							type="text"
							value={loginPassword}
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
						<Button onClick={handleLogin}>Login</Button>
					</TabPanel>
					<TabPanel>
						<Input
							type="text"
							onChange={(e) => setsignupEmail(e.target.value)}
							value={signupEmail}
						/>
						<Input
							type="text"
							onChange={(e) => setsignupPassword(e.target.value)}
							value={signupPassword}
						/>
						<Input
							type="text"
							onChange={(e) => setverifysignupPassword(e.target.value)}
							value={verifysignupPassword}
						/>
						<Button onClick={handleSignup}>Signup</Button>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};
