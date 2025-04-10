
function About() {
  return (
    <section className="bg-[#E1EBED] m-5 -mt-5">
    <div className="" >
      <h2 className="text-[#331c52] font-bold text-3xl m-5 p-5">About Me</h2>
    </div>
    <div className="m-5 -mt-5 flex justify-between">
      <p className="text-[#331c52] m-5 p-5">Après avoir passé plus de 3 ans dans le consulting et près de 5 ans dans le domaine des ressources humaines, j'ai décidé de me reconvertir dans le développement web, une passion qui m'anime depuis toujours. Mon objectif est de créer des applications web performantes et intuitives qui répondent aux besoins des utilisateurs.
      </p>
      <img src="/code.svg" alt="baliseHtml" className='h-50 m-5 opacity-20'/>
      </div>
      <div className="">
        <h2 className="text-[#331c52] font-bold text-3xl ml-6 p-5">Mes compétences</h2>
        <p className="text-[#331c52] font-bold text-xl ml-11 -mt-5">Stacks récemment utilises :</p>

      </div>
    </section>
  );
}
export default About;