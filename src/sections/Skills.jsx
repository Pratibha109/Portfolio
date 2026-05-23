function Skills() {
    return(
        <section id="Skills" className="min-h-screen px-4 py-4 bg-amber-50">
            <h2 className="text-4xl font-bold mb-10">Skills</h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Languages</h3>
                    <p>Java</p>
                    <p>Javascript</p>
                </div>

                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Frontend</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React.js</p>
                    <p>Tailwind css</p>
                </div>

                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Backend</h3>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Springboot</p>
                </div>

                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Database</h3>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                </div>

                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Tools</h3>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Postman</p>
                    <p>VS code</p>
                </div>

                <div className="border p-6">
                    <h3 className="text-2xl mb-4">Concepts</h3>
                    <p>RESt APIs</p>
                    <p>JWT Authentication</p>
                    <p>OOPS</p>
                    <p>DSA</p>
                    <p>SDLC</p>
                </div>
            </div>
        </section>
    )
}

export default Skills