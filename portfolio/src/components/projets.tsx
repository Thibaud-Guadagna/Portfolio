import { useState, useEffect } from "react";

type Repo = {
  id: string;
  name: string;
  language?: string;
  html_url: string;
};

function Projets (){
    const [repos, setRepos] = useState<Repo[]>([]);
    
    useEffect( ()  => {fetch('https://api.github.com/users/Thibaud-Guadagna/repos')
    .then(response => response.json())
    .then(data => {
        setRepos(data);
    })}, []);

    return (
        <section className="bg-[#E1EBED] m-5 -mt-5">
          <div>
            <h2 className="text-[#331c52] font-bold text-3xl m-5 p-5">Mes Projets :</h2>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {repos.map(repo => (
              <div key= {repo.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
                <h3 className="text-[#331c52] font-semibold text-xl mb-2">{repo.name}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#331c52]">🧑‍💻 {repo.language}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

}

export default Projets;