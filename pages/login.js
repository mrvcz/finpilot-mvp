import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {user ? (
        <>
          <p className="mb-4">Zalogowany jako {user.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Wyloguj się
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Zaloguj się do Finpilot</h1>
          <button
            onClick={login}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Zaloguj przez Google
          </button>
        </>
      )}
    </div>
  );
}