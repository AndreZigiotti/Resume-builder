import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { firebaseConfig } from "@app/firebase-config"

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getDatabase(firebaseApp)

export async function insertUser(uid: string, name: string, email: string) {
  return set(ref(db, `users/${uid}`), { name, email })
}

export async function registerWithEmailAndPassword(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logInWithEmailAndPassword(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function sendPasswordReset(email: string) {
  return sendPasswordResetEmail(auth, email)
}

export function logout() {
  return signOut(auth)
}