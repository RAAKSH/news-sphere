"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Error({ error }:any) {
  return (
    <>
      <h1>Error Occured</h1>
      <p>{error.message}</p>
    </>
  );
}
