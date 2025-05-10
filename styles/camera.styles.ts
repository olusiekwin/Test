import { StyleSheet } from "react-native";

export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 50,
  },
  cameraFrame: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 45,
    height: 40,
  },
  horizontalLine: {
    width: 45,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  verticalLine: {
    position: 'absolute',
    width: 3,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    transform: [{ rotate: '90deg' }],
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-90deg' }],
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: '180deg' }],
  },
  instructionText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  flipButton: {
    padding: 15,
  },
  flipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  galleryButton: {
    padding: 15,
  },
  message: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: '#202026',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  permissionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});