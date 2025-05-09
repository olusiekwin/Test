import { useState } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Image } from 'lucide-react-native';
import { cameraStyles } from '@/styles/camera.styles';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={cameraStyles.container}>
        <Text style={cameraStyles.message}>We need your permission to use the camera</Text>
        <TouchableOpacity style={cameraStyles.permissionButton} onPress={requestPermission}>
          <Text style={cameraStyles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={cameraStyles.container}>
      <CameraView style={cameraStyles.camera} facing={facing}>
        <View style={cameraStyles.overlay}>
          <View style={cameraStyles.cameraFrame}>
            <View style={[cameraStyles.corner, cameraStyles.topLeft]}>
              <View style={cameraStyles.horizontalLine} />
              <View style={cameraStyles.verticalLine} />
            </View>
            <View style={[cameraStyles.corner, cameraStyles.topRight]}>
              <View style={cameraStyles.horizontalLine} />
              <View style={cameraStyles.verticalLine} />
            </View>
            <View style={[cameraStyles.corner, cameraStyles.bottomLeft]}>
              <View style={cameraStyles.horizontalLine} />
              <View style={cameraStyles.verticalLine} />
            </View>
            <View style={[cameraStyles.corner, cameraStyles.bottomRight]}>
              <View style={cameraStyles.horizontalLine} />
              <View style={cameraStyles.verticalLine} />
            </View>
          </View>
          
          <Text style={cameraStyles.instructionText}>
            Position your ingredients or meal in the frame
          </Text>
          
          <View style={cameraStyles.buttonContainer}>
            <TouchableOpacity style={cameraStyles.flipButton} onPress={toggleCameraFacing}>
              <Text style={cameraStyles.flipButtonText}>Flip</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={cameraStyles.captureButton}>
              <View style={cameraStyles.captureButtonInner} />
            </TouchableOpacity>
            
            <TouchableOpacity style={cameraStyles.galleryButton}>
              <Image size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}