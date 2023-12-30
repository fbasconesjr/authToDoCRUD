import { View, Text, Image} from "react-native";
import Logo from "../../../assets/cmu.png";

export default function Logo1() {
    return (
        <View >
        <View style={{justifyContent: "center", alignItems: "center",}}>
            <Image source={Logo} style={{width:125, height: 125 }} />
            
        </View>
        </View>
    );
}