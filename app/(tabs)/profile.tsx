import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Settings, Camera } from 'lucide-react-native';
import { profileStyles } from '@/styles/profile.styles';

export default function ProfileScreen() {
  return (
    <ScrollView style={profileStyles.container}>
      <View style={profileStyles.header}>
        <Text style={profileStyles.headerTitle}>Profile</Text>
        <TouchableOpacity style={profileStyles.settingsButton}>
          <Settings size={24} color="#202026" />
        </TouchableOpacity>
      </View>
      
      <View style={profileStyles.profileSection}>
        <View style={profileStyles.profileImageContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }} 
            style={profileStyles.profileImage} 
          />
          <TouchableOpacity style={profileStyles.cameraButton}>
            <Camera size={17} color="rgba(255, 137, 34, 0.8)" />
          </TouchableOpacity>
        </View>
        
        <Text style={profileStyles.profileName}>Samuel Barns</Text>
        <Text style={profileStyles.profilePhone}>+1 523 458 78 12</Text>
        
        <TouchableOpacity style={profileStyles.editButton}>
          <Text style={profileStyles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      
      <View style={profileStyles.formSection}>
        <View style={profileStyles.formGroup}>
          <Text style={profileStyles.formLabel}>Email Address</Text>
          <View style={profileStyles.inputContainer}>
            <TextInput
              style={profileStyles.input}
              value="S.Barns@gmail.com"
              editable={false}
              placeholderTextColor="#B5B5B5"
            />
          </View>
        </View>
        
        <View style={profileStyles.formGroup}>
          <Text style={profileStyles.formLabel}>Date of birth</Text>
          <View style={profileStyles.inputContainer}>
            <TextInput
              style={profileStyles.input}
              value="04/20/1996"
              editable={false}
              placeholderTextColor="#B5B5B5"
            />
          </View>
        </View>
        
        <View style={profileStyles.formGroup}>
          <Text style={profileStyles.formLabel}>Gender</Text>
          <View style={profileStyles.genderContainer}>
            <View style={profileStyles.genderOption}>
              <View style={profileStyles.radioSelected}>
                <View style={profileStyles.radioInner} />
              </View>
              <Text style={profileStyles.genderText}>Male</Text>
            </View>
            
            <View style={profileStyles.genderOption}>
              <View style={profileStyles.radioUnselected} />
              <Text style={profileStyles.genderText}>Female</Text>
            </View>
          </View>
        </View>
        
        <View style={profileStyles.formGroup}>
          <Text style={profileStyles.formLabel}>Address</Text>
          <View style={profileStyles.inputContainer}>
            <TextInput
              style={profileStyles.input}
              value="KK 21 KG 102 St"
              editable={false}
              placeholderTextColor="#B5B5B5"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}