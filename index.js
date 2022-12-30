import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [playlistInput, setPlaylistInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlist: playlistInput }),
    });
    const data = await response.json();
    
    setResult(data.result);
    setPlaylistInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Create a Spotify Playlist</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="playlist"
            placeholder="Enter a playlist"
            value={playlistInput}
            onChange={(e) => setPlaylistInput(e.target.value)}
          />
          <input type="submit" value="Generate playlist" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
