import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import PhoneInput from "react-native-phone-number-input"; // Import the phone number input package

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  isPhoneNumber, // New prop to handle phone number
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(value || ""); // Initialize with passed value
  const [countryCode, setCountryCode] = useState("NG"); // Default country code to Nigeria

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium">{title}</Text>

      {isPhoneNumber ? (
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode={countryCode}
          layout="first"
          onChangeFormattedText={(text) => handleChangeText(text)}
          onChangeCountry={(code) => setCountryCode(code)}
          containerStyle={{
            width: "100%",
            height: 64,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
          textContainerStyle={{
            paddingVertical: 0,
            paddingHorizontal: 10,
            backgroundColor: "#F0F0F0",
            borderRadius: 20,
          }}
          textInputStyle={{
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
          codeTextStyle={{
            color: "#000",
            fontSize: 16,
            fontWeight: "600",
          }}
          countryPickerButtonStyle={{ marginLeft: -10 }} // Adjust spacing for the country code dropdown
        />
      ) : (
        <View className="w-full h-16 px-4 bg-pearl-100 rounded-2xl border-2 border-gradient-100 focus:border-secondary flex flex-row items-center">
          <TextInput
            className="flex-1 text-black font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#0000"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />

          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default FormField;
