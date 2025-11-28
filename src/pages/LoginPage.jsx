import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, Lock, Mail, Twitter, Facebook, Mail as GmailIcon } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE — NO LOGO */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Removed Logo Box */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">
                Welcome Back
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access your MarBar Africa research dashboard and continue your important work in mental health research.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                "Secure research data access",
                "Real-time collaboration tools",
                "Advanced analytics dashboard",
                "Project management features"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — LOGIN FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">

              <div className="text-center mb-8">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-3 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Sign In
                </motion.h2>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Enter your credentials to access your account
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute inset-y-0 left-0 h-5 w-5 text-gray-400 ml-3 my-auto" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </motion.div>

                {/* Password */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute inset-y-0 left-0 h-5 w-5 text-gray-400 ml-3 my-auto" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 my-auto"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Forgot */}
                <motion.div
                  className="text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a
                    href="/forgot-password"
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                  >
                    Forgot your password?
                  </a>
                </motion.div>

                {/* Sign In */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                  <LogIn className="w-5 h-5" />
                </motion.button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="flex justify-center space-x-4">
                  {[
                    { name: "Google", icon: <GmailIcon className="w-5 h-5" /> },
                    { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
                    { name: "Twitter", icon: <Twitter className="w-5 h-5" /> }
                  ].map((social) => (
                    <button
                      key={social.name}
                      className="w-12 h-12 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center justify-center"
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-600 font-semibold hover:text-blue-700">
                      Sign up here
                    </a>
                  </p>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;
