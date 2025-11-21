import React from "react"
import { View, Text } from "react-native"
import SignupPage from "./components/Signup"
import HomePage from "./components/Home"

export default function App() {

    const user = null;

    if (user) {
        return <HomePage />
    }

    return <SignupPage />
}
