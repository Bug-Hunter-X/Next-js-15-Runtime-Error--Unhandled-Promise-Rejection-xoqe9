```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error if the fetch fails
  const data = fetch('/api/data');

  return (
    <div>This is the About Page. {JSON.stringify(data)}</div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  // Simulate a network error or delay
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Failed to fetch data' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```