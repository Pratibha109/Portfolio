function Hero() {
    return(
        <section className="flex flex-col justify-center text-center px-4 py-4 bg-amber-50">
            <h1 className="text-6xl font-bold">
                Hii, I'm Pratibha.
            </h1>

            {/* <p className="mt-4 text-xl">
                Full Stack Developer crafting modern web experiences with MERN stack and creative UI design.

                I enjoy building responsive applications, solving problems, and mixing creativity with development.
            </p> */}

            <div className="flex gap-4 mt-6 flex-wrap justify-center">
                <span className="border border-black px-4 py-1 rounded-full">MERN stack</span>
                <span className="border border-black px-4 py-1 rounded-full">JAVA</span>
                <span className="border border-black px-4 py-1 rounded-full">REST APIs</span>
                <span className="border border-black px-4 py-1 rounded-full">Creative UI</span>
            </div>
        </section>
    )
}

export default Hero