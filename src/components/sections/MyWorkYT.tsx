import React from 'react'

type MyWork = {
    dict: {
        videoTitle: string;
        videoDesc: string
    }

}

function MyWorkYT({ dict }: MyWork) {
    return (
        <section id="media" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-6 text-center">{dict.videoTitle}</h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                {dict.videoDesc}
            </p>

            {/* Contenedor de Video Responsivo */}
            <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/-uvAZ7Nbnm8"
                    title="Presentación de Servicios"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default MyWorkYT