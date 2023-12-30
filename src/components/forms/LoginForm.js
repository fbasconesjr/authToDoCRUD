import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, ActivityIndicator, } from 'react-native'
import { PaperProvider, Button , TextInput, Text, HelperText} from 'react-native-paper';
import { getAuth } from '../../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";


export default function LoginForm(props) {
  const navigation = useNavigation();

  const handleLogin = async (values) => {
    const FIREBASE_AUTH = getAuth();
    signInWithEmailAndPassword(FIREBASE_AUTH, values.email, values.password)
     .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('Logged in with: ',user.email);
        navigation.navigate("DashboardPage");
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
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
      >
        {({values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, setTouched})=> (
        <View>
          <View style = {{justifyContent: "center", alignItems: "center"}}>
            <Text  style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Welcome back.</Text>
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
          <View>
            <Text style = {{textAlign: 'right', fontSize: 14, fontWeight: 'bold', color: '#00491E',paddingRight: 15,}}variant="displaySmall" onPress={() => props.navigation.navigate("RestorePasswordPage")}>Forgot your password?</Text>
        </View>
          <Button style={{
                justifyContent: 'flex-end',
                borderWidth: 1,
                width: 350,
                marginTop: 5,
                height: 45,
                paddingLeft: 10,
                marginBottom: 10,
                justifyContent: 'flex-end',
                backgroundColor: "#00491E",
                
              }}mode="contained" 
              loading={isSubmitting}
              disabled={isSubmitting}
              //onPress={() => props.navigation.navigate("DashboardPage")}
              onPress={handleSubmit}
              >
          LOGIN
        </Button>
        <View style = {{justifyContent: "center", alignItems: "center", flexDirection:'row'}}>
            <Text style = {{fontSize: 14, fontWeight: 'bold', color: 'gray',}}variant="displaySmall">Don't have an account? </Text><Text style = {{fontSize: 14, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall" onPress={() => props.navigation.navigate("SignUpPage")}>Sign Up </Text>
          </View>
      </View>)}
        
      </Formik>
  </PaperProvider>
  )
}