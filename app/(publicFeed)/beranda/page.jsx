import ContentBranda from '@/components/feed/ContentBranda';

const Beranda = () => {
  const topics = [
    { title:'Sains & Penelitian', color:'bg-blue-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Lingkungan & Keberlanjutan', color:'bg-green-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Psikologi & Kepribadian', color:'bg-pink-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Teknologi & Inovasi', color:'bg-purple-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Kesehatan & Kebugaran', color:'bg-red-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Seni & Kreativitas', color:'bg-yellow-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Sejarah & Budaya', color:'bg-indigo-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
    { title:'Ekonomi & Bisnis', color:'bg-teal-500', text:'Karena memahami orang lain dimulai dari ngobrol sama diri sendiri.', tag:'Memahami emosi…' },
  ];

  return (
    <>
      <div className='mt-6 px-8 pb-12'>
        <ContentBranda topics={topics} />
      </div>

      <div className='w-full flex justify-center gap-2 pb-8'>
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} className='w-8 h-8 rounded-full bg-gray-300 border'></div>
        ))}
      </div>
    </>
  );
};

export default Beranda;
