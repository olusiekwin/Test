import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  appTitle: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 28,
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 60,
  },
  formContainer: {
    flex: 1,
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.75)',
    borderWidth: 1,
    borderColor: 'rgba(181, 181, 181, 0.5)',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    borderRadius: 15,
    height: 60,
    borderWidth: 1,
    borderColor: 'rgba(181, 181, 181, 0.35)',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  eyeIcon: {
    paddingHorizontal: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
  },
  submitButton: {
    height: 61,
    backgroundColor: '#202026',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFFFF',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  dividerText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialButton: {
    marginHorizontal: 15,
  },
  socialIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FFFFFF',
  },
  socialIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookIcon: {
    backgroundColor: '#1877F2',
  },
  facebookIconText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  appleIcon: {
    backgroundColor: '#000000',
  },
  appleLogoIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  switchModeContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  switchModeText: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(181, 181, 181, 0.75)',
  },
  switchModeHighlight: {
    fontWeight: '600',
    color: '#FFFFFF',
  },
});