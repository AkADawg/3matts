import Head from "next/head";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitRequest = () => {
    const createUser = async () => {
      // Get the token from client-side storage and pass in request
      await axios
        .post("/api/user", { email: email })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    createUser();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextJS Playground</h1>
        <br />
        <Link href="/"> Click to see all users</Link>
        <Link href="/remove">Click to remove a user</Link>
        <p>current defect: adding a name fails the request</p>
        <h2>Test POST request</h2>
        <h2>Add a user</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="button" onClick={onSubmitRequest}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
