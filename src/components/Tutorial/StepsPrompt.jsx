function StepsPrompt() {
  return (
    <div className="bg-white shadow-md rounded-xl px-12 py-8 border border-gray-200 w-full max-w-4xl mb-10">
      <ol className="relative border-s border-gray-300 space-y-10">
        {[
          {
            title: 'Tentukan Tujuan Prompt',
            desc: 'Tentukan dengan jelas apa yang ingin kamu minta. Contoh: "Buat fungsi validasi email dalam JavaScript."',
          },
          {
            title: 'Gunakan Bahasa yang Spesifik',
            desc: 'Hindari kata-kata umum. Jelaskan bahasa pemrograman, fungsi yang diinginkan, atau konteks penggunaannya.',
          },
          {
            title: 'Berikan Format Output yang Diinginkan',
            desc: 'Contoh: "Sertakan contoh input dan output serta penjelasan singkat."',
          },
          {
            title: 'Periksa Kejelasan Prompt',
            desc: 'Pastikan tidak ambigu. Hindari permintaan multitugas dalam satu prompt.',
          },
          {
            title: 'Uji & Perbaiki Prompt',
            desc: 'Coba prompt dan evaluasi hasilnya. Jika belum sesuai, perbaiki dengan menambahkan detail atau menyederhanakan kalimat.',
          },
        ].map((step, i) => (
          <li key={i} className="ms-6">
            <span className="absolute -start-3.5 flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full ring-8 ring-white text-white font-semibold text-md">
              {i + 1}
            </span>
            <h3 className="text-md font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StepsPrompt;
