import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import GetData from "../../utils/getdata";
import { router } from "expo-router";
import InformationRequest from "../../components/notification/informationRequest";
import { useIsFocused } from "@react-navigation/native";

const Redirect = () => {
	const baseUrl = "https://se346-skillexchangebe.onrender.com";

	const { id } = useLocalSearchParams();
	const {idRequest}= useLocalSearchParams();
	console.log(id)
	console.log(idRequest);
	const [user, setUser] = useState(null);
	useEffect(() => {
		console.log("Hello")
		const getUserById = async () => {
			const url = `${baseUrl}/api/v1/user/findbyid/${id}`;
			const data = await GetData(url);
			console.log(data);
			setUser(data);
		};

		getUserById();
		
	}, []);

	return <InformationRequest {...user} idRequest={idRequest}  />;
};
export default Redirect;
