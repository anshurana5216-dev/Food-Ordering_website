import { useState } from "react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    console.log(user);

    alert(`Welcome ${user.displayName}`);
  } catch (error) {
    console.log(error);
  }
};


function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "http://localhost:5000/api/auth/signup",
  formData
);

alert("Account Created Successfully!");

setFormData({
  name: "",
  email: "",
  password: "",
});
    } catch (error) {
      console.log(error);
     alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
       <input
  type="text"
  placeholder="Name"
  value={formData.name}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
/>

<input
  type="email"
  placeholder="Email"
  value={formData.email}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>

<input
  type="password"
  placeholder="Password"
  value={formData.password}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  }
/>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Sign Up
          </button>


          <button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 mt-3"
>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
    alt="Google"
    className="w-5 h-5"
  />
  Continue with Google
</button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;