
function About() {
  return (
    <section className="bg-[#E1EBED] m-5 -mt-5">
      <section>
    <div>
      <h2 className="text-[#331c52] font-bold text-3xl p-5">About Me</h2>
    </div>
  
    <div className="-mt-5 flex sm:items-center w-full">
  <p className="text-[#331c52] p-5 w-full sm:w-1/2 sm:z-10">
    Après avoir passé plus de 3 ans dans le consulting et près de 5 ans dans le domaine des ressources humaines, j'ai décidé de me reconvertir dans le développement web, une passion qui m'anime depuis toujours. Mon objectif est de créer des applications web performantes et intuitives qui répondent aux besoins des utilisateurs.
  </p>

  <div className="hidden sm:block sm:w-1/2">
    <img src="/code.svg" alt="baliseHtml" className="w-full h-50 opacity-20" />
  </div>
</div>
    </section>
  
    <div className="flex flex-col items-end w-full">
      <h2 className="text-[#331c52] font-bold text-3xl mr-6">Mes compétences</h2>
      <p className="text-[#331c52] font-bold text-xl mb-6 mr-5">Stacks récemment utilisés :</p>
    </div>
  
    <section className="flex w-full items-center px-3 py-4">
  {/* Colonne gauche avec le logo Merge */}
  <div className="w-1/2 flex md:justify-center md:items-center md:ml-5">
    <img src="/mergelogo.svg" alt="Merge Logo" className="h-32 opacity-20 max-w-full" />
  </div>

  {/* Colonne droite avec 2 lignes de 3 logos */}
  <div className="w-1/2 grid grid-cols-3 gap-4 place-items-center">
    <img src="/logojavascript.svg" alt="JavaScript Logo" className="bg-[#331c52] h-12 p-2 rounded-sm" />
    <img src="/htmllogo.svg" alt="HTML Logo" className="bg-[#331c52] h-12 p-1 rounded-sm" />
    <img src="/csslogo.svg" alt="CSS Logo" className="bg-[#331c52] h-12 p-1 rounded-sm" />
    <img src="/react.svg" alt="React Logo" className="bg-[#331c52] h-12 w-12 p-1 rounded-sm" />
    <img src="/jsonlogo.svg" alt="JSON Logo" className="bg-[#331c52] h-12 p-1 rounded-sm" />
    <img src="/vscodelogo.svg" alt="VSCode Logo" className="bg-[#331c52] h-12 p-1 rounded-sm" />
  </div>
</section>





    
  </section>
  
  );
}
export default About;