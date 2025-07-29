import { Rocket } from '@carbon/icons-react';

function PromptForm({ message, onChange, onSubmit, disabled }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Deskripsikan kode yang ingin kamu buat..."
          value={message}
          onChange={onChange}
          disabled={disabled}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          disabled={disabled}
        >
          <Rocket size={22} />
        </button>
      </form>
    </div>
  );
}

export default PromptForm;
