import { useEffect, useState } from 'react';

export default function MarketFeed() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('/api/market');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Błąd pobierania danych rynkowych:', err);
      }
    };

    fetchPrices();
  }, []);

  if (!data) return <p>Ładowanie danych rynkowych...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">📊 Dane rynkowe</h2>
      <ul className="space-y-2">
        <li>💰 Bitcoin (BTC): ${data.btc} USD</li>
        <li>🥇 Złoto (XAU): ${data.gold} USD</li>
        <li>🛢️ Ropa (WTI): ${data.oil} USD</li>
      </ul>
    </div>
  );
}