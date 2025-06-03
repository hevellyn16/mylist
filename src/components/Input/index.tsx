import React, { forwardRef, LegacyRef } from 'react';

import { 
    TextInput, 
    View,
    Image,
    Text,
    TextInputProps,
    TouchableOpacity,

 } from 'react-native';

 import { styles } from './style';
 import { themes } from '../../global/themes';
 import mail from '../../assets/mail.png';
 import open from '../../assets/open.png';
 import closed from '../../assets/closed.png';
 import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
 
 type IconComponent =   React.ComponentType<React.ComponentProps<typeof Image>> |
                        React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                        React.ComponentType<React.ComponentProps<typeof Octicons>>;

 
 type InputProps = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
}
 
export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    IconLeft,
    IconRight,
    iconLeftName,
    iconRightName,
    title,
    onIconLeftPress,
    onIconRightPress,
    ...rest
  } = props;

    return (
        <>
            <Text style ={styles.loginInput}>{title}</Text>

            <View style={styles.BoxInput}>
                <TextInput
                style={styles.input}
                {...rest}
                />

                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft
                        name={iconLeftName as any}
                        size={20}
                        color={themes.colors.black}
                        style={styles.icon}
                        />
                    </TouchableOpacity>)}

                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress}>
                        <IconRight
                        name={iconRightName as any}
                        size={20}
                        color={themes.colors.black}
                        style={styles.icon}
                        />
                    </TouchableOpacity>)}
            </View>

        </>
        
    );
})