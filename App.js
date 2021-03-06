 import React from 'react';
 import {SafeAreaView, StyleSheet, Text} from 'react-native';
 import Navigation from './src/navigation';
 import Amplify from 'aws-amplify';
//  import { withAuthenticator , AmplifyTheme} from 'aws-amplify-react-native';
 import config from './src/aws-exports'

 Amplify.configure(config);
 
 const App = () => {
   return (
     <SafeAreaView style={styles.root}>
       <Navigation />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#F9FBFC',
   },
 });
 
 export default App;


//  const signUpConfig = {
//   header: "My Customized Sign Up",
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//     },
//     {
//       label: "Email",
//       key: "email",
//       required: true,
//       displayOrder: 2,
//       type: "string",
//     },
//     {
//       label: "Username",
//       key: "preferred_username",
//       required: true,
//       displayOrder: 3,
//       type: "string",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ],
// };

// const customTheme = {
//     ...AmplifyTheme,
//     button:{
//       ...AmplifyTheme.button,
//       backgroundColor:"green",
//       borderRadius: 5,
//     }
//   };

//  export default withAuthenticator(App, {signUpConfig, theme: customTheme});
 