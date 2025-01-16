export default function Languages() {
    const languages = ['English', 'Tamil', 'Kannada', 'Hindi']
  
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
              {language}
            </span>
          ))}
        </div>
      </section>
    )
  }
  
  