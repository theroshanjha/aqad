import auth from '@react-native-firebase/auth';

export const signup = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};




export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};




export const logout = async () => {
  try {
    await auth().signOut();
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};



