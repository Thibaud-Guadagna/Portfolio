import logo from '../assets/logothib_4k.png';

function Header() {
  return (
    <header>
      <div className='p-25'>
        <img src='/logothib_4k.png' alt="logo" className='w-50'/>
      </div>
      <div>
        <nav>
          <ul className="flex justify-between text-white m-5 p-5 bg-[#8121d0] rounded-t-md ">
            <li>Accueil</li>
            <li>Projets</li>
            <li>Contact</li>
          </ul>
          <div className='bg-[#331c52] m-5 p-5 -mt-5 '>
            <h1 className='text-white text-2xl font-bold mb-2 ml-5'>Bonjour👋</h1>
            <h2 className='text-white/15 text-4xl mb-5 ml-5'>Je m'appelle Thibaud<br />Je suis développeur Web.</h2>
            <p className='text-white text-2xl ml-5'>Je construis des sites sur le Web.</p>
            <div className='flex'>
              <a href="https://www.linkedin.com/in/thibaud-guadagna-893124186/" target='_blank'>
                <img src="/ri--linkedin-fill.svg" alt="linkedin" className='w-10 h-10 ml-5 mt-5 bg-white p-2 rounded-full opacity-25'/>
              </a>
              <a href="https://github.com/Thibaud-Guadagna" target='_blank'>
                <img src="/mingcute--github-fill.svg" alt="GitHub" className='w-10 h-10 ml-5 mt-5 bg-white p-2 rounded-full opacity-25'/>
              </a>
            </div>
          </div>
          <section className='bg-[#291C3A] min-h-13 -mt-5 m-5 flex justify-between'>
             <div className='flex gap-3 ml-10 p-1'>
              <h2 className='text-white text-5xl font-bold'>4</h2>
              <h3 className='text-white'>Projets développés pour le moment</h3>
            </div>

              <div className='flex gap-3 p-1'>
                <img src="/logojavascript.svg" alt="JavaScript Logo" className='h-12 p-1' />
                <img src="/htmllogo.svg" alt="HTML Logo" className='h-12 p-1' />
                <img src="/csslogo.svg" alt="CSS Logo" className='h-12 p-1' />
                <img src="/react.svg" alt="React Logo" className='h-12 p-1' />
                <img src="/jsonlogo.svg" alt="JSON Logo" className='h-12 p-1' />
                <img src="/vscodelogo.svg" alt="VSCode Logo" className='h-12 p-1' />
              </div>
</section>

        </nav>
      </div>
    </header>
  );
}

export default Header;
