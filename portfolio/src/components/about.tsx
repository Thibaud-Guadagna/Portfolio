
function About() {
  return (
    <section className="bg-[#E1EBED] m-5 -mt-5">
    <div>
      <h2 className="text-[#331c52] font-bold text-3xl m-5 p-5">About Me</h2>
    </div>
  
    <div className="m-5 -mt-5 flex justify-between">
      <p className="text-[#331c52] m-5 p-5">
        Après avoir passé plus de 3 ans dans le consulting et près de 5 ans dans le domaine des ressources humaines, j'ai décidé de me reconvertir dans le développement web, une passion qui m'anime depuis toujours. Mon objectif est de créer des applications web performantes et intuitives qui répondent aux besoins des utilisateurs.
      </p>
      <img src="/code.svg" alt="baliseHtml" className='h-50 m-5 opacity-20' />
    </div>
  
    <div className="flex flex-col items-end m-5">
      <h2 className="text-[#331c52] font-bold text-3xl">Mes compétences</h2>
      <p className="text-[#331c52] font-bold text-xl">Stacks récemment utilisés :</p>
    </div>
  
    
    <div className="flex justify-between items-center m-5 ">
      <img src="/mergelogo.svg" alt="Merge Logo" className='h-40 opacity-20 ml-20 mb-10' />
      
      <div className="flex flex-col items-end gap-2">
        <div className="flex gap-3 px-5 py-1">
          <img src="/logojavascript.svg" alt="JavaScript Logo" className='bg-[#331c52] h-12 p-2 rounded-sm' />
          <img src="/htmllogo.svg" alt="HTML Logo" className='bg-[#331c52] h-12 p-1 rounded-sm' />
          <img src="/csslogo.svg" alt="CSS Logo" className='bg-[#331c52] h-12 p-1 rounded-sm' />
        </div>
        <div className="flex gap-3 px-5 py-1">
          <img src="/react.svg" alt="React Logo" className='bg-[#331c52] h-12 w-12 p-1 rounded-sm' />
          <img src="/jsonlogo.svg" alt="JSON Logo" className='bg-[#331c52] h-12 p-1 rounded-sm' />
          <img src="/vscodelogo.svg" alt="VSCode Logo" className='bg-[#331c52] h-12 p-1 rounded-sm' />
        </div>
      </div>
    </div>
  </section>
  
  );
}
export default About;