const Cart = ({ item }) => {
  return (
    <div
      className='min-w-[220px] sm:min-w-[280px] md:min-w-[320px] 
      h-[40vh] sm:h-[45vh] md:h-[50vh] 
      border bg-[#DDDDDD] rounded-2xl p-4 sm:p-6 
      flex flex-col justify-between shadow-sm'
    >
      <div>
        <div className='flex items-center gap-3'>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${item.color}`} />
          <p className='text-sm sm:text-base font-medium text-gray-700'>{item.title}</p>
        </div>
        <p className='mt-3 sm:mt-4 text-base sm:text-lg leading-snug text-gray-800'>{item.text}</p>
      </div>

      <button 
        type="button" 
        className='mt-6 flex items-center justify-between bg-[#FFFFFF] 
        px-3 py-2 rounded-full shadow-sm text-sm sm:text-base'
      >
        <span className='text-gray-600'>{item.tag}</span>
        <span>→</span>
      </button>
    </div>
  );
};

export default Cart;