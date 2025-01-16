export default function Skills() {
    const skills = ['C',  'C++', 'JAVA', 'HTML', 'JAVASCRIPT', 'CSS','BOOTSTRAP','NODE JS','MERN STACK','SQL','REDUX', 'EXCEL']
    const softSkills = ['Adaptability', 'Leadership', 'Analytical Thinking', 'Collaboration', 'Problem Solving']
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  