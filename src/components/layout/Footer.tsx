export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-12 px-6 md:px-12 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold text-white tracking-tight">Ahmeed Gado</p>
                    <p className="text-sm text-gray-500 mt-1">AI Engineer · IoT Developer · Full-Stack Software Engineer</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/Ahmeed-Gado" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ahmed-jado-88a932365/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                        LinkedIn
                    </a>
                    <a href="mailto:gado21774@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                        Email
                    </a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 text-center md:text-left text-xs text-gray-600">
                &copy; {currentYear} Ahmeed Gado. Built with Next.js, Tailwind CSS & AI Engineering.
            </div>
        </footer>
    );
}
