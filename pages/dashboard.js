import withAuth from '../lib/withAuth';
import MarketFeed from '../components/MarketFeed';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Finpilot – Panel Użytkownika</h1>
      <MarketFeed />
    </div>
  );
}

export default withAuth(Dashboard);
