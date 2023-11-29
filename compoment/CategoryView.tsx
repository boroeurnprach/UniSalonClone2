import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'
const CategoryView = ({ text, hasIcon, iconName }) => {
    return (
        <View style={{
            width: 130,
            flexDirection: 'row',
            height: 40,
            backgroundColor: 'white',
            marginTop: 130,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10

        }}>
            {hasIcon && (
                <Icon name={iconName} size={15} style={{ marginRight: 5 }} />
            )}
            <Text style={{ fontSize: 13 }}>{text}</Text>
        </View>
    );
};


export default CategoryView
