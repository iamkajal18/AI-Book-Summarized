"use client";

import { loadRazorpay } from "@/lib/razorpay";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Gem,
  Zap,
  CheckCircle,
  Lock,
  Shield,
  Info,
  WalletCards,
  CreditCard,
  Banknote,
  Smartphone,
  BookOpen,
  Users,
  Play,
  Book,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import Image from "next/image";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PremiumPaymentPage() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeMethod, setActiveMethod] = useState<
    "upi" | "card" | "netbanking" | "wallet"
  >("upi");
  const [paymentTimeout, setPaymentTimeout] = useState(false);
  const [upiId, setUpiId] = useState("");

  // Define color palettes for light and dark themes
  const colors = {
    light: {
      primary: "#0286a3",
      primaryDark: "#015a73",
      accent: "#02c3d1",
      backgroundFrom: "#e0f2fe",
      backgroundTo: "#f3e8ff",
      cardBg: "rgba(255, 255, 255, 0.8)",
      cardBorder: "rgba(0, 207, 209, 0.3)",
      textPrimary: "#1f2937",
      textSecondary: "#4b5563",
      buttonHover: "#f3f4f6",
      success: "#10b981",
      warningBg: "rgba(234, 179, 8, 0.1)",
      warningBorder: "rgba(234, 179, 8, 0.3)",
      warningText: "#eab308",
    },
    dark: {
      primary: "#00cfd1",
      primaryDark: "#0286a3",
      accent: "#02c3d1",
      backgroundFrom: "#0a192f",
      backgroundTo: "#0a1a2e",
      cardBg: "rgba(31, 41, 55, 0.8)",
      cardBorder: "rgba(0, 207, 209, 0.3)",
      textPrimary: "#e5e7eb",
      textSecondary: "#d1d5db",
      buttonHover: "#374151",
      success: "#10b981",
      warningBg: "rgba(234, 179, 8, 0.1)",
      warningBorder: "rgba(234, 179, 8, 0.3)",
      warningText: "#facc15",
    },
  };

  const currentColors = theme === "dark" ? colors.dark : colors.light;

  useEffect(() => {
    if (paymentSuccess) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (!paymentSuccess) {
          setPaymentTimeout(true);
        }
      }, 120000); // 2 minutes timeout
      return () => clearTimeout(timer);
    }
  }, [isLoading, paymentSuccess]);

  const isValidUpiId = (id: string) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(id);
  };

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentTimeout(false);

    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        alert("Payment gateway failed to load. Please refresh and try again.");
        return;
      }

      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 1,
          username: "Kajal Kasaudhan",
          email: "kasaudhankajal51@gmail.com",
        }),
      });

      if (!res.ok) {
        alert("Failed to create Razorpay order. Please try again.");
        return;
      }

      const data = await res.json();

      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "rzp_test_dummy",
        amount: data.amount,
        currency: data.currency,
        name: "SmartBriefs Pro",
        description: "Premium Course Access",
        image: "/logo.png",
        order_id: data.id,
        handler: function (response: any) {
          setPaymentSuccess(true);
          console.log("Payment successful:", response);
        },
        prefill: {
          name: "Kajal Kasaudhan",
          email: "kasaudhankajal51@gmail.com",
          contact: "6387486751",
        },
        theme: {
          color: currentColors.primary,
          backdrop_color: theme === "dark" ? "#0a192fdd" : "#e0f2fedd",
        },
        timeout: 300,
        retry: {
          enabled: true,
          max_count: 2,
        },
      };

      if (activeMethod === "upi") {
        options.method = "upi";
        options.upi = {
          flow: "collect",
          vpa: isValidUpiId(upiId) ? upiId : undefined,
        };
      } else if (activeMethod === "card") {
        options.method = "card";
      } else if (activeMethod === "netbanking") {
        options.method = "netbanking";
      } else if (activeMethod === "wallet") {
        options.method = "wallet";
      }

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response);
        alert(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment processing");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-white"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800"
      }`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1 + 0.05,
              background: `radial-gradient(circle, ${currentColors.primary}, transparent 70%)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-6 transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-indigo-100"
            }`}
          >
            <Zap
              className={`transition-colors duration-300 ${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              }`}
              size={20}
            />
            <span
              className={`font-medium transition-colors duration-300 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Premium Access
            </span>
          </motion.div>
          <h1
            className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
            }`}
          >
            Unlock Your Potential
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of learners who transformed their skills with our premium courses
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2
                className={`text-3xl font-bold flex items-center gap-3 transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <Gem className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"} />
                What You'll Get
              </h2>

              <ul className="space-y-4">
                {[
                  "Full course library access",
                  "Downloadable resources",
                  "Certificate of completion",
                  "Priority support",
                  "Exclusive community access",
                  "Monthly expert Q&A sessions",
                ].map((benefit, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      className="mt-1 flex-shrink-0"
                      style={{ color: theme === "dark" ? "#60a5fa" : "#2563eb" }}
                      size={18}
                    />
                    <span
                      className={`transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              className={`p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-indigo-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"} />
                <h3
                  className={`font-medium transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Secure & Trusted
                </h3>
              </div>
              <p
                className={`text-sm transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Your payment is processed through Razorpay's secure gateway. We never store your payment details.
              </p>
            </div>
          </motion.div>

          {/* Payment Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <AnimatePresence>
              {showConfetti && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden rounded-2xl"
                >
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
                      animate={{
                        y: [0, -200],
                        x: Math.random() * 200 - 100,
                        opacity: 0,
                        rotate: Math.random() * 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeOut",
                        delay: i * 0.05,
                      }}
                      className="absolute"
                    >
                      <Sparkles
                        className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}
                        size={16}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className={`rounded-2xl p-8 border shadow-2xl backdrop-blur-sm transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-indigo-100"
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2
                    className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Premium Plan
                  </h2>
                  <p
                    className={`transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Lifetime Access
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-900/80 border-gray-700" : "bg-indigo-100/80 border-indigo-200"
                  }`}
                >
                  <Lock size={14} className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"} />
                  <span className={theme === "dark" ? "text-gray-200" : "text-gray-700"}>Secure</span>
                </div>
              </div>

              <div className="mb-8">
                <div
                  className={`text-5xl font-bold mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  ₹1
                  <span
                    className={`text-lg font-normal transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {" "}
                    / one time
                  </span>
                </div>
                <p
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  No recurring charges
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { method: "upi", icon: Smartphone, label: "UPI" },
                  { method: "card", icon: CreditCard, label: "Card" },
                  { method: "netbanking", icon: Banknote, label: "Netbanking" },
                  { method: "wallet", icon: WalletCards, label: "Wallets" },
                ].map(({ method, icon: Icon, label }) => (
                  <button
                    key={method}
                    onClick={() => setActiveMethod(method as any)}
                    className={`p-3 rounded-lg flex flex-col items-center transition-all duration-300 ${
                      activeMethod === method
                        ? theme === "dark"
                          ? "bg-gray-700/80 border-gray-600"
                          : "bg-indigo-100/80 border-indigo-200"
                        : theme === "dark"
                        ? "bg-gray-900/50 hover:bg-gray-800/50"
                        : "bg-white/50 hover:bg-indigo-50/50"
                    }`}
                    style={{
                      borderColor:
                        activeMethod === method
                          ? theme === "dark"
                            ? "#60a5fa"
                            : "#2563eb"
                          : "transparent",
                    }}
                  >
                    <Icon
                      size={20}
                      className={`mb-1 transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    />
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>

           

              {/* Pay Now Button */}
              <motion.button
                onClick={handlePayment}
                disabled={isLoading || paymentSuccess}
                whileHover={
                  !isLoading && !paymentSuccess ? { scale: 1.02 } : {}
                }
                whileTap={!isLoading && !paymentSuccess ? { scale: 0.98 } : {}}
                className={`
                  w-full py-4 px-6 rounded-xl
                  font-medium text-lg
                  transition-all duration-300
                  relative overflow-hidden
                  flex items-center justify-center gap-3
                  ${
                    paymentSuccess
                      ? "bg-emerald-600 cursor-default"
                      : isLoading
                      ? "cursor-wait"
                      : "cursor-pointer shadow-lg"
                  }
                `}
                style={{
                  background: paymentSuccess
                    ? currentColors.success
                    : isLoading
                    ? currentColors.primaryDark
                    : `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.primaryDark})`,
                  color: theme === "dark" ? "#ffffff" : "#ffffff",
                }}
              >
                {paymentSuccess ? (
                  <>
                    <CheckCircle className="animate-pulse" size={22} />
                    <span>Payment Successful!</span>
                  </>
                ) : (
                  <>
                    {isLoading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className={`block w-5 h-5 border-2 border-white border-t-transparent rounded-full`}
                      />
                    ) : (
                      <WalletCards size={22} />
                    )}
                    <span>{isLoading ? "Processing..." : "Pay Now"}</span>
                  </>
                )}
              </motion.button>

              {/* Payment Timeout Warning */}
              {paymentTimeout && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg text-sm flex items-start gap-2 transition-colors duration-300`}
                  style={{
                    background: currentColors.warningBg,
                    border: `1px solid ${currentColors.warningBorder}`,
                  }}
                >
                  <Info
                    className={`mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                      theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                    }`}
                    size={16}
                  />
                  <div>
                    <p
                      className={`font-medium transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Payment taking longer than usual?
                    </p>
                    <p
                      className={`transition-colors duration-300 ${
                        theme === "dark" ? "text-yellow-300" : "text-yellow-700"
                      }`}
                    >
                      Please check your payment app for pending requests or try again.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Payment Tips */}
              <div
                className={`p-4 rounded-lg border mt-6 transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-indigo-100"
                }`}
              >
                <h4
                  className={`font-medium flex items-center gap-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  <Info size={18} /> Payment Tips
                </h4>
                <ul
                  className={`list-disc list-inside text-sm mt-2 space-y-1 pl-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li>Keep your payment app open during transaction</li>
                  <li>Ensure sufficient balance in your account</li>
                  <li>Check for payment notifications if delayed</li>
                  <li>Try again after 2 minutes if timeout occurs</li>
                </ul>
              </div>

              {/* Guarantees */}
              <div
                className={`mt-8 pt-6 border-t transition-colors duration-300 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <ul
                  className={`space-y-3 text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {[
                    "7-day money back guarantee",
                    "Instant access after payment",
                    "Cancel anytime",
                  ].map((guarantee, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle
                        style={{ color: theme === "dark" ? "#60a5fa" : "#2563eb" }}
                        size={16}
                      />
                      <span>{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-24"
        >
          <h3
            className={`text-center text-xl mb-8 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Trusted by 10,000+ learners
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "SmartBriefs is a great way to stay updated without feeling overwhelmed. The summaries are clear, relevant, and save me a lot of time.",
                author: "Kajal Kasaudhan",
                email: "kasaudhankajal51@gmail.com",
              },
              {
                quote: "SmartBriefs keeps me informed and inspired every day. I’ve discovered so many great ideas through these summaries—it’s part of my daily routine now!",
                author: "Anchal",
                email: "anchalkasaudhan007@gmail.com",
              },
              {
                quote: "Why read a whole book when a 10-minute summary gives you all the gold? SmartBriefs fits perfectly into my 'less but better' lifestyle.",
                author: "Priya Singh",
                email: "priyasingh48@gmail.com",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-indigo-100"
                }`}
              >
                <div
                  className={`text-yellow-400 mb-2 transition-colors duration-300 ${
                    theme === "dark" ? "text-yellow-300" : "text-yellow-400"
                  }`}
                >
                  ★★★★★
                </div>
                <p
                  className={`italic mb-4 transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  "{testimonial.quote}"
                </p>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  — {testimonial.author} ({testimonial.email})
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}