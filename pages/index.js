import Budgetator from '../components/Budgetator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Finpilot – Asystent Finansowy</h1>
      <Budgetator />
    </div>
  );
}