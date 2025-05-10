import { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react-native';
import { authStyles } from '@/styles/auth.styles';

export default function AuthScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // In a real app, you would handle authentication here
    router.push('/(tabs)');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
      style={authStyles.container}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
        style={authStyles.overlay}
      >
        <TouchableOpacity style={authStyles.backButton} onPress={goBack}>
          <ArrowLeft color="#FFFFFF" size={24} />
        </TouchableOpacity>
        
        <Text style={authStyles.appTitle}>MealLens</Text>
        
        <View style={authStyles.formContainer}>
          <View style={authStyles.inputContainer}>
            <Text style={authStyles.inputLabel}>
              {isLogin ? "Email or Phone Number" : "Full Name"}
            </Text>
            <TextInput
              style={authStyles.input}
              placeholder={isLogin ? "Enter your email" : "Enter your full name"}
              placeholderTextColor="rgba(255, 255, 255, 0.75)"
              keyboardType={isLogin ? "email-address" : "default"}
              autoCapitalize="none"
              value={isLogin ? email : name}
              onChangeText={isLogin ? setEmail : setName}
            />
          </View>
          
          {!isLogin && (
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.inputLabel}>Email</Text>
              <TextInput
                style={authStyles.input}
                placeholder="Enter your email"
                placeholderTextColor="rgba(255, 255, 255, 0.75)"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          )}
          
          <View style={authStyles.inputContainer}>
            <Text style={authStyles.inputLabel}>Password</Text>
            <View style={authStyles.passwordContainer}>
              <TextInput
                style={authStyles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="rgba(255, 255, 255, 0.75)"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                style={authStyles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#FFFFFF" />
                ) : (
                  <Eye size={20} color="#FFFFFF" />
                )}
              </TouchableOpacity>
            </View>
            
            {isLogin && (
              <TouchableOpacity style={authStyles.forgotPassword}>
                <Text style={authStyles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <TouchableOpacity style={authStyles.submitButton} onPress={handleSubmit}>
            <Text style={authStyles.submitButtonText}>
              {isLogin ? "Login" : "Register"}
            </Text>
          </TouchableOpacity>
          
          <View style={authStyles.dividerContainer}>
            <View style={authStyles.divider} />
            <Text style={authStyles.dividerText}>OR</Text>
            <View style={authStyles.divider} />
          </View>
          
          <View style={authStyles.socialButtonsContainer}>
            <TouchableOpacity style={authStyles.socialButton}>
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }} 
                style={authStyles.socialIcon} 
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={authStyles.socialButton}>
              <View style={[authStyles.socialIconContainer, authStyles.facebookIcon]}>
                <Text style={authStyles.facebookIconText}>f</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={authStyles.socialButton}>
              <View style={[authStyles.socialIconContainer, authStyles.appleIcon]}>
                <Image 
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' }} 
                  style={authStyles.appleLogoIcon} 
                />
              </View>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={authStyles.switchModeContainer} onPress={toggleAuthMode}>
            <Text style={authStyles.switchModeText}>
              {isLogin 
                ? "You don't have an account? " 
                : "Already have an account? "}
              <Text style={authStyles.switchModeHighlight}>
                {isLogin ? "Register" : "Login"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}