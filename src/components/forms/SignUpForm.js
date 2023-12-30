import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native'
import { PaperProvider, Button , TextInput, Text, HelperText} from 'react-native-paper';
import * as React from 'react';
import { getAuth } from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SignUpForm(props) {
  const navigation = useNavigation();

  const handleSignUp = async (values) => {
    const FIREBASE_AUTH = getAuth();
    createUserWithEmailAndPassword(FIREBASE_AUTH, values.email, values.password)
      .then((userCredential) => {
        // Signed up 
        navigation.navigate("LoginPage");
        const user = userCredential.user;
        console.log('Registered with: ',user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
  });
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .min(6, "The password should have at least 6 characters.")
      .required("Please enter your password")
  });

  return (
    <PaperProvider>
    <Formik  initialValues={{ email: "", password: ""}} 
      onSubmit={async (values) => {
        await handleSignUp(values);
      }}
      validationSchema={validationSchema}
      >
        {({values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, setTouched})=> (
        <View>
      <View style = {{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Create Account</Text>
      </View>
      <TextInput
            activeOutlineColor="green"
            style={{marginTop: 10,}}
            label="Email"
            left={<TextInput.Icon icon="email" />}
            defaultValue={values.email}
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            mode='outlined' 
            keyboardType="email-address"
            error={errors.email && touched.email}
            onFocus={() => setTouched({email: true}, false)}
          />
          {errors.email && touched.email && (
          <HelperText type="error" visible={errors.email}>
            {errors.email}
          </HelperText>
          )}
      
      <TextInput 
            activeOutlineColor="green"
            style={{marginTop: 10,}}
            label="Password"
            left={<TextInput.Icon icon="lock" />}
            secureTextEntry
            //keyboardType="password"
            defaultValue={values.password}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            right={<TextInput.Icon icon="eye" />}
            mode='outlined'
            error={errors.password && touched.password}
            onFocus={() => setTouched({password: true}, false)}
          />
          {errors.password && touched.password && (
          <HelperText type="error" visible={errors.password}>
            {errors.password}
          </HelperText>
          )}
      <Button style={{
            justifyContent: 'flex-end',
            borderWidth: 1,
            width: 350,
            marginTop: 25,
            height: 45,
            paddingLeft: 10,
            marginBottom: 10,
            justifyContent: 'flex-end',
            backgroundColor: "#00491E",
            
          }}mode="contained" 
          loading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit}
          >
      SIGN UP
    </Button>
    <View style = {{justifyContent: "center", alignItems: "center", flexDirection:'row'}}>
        <Text style = {{fontSize: 14, fontWeight: 'bold', color: 'gray',}}variant="displaySmall">Already have an account? </Text><Text style = {{fontSize: 14, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall" onPress={() => props.navigation.navigate("LoginPage")}>Log in </Text>
      </View>
  </View>)}
    </Formik>
  </PaperProvider>
  )
}