import { useState } from 'react';

export default function Budgetator() {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const getSuggestion = async () => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setSuggestion(data.reply);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
      <textarea
        className="w-full border p-2 rounded"
        rows="4"
        placeholder="Wpisz swoje miesięczne wydatki..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={getSuggestion}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generuj sugestię
      </button>
      {suggestion && <p className="mt-4 text-gray-700">{suggestion}</p>}
    </div>
  );
}