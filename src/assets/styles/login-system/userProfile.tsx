import { StyleSheet } from 'react-native';

const userProfile = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        minHeight: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    signInLabel: {
        marginTop: 16,
    },
    passwordInput: {
        marginTop: 16,
    },
    orderInput: {
        marginTop: 14,
    },
    signInButton: {
        marginHorizontal: 16,
        marginTop: 14,
    },
    userFormEditContainer: {
        marginTop: 38,
    },
});

export default userProfile;