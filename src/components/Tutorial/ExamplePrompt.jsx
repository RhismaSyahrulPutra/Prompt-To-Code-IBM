function ExamplePrompt() {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200 w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Contoh Prompt yang Baik dan Tujuannya
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            A. Untuk Membuat Fungsi
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
            Buat fungsi JavaScript bernama <code>isPalindrome</code> yang
            menerima string dan mengembalikan <code>true</code> jika string
            tersebut adalah palindrom. Sertakan contoh penggunaannya.
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            Digunakan untuk membuat fungsi spesifik dan menguji hasilnya.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            B. Untuk Menerjemahkan Kode
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
            Ubah kode Python berikut ke dalam JavaScript dan jelaskan perbedaan
            sintaksnya secara singkat.
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            Digunakan untuk membandingkan dua bahasa pemrograman dan memahami
            perbedaannya.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            C. Untuk Meringkas Teks
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
            Tuliskan ringkasan artikel ini dalam 3 kalimat dan tampilkan dalam
            format poin-poin.
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            Cocok untuk mengekstrak informasi penting dari artikel atau dokumen
            panjang.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            D. Untuk Membuat Desain atau Ide UI
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
            Buatkan ide desain landing page untuk aplikasi pencatat keuangan
            pribadi yang modern dan ramah pengguna.
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            Digunakan untuk mendapatkan inspirasi desain dan struktur UI.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">
            E. Untuk Testing & Debugging
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
            Temukan dan perbaiki bug pada kode berikut yang tidak bisa
            menghitung total belanja dengan benar.
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            Cocok untuk menganalisis kode yang error dan memberikan solusi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExamplePrompt;
