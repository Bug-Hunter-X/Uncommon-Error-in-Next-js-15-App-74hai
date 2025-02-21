```javascript
// pages/index.js
export default function Home() {
  // Fix the issue here, example:
  const [data, loading, error] = useSWR('/api/data'); //Example using SWR
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
       <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```