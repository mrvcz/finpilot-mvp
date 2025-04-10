export default async function handler(req, res) {
  const { input } = req.body;
  // Tu możesz dodać logikę OpenAI / LangChain lub mock
  const reply = `Przeanalizowano dane: ${input}. Sugerujemy obniżyć wydatki na restauracje o 20%.`;
  res.status(200).json({ reply });
}