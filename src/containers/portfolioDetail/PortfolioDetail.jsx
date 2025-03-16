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
