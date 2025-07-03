

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ArchiveLayout({archive,latest}:any) {
  console.log("layouyr",archive);
  
  return (
    <div className="min-h-screen bg-black text-white  px-30">
        <h1 className="text-2xl p-1 pb-3">News Archive</h1>
       {archive}
        <hr className="my-6 border-t-2 border-gray-600" />
       {latest}
    </div>
  );
}
