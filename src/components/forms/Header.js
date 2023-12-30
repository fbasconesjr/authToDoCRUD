import { View, Text, Image} from "react-native";
import Logo from "../../../assets/cmu.png";

export default function Header() {
    return (
        <View >
        <View style={{justifyContent: "center", alignItems: "center",}}>
            <Image source={Logo} style={{width:100, height: 100 }} />
            
        </View>
        <View style={{justifyContent: "center", alignItems: "center",}}>
            <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">CENTRAL MINDANAO UNIVERSITY</Text>
            <Text style = {{fontStyle: 'italic', color: '#00491E',}}variant="displaySmall">"The Academic Paradise of the South"</Text>
            <Text style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',marginTop: 10, marginBottom: 10}}variant="displaySmall">Student ToDo List App</Text>
            
        </View>
        </View>
    );
}