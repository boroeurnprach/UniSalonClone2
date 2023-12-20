import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Fontisto';

const CategoryView = ({ text, hasIcon, iconName }) => {

    return (

        <TouchableOpacity style={{
            width: 'auto',
            flexDirection: 'row',
            height: 40,
            backgroundColor: 'white',
            paddingVertical: 5,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
            marginRight: 5,
            paddingHorizontal: 25,
        }}>
            {hasIcon && (
                <Icon name={iconName} size={15} style={{ marginHorizontal: 10, }} />
            )}
            <Text style={{ fontSize: 13 }}>{text}</Text>
        </TouchableOpacity>
    );
};
export default CategoryView;