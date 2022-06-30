import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className="error">
      <h2>404 </h2>
      <p>page not found</p>
      <Link to={'/'}>Back to Home</Link>
    </section>
  );
}
