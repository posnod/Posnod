export default function TopikPage() {
  const topics = [
    {
      title: 'Sains & Penelitian',
      color: 'bg-blue-500',
      text: 'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.',
      tag: 'Memahami emosi, Kepribadian …',
    },
    {
      title: 'Lingkungan & Keberlanjutan',
      color: 'bg-green-500',
      text: 'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.',
      tag: 'Memahami emosi, Kepribadian …',
    },
    {
      title: 'Psikologi & Kepribadian',
      color: 'bg-pink-500',
      text: 'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.',
      tag: 'Memahami emosi, Kepribadian …',
    },
  ];

  return (
    <>
      {/* ========== SECTION TITLE ========== */}
      <div className='px-8 mt-8'>
        <h2 className='text-lg font-semibold flex items-center gap-2'>
          <span className='text-xl'>◎</span> Topik
        </h2>
      </div>

      {/* ========== CARD LIST ========== */}
      <div className='mt-6 px-8 pb-12'>
        <div className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide'>
          {topics.map((item, idx) => (
            <div
              key={idx}
              className='min-w-[280px] sm:min-w-[320px] h-[50vh] border bg-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm'
            >
              <div>
                {/* Icon & Title */}
                <div className='flex items-center gap-3'>
                  <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
                  <p className='text-sm font-medium text-gray-700'>{item.title}</p>
                </div>

                {/* Text */}
                <p className='mt-4 text-lg leading-snug text-gray-800'>{item.text}</p>
              </div>

              {/* Tag + Arrow */}
              <div className='mt-6 flex items-center justify-between'>
                <span className='text-sm text-gray-600'>{item.tag}</span>
                <button className='w-8 h-8 rounded-full bg-white shadow flex items-center justify-center'>→</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== FOOTER MINI AVATARS ========== */}
      <div className='w-full flex justify-center gap-2 pb-8'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className='w-8 h-8 rounded-full bg-gray-300 border'
          ></div>
        ))}
      </div>
    </>
  );
}
