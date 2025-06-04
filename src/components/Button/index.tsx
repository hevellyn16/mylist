import React from 'react';
import { 
    TouchableHighlight, 
    Text, 
    ActivityIndicator, 
    TouchableHighlightProps, 
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

type Props = TouchableHighlightProps & {
    text: string;
    loading?: boolean;
};

export function Button({ text, loading = false, ...rest }: Props) {
    return (
        <TouchableOpacity 
        style={styles.button}
        {...rest}
        activeOpacity={0.6}
        >
                {loading ? <ActivityIndicator />: <Text style={styles.textButton}>{text}</Text>}
        </TouchableOpacity>
    );
}