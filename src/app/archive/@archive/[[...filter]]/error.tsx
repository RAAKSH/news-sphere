"use client";

export default function Error({ error }) {
  return (
    <>
      <h1>Error Occured</h1>
      <p>{error.message}</p>
    </>
  );
}
