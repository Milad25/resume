import profile from '../profile.JPG';

const Header = () => {
  return (
    <div className='bg-white flex items-center py-4 px-6 justify-between mb-7'>
      <div className='flex items-center'>
        <div className='rounded-full overflow-hidden'>
          <img width={70} height={70} src={profile} alt='profile-photo' />
        </div>
        <p className='text-green-600 font-extrabold text-xl md:text-3xl ml-3'>
          Milad Rahimi
        </p>
      </div>

      <p className='text-sm md:text-base text-slate-700 font-semibold'>
        Front-end developer
      </p>
    </div>
  );
};

export default Header;
