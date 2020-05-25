import { StyleSheet } from 'react-native';

const userForgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 24,
    },
    forgotPasswordLabel: {
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 24,
    },
    enterEmailLabel: {
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 64,
    },
});

export default userForgotPassword;