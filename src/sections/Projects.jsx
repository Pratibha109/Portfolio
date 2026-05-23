function Projects() {
    return(
        <section id="Projects" className=" px-8 py-18 bg-amber-50 ">
     {/* </section>   <section className="min-h-screen px-8 py-20 bg-amber-50 "> */}
            <h2 className="text-4xl font-bold mb-4">Projects</h2>

            <div className="grid gap-8 mb-8">
                <h3 className="text-2xl font-bold mb-3">MERN E-Commerce platform</h3>
                <p className="mb-4">
                    Built a full-stack e-commerce website with authentication,
                    Rezopay payment integration, shopping cart, and admin dashboard.
                </p>
                <p>
                   React • Node.js • MongoDB • Express • Rezopay
                </p>
            </div>

            <div className="grid gap-8 ">
                <h3 className="text-2xl font-bold mb-3">Job Portal System</h3>
                <p className="mb-4">
                    Developed a job portal with resume upload, role recommendations, employer dashboard, and resume-job matching system.
                </p>
                <p>
                   Spring Boot • MySQL • Java • HTML • CSS
                </p>
            </div>
        </section>
    )
}

export default Projects