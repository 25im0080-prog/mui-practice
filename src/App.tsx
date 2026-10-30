export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700 text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">mui-practice</h1>
        <p className="text-slate-300 mb-6">
          Vite + React + TypeScript + Tailwind CSS のセットアップが完了しました！
        </p>
        <button
          onClick={() => alert('Tailwind CSS 動作確認 OK!')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
        >
          動作テスト
        </button>
      </div>
    </div>
  )
}