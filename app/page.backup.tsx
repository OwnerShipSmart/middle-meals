"use client";

import { useState } from "react";

export default function Home() {
  const [deals, setDeals] = useState([
    {
      name: "Big Mac",
      place: "McDonald's",
      price: 4.99,
      old: 7.99,
      remaining: 3,
      saved: false,
    },
    {
      name: "Pizza Slice",
      place: "Pizza Pizza",
      price: 2.99,
      old: 5.5,
      remaining: 2,
      saved: false,
    },
  ]);

  const reserve = (i: number) => {
    const updated = [...deals];
    if (updated[i].remaining > 0) {
      updated[i].remaining--;
    } else {
      alert("Sold out");
    }
    setDeals(updated);
  };

  const toggleSave = (i: number) => {
    const updated = [...deals];
    updated[i].saved = !updated[i].saved;
    setDeals(updated);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ color: "#e11d48" }}>Middle Meals</h1>

      {deals.map((d, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <h3>{d.name}</h3>
          <p>{d.place}</p>

          <p>
            <b>${d.price}</b>{" "}
            <span style={{ textDecoration: "line-through", color: "#888" }}>
              ${d.old}
            </span>
          </p>

          <p style={{ color: "#e11d48" }}>
            Save ${(d.old - d.price).toFixed(2)}
          </p>

          <p>{d.remaining} left</p>

          <button onClick={() => reserve(i)}>Reserve</button>
          <button onClick={() => toggleSave(i)}>
            {d.saved ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
}
