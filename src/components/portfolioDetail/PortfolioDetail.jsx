import PropTypes from 'prop-types';

const PortfolioDetail = ({ project, title, tags }) => {
  const siteProject = project
  return (
    <section>
      <div className="w-full px-4 md:px-8 mt-6">
        <div className="w-full text-[-jaune-dor] pb-5">
          <h1 className="w-full text-3xl font-bold md:text-4xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {!siteProject ? (
              <a
                href={tags}
                target="_blank"
                rel="noopener"
                className="inline-block px-6 py-3 text-1.5em font-bold rounded-[20px] border-2 border-[#614b3a] bg-font2-color text-black shadow-lg shadow-amber-400/60  transition-all hover:opacity-80"
              >
                GitHub
              </a>
            ) : (
              <>
                <a
                  href={project}
                  target="_blank"
                  rel="noopener"
                  className="inline-block px-6 py-3 text-1.5em font-bold rounded-[20px] border-2 border-[#614b3a] bg-font2-color text-black shadow-lg shadow-amber-400/60 transition-all hover:opacity-80"
                >
                  Site
                </a>
                <a
                  href={tags}
                  target="_blank"
                  rel="noopener"
                  className="inline-block px-6 py-3 text-1.5em font-bold rounded-[20px] border-2 border-[#614b3a] bg-font2-color text-black shadow-lg shadow-amber-400/60  transition-all hover:opacity-80"
                >
                  GitHub
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>



  )
}

PortfolioDetail.propTypes = {
  project: PropTypes.array,
  title: PropTypes.string.isRequired, // Validation pour la prop 'title'
  tags: PropTypes.array.isRequired,
};

export default PortfolioDetail;
/*
  
    */
/*
 <div className="w-full px-4 md:px-8 mt-6">
 <div className="flex justify-between items-center w-full text-yellow-500 pb-5 gap-2 md:gap-4">
   <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
   <img src="image.jpg" alt="Profile" className="w-16 md:w-12 sm:w-8 rounded-full object-cover" />
 </div>
 
 <div className="w-full pb-4 font-sans text-lg md:text-base">
   <h1 className="font-serif text-4xl font-bold leading-tight pb-2 md:text-3xl sm:text-xl">Sous-titre</h1>
   <a href="#" className="no-underline text-black bg-gray-300 border-2 border-gray-700 px-10 py-2 rounded-lg text-lg font-bold shadow-md hover:shadow-sm md:px-8 md:text-base sm:px-6 sm:text-sm">Lien</a>
 </div>
 
" <div className="flex flex-wrap items-center gap-4>
   <a href="#" className="p-2 text-2xl">Lien 1</a>
   <a href="#" className="p-2 text-2xl">Lien 2</a>
 </div>
</div>*/