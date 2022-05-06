const Contact = () => {
  return (
    <div className='bg-white shadow-md rounded-xl p-4 space-y-4'>
      <p className='text-purple-500 font-bold text-lg'>Contact information</p>
      <div>
        <p>Email</p>
        <p className='text-sm text-gray-500'>milad.rahimi1919@gmail.com</p>
      </div>
      <div>
        <p>Phone</p>
        <p className='text-sm text-gray-500'>0989912383121</p>
      </div>
      <div>
        <p>Github</p>
        <a href='https://github.com/Milad25' className='text-sm text-gray-500'>
          github.com/Milad25
        </a>
      </div>
    </div>
  );
};

export default Contact;
