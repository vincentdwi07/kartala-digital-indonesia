export default function Home() {  
  const BASE_URL = process.env.NEXT_API_BASE_URL
  console.log(BASE_URL)

  return (
    <>
      <h1>{BASE_URL}</h1>
    </>  
  );
}
