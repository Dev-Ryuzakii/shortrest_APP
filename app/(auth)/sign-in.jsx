import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'expo-router'; // Import the router
import { auth } from '../../firebaseConfig';
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter(); // Get router instance

  const submit = async () => {
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      Alert.alert("Success", "Signed in successfully!");
      // Navigate to /home on success
      router.push('/home');
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Text className="text-3xl font-pbold mt-10">Welcome back!</Text>
          <Text className="mt-2 text-sm font-pregular text-textcol-100">
            Sign in to continue exploring your dream place to live across the whole world!
          </Text>

          {/* Form Fields */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />

          {/* Sign In Button */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />


          {/* Forgot Password and Create Account Links */}
          <View className="mt-3 flex-row justify-between">
            <Text></Text>
            {/* Forgot Password Link */}
            <TouchableOpacity onPress={() => router.push('/forgetPwd')}>
              <Text className="text-blue-500 text-sm">Forgot Password?</Text>
            </TouchableOpacity>

            {/* Create Account Link */}
            <TouchableOpacity onPress={() => router.push('/sign-up')}>
              <Text className="text-blue-500 text-sm">Create Account</Text>
            </TouchableOpacity>
          </View>

             {/* Sign in with Apple */}
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'black',
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 5,
              marginTop: 10,
              justifyContent: 'center'
            }}
            onPress={() => console.log("Sign in with Apple")}
          >
            <Icon name="apple" size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Sign in with Apple</Text>
          </TouchableOpacity>


          {/* Sign in with Google */}
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ddd',
              marginTop: 20,
              justifyContent: 'center'
            }}
            onPress={() => console.log("Sign in with Google")}
          >
            <Icon name="google" size={20} color="#EA4335" style={{ marginRight: 8 }} />
            <Text style={{ color: '#333', fontSize: 16 }}>Sign in with Google</Text>
          </TouchableOpacity>

         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
