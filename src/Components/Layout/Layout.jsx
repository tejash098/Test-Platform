import { NavLink } from "react-router-dom"


const Layout = () => {
  return (
    <main className="grow">
        <section className="bg-slate-900 text-white py-20 lg:py-32 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Master your <span className="text-sky-500">Code</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Test your knowledge in Python, JavaScript, and SQL. Level up your
              development skills with our curated quizzes.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-sky-500/20">
                Start Quiz
              </button>
              <a href="#Topic-Cards" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all border border-slate-700">
                View Topics
              </a>
            </div>
          </div>
        </section>

        <section id="Topic-Cards" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">
                Choose your path
              </h2>
              <p className="text-slate-600 mt-2">
                Select a technology to begin your assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Python Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 group">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">Py</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Python Quiz
                </h3>
                <p className="text-slate-600 mb-6">
                  Challenge yourself with questions on Data Structures, OOP, and
                  algorithms.
                </p>
                <NavLink to="/quiz/python" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1">
                  Take Quiz &rarr;
                </NavLink>
              </div>

              {/* JS Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 group">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">JS</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  JavaScript Quiz
                </h3>
                <p className="text-slate-600 mb-6">
                  Test your mastery of the DOM, ES6+ syntax, and asynchronous
                  programming.
                </p>
                <NavLink to="/quiz/js" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1">
                  Take Quiz &rarr;
                </NavLink>
              </div>

              {/* SQL Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 group">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">SQL</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  SQL Quiz
                </h3>
                <p className="text-slate-600 mb-6">
                  Prove your skills in complex queries, joins, normalization,
                  and database design.
                </p>
                <NavLink to="/quiz/sql" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1">
                  Take Quiz &rarr;
                </NavLink>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 group">
                <div className="w-16 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">React</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  React Quiz
                </h3>
                <p className="text-slate-600 mb-6">
                  Test your React knowledge with our interactive quiz.  
                </p>
                <NavLink to="/quiz/react" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-1">
                  Take Quiz &rarr;
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">50+</div>
              <div className="text-slate-400">Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">10+</div>
              <div className="text-slate-400">Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">3</div>
              <div className="text-slate-400">Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">Free</div>
              <div className="text-slate-400">Forever</div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Layout
