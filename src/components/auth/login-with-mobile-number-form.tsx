// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Cookies from "js-cookie";
// import { useUI } from "../../contexts/ui.context";
// import Logo from "../widgets/logo";
// import forms from "../../../public/strings/forms.json";
// import Button from "../widgets/button";
// import Input from "../ui/input";

// const LoginWithMobileNumberForm: React.FC = () => {
//   const { setModalView, openModal, closeModal } = useUI();
//   const [isOtpSent, updateOtpstatus] = useState(false);
//   const [enteredWrongOtp, updateEnteredWrongOtp] = useState(false);
//   const [enteredWrongPhoneNumber, updateEnteredWrongPhoneNumber] = useState(false);
//   const [validatingCredentials, updateValidatingCredentials] = useState(false);
//   const sendOtpText = isOtpSent
//     ? "Haven't received SMS, resend now"
//     : "send SMS";
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   // const { login, isAuth, userId } = useAuth();
//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   function onSubmit(){
//     handleValidateOtp();
//   }

//   async function handleSendOtp() {
//     if(phoneNumber.length < 10){
//       updateEnteredWrongPhoneNumber(true);
//     }else{
//       updateEnteredWrongPhoneNumber(false);
//       updateOtpstatus(true);
//       const response = await fetch("/api/auth/login-with-mobile-number", {
//         method: "POST",
//         body: JSON.stringify({
//           phoneNumber: phoneNumber,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       console.log(data);
//       console.log(data.phoneNumber);
//       console.log(data.message);
//       console.log("otp sent");
//     }
  
//   }

//   async function handleResendOtp() {
//     console.log("resending otp");
//     const response = await fetch("/api/auth/login-with-mobile-number", {
//       method: "POST",
//       body: JSON.stringify({
//         phoneNumber: phoneNumber,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//     console.log(data.message);
//     console.log("otp resent");
//   }

//   function handleSignUp() {
//     setModalView("SIGN_UP_VIEW");
//     return openModal();
  
  
//   }

//   async function handleValidateOtp()  {
//     updateValidatingCredentials(true);
//     const response = await fetch("/api/auth/verify-mobile-number", {
//       method: "POST",
//       body: JSON.stringify({
//         phoneNumber: phoneNumber,
//         otp: otp
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     const authData = data.authData;
//     console.log(data.statusCode);
//     if(authData != null){
//       handleLoginUser(authData);
//       updateValidatingCredentials(false);
//     }
//     else {
//       updateEnteredWrongOtp(true);
//       updateValidatingCredentials(false);
//     }
//   }

//   async function handleLoginUser(authToken:string){
//     // await signInWithCustomToken(authRef, authToken);
// 		// const currentUserId = authRef.currentUser?.uid;
//     // const currentUserName = authRef.currentUser?.displayName;
//     // login(currentUserId as string, currentUserName as string);
//     // Cookies.set("authId", `${authRef.currentUser?.uid}`);
//     Cookies.set("isAuth", "true");
//     // Cookies.set("currentUserName", `${authRef.currentUser?.displayName}`);
//     closeModal();
//   }

//   return (
//     <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
//       <div className="text-center mb-6 pt-2.5">
//         <div onClick={closeModal}>
//           <Logo />
//         </div>
//       </div>
//       <form
//         // onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col justify-center"
//         noValidate
//       >
//         <div className="flex flex-col space-y-3.5">
//           <Input
//             labelKey={forms["label-phone-number-required"]}
//             type="phone"
//             variant="solid"
//             maxLength={10}
//             minLength={10}
//             {...register("phoneNumber", {
//               required: `${forms["phone-number-required"]}`,
//               minLength:10,
//               maxLength:10,
//               pattern: /^[0-9]*$/
//             })}
//             errorKey={enteredWrongPhoneNumber ? forms["error-phone-number"] : ""}
//             onChange={(val) => setPhoneNumber(val.target.value)}
//           />
//           <div className="flex ms-auto">
//             <button
//               type="button"
//               onClick={isOtpSent ? handleResendOtp : handleSendOtp}
//               className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
//             >
//               {sendOtpText}
//             </button>
//           </div>
//           <Input
//             labelKey={forms["label-otp-required"]}
//             type="phone"
//             variant="solid"
//             maxLength={6}
//             minLength={6}
//             {...register("otp", {
//               required: `${forms["otp-required"]}`,
//               pattern: {
//                 value: /^[0-9]*$/, 
//                 message: "forms:otp-error",
//               },
//             })}
//             errorKey={enteredWrongOtp ? forms["error-otp"] : ""}
//             onChange={(val) => setOtp(val.target.value)}
//           />
//           <div className="relative">
//             <Button
//               type="submit"
//               loading={validatingCredentials}
//               disabled = {validatingCredentials}
//               className="h-11 md:h-12 w-full mt-1.5"
//               bg-color="#0046BE"
//             >
//               {forms["button-login-using-mobile-number"]}
//             </Button>
//           </div>
//         </div>
//       </form>
//       <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
//         {"New to Unboxedkart ? "}
//         <button
//           type="button"
//           className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
//           onClick={handleSignUp}
//         >
//           {"Register here"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginWithMobileNumberForm;`

/*
  async function callCloudFunction() {
    console.log(authRef.currentUser?.uid);
    // await handleSignIn();
    console.log("calling cloud function");
    const response = httpsCallable(functionsRef,`${process.env.NEXT_ADD_SEARCH_TERM}`);
    const responseData = await response({
      searchTerm: "SUNILSSEARCH",
      userId: "OkjzyrUFopeM5R1D4kK0mxHJrpD3",
    });
    console.log(responseData.data);
  }

  async function handleSendData() {
    console.log("calling function");
    // const newResponse = await http.post("new-search-term", {
    //   data: JSON.stringify({
    //     searchTerm: "SUNIL12345",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // await handleSignIn();
    console.log(authRef.currentUser?.uid);
    const response = await fetch("/api/new-search-term", {
      method: "POST",
      body: JSON.stringify({
        searchTerm: "SUNIL123",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  async function lo() {
    await signInWithEmailAndPassword(
      authRef,
      "9494111131@unboxedkart.com",
      "^i#Fq!yZ6!Q*roG"
    );
    console.log(authRef.currentUser?.uid);
  }

  async function handleSignOut() {
    await authRef.signOut();
  }
*/

import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const sendOtp = async () => {
    try {
      const response = await axios.post('/api/send-otp', { phoneNumber });
      if (response.data.success) {
        setIsOtpSent(true);
        setError('');
      } else {
        setError('Failed to send OTP');
      }
    } catch (err) {
      setError('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { phoneNumber, otp });
      if (response.data.success) {
        setToken(response.data.token);
        setError('');
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Error verifying OTP');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">{isOtpSent ? 'Enter OTP' : 'Login'}</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {!isOtpSent ? (
          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
