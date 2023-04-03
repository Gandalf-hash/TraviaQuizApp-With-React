import React from "react";
import App from "./app";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { db } from "./Data/firebase";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);

async function readAllUsers() {
  try {
    const snapshort = await db.collection("users").get();

    console.log(`Found ${snapshort.size} x user(s).`);
    const doc = snapshort.docs;
    doc.forEach((docSnapshort) => {
      console.log(docSnapshort.id, docSnapshort.data());
    });

  } catch(err) {
    console.log(err);
  }

}
readAllUsers();