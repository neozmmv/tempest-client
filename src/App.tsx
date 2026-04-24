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

  function sendMessage(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = (event.target as any)[0].value;
    // alert just to check
    // alert(`Message sent: ${message}`);
    event.target.reset();
  }

  return (
    <main className="bg-zinc-900 w-full min-h-screen flex relative">
      <div className="min-h-screen lg:w-128 md:w-48 border-r border-zinc-800 rounded-r-lg bg-zinc-900"></div>
      <div className="relative w-full">
        {/* chat component? */}
        <div className="absolute top-[90%] w-full flex justify-center">
          <div className="rounded-2xl bg-[#0b0b0b] w-[85%] h-16 flex">
            <form className="flex w-full" onSubmit={(e) => sendMessage(e)}>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full h-full p-4 focus:outline-none"
              ></input>
              {/* change to icon */}
              <button
                className="bg-blue-500 text-white px-8 rounded-r-lg cursor-pointer"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* ends here */}
      </div>
    </main>
  );
}
