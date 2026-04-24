import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

export default function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="bg-zinc-900 w-full min-h-screen flex">
      <div className="min-h-screen lg:w-64 md:w-48 border-r border-zinc-800 rounded-lg"></div>
    </main>
  );
}
