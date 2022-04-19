import React from 'react'
import composition from '../../assets/composition.mp4'
import './sobre.css'

function SobreNos() {
    return (
        <section id="sobrenos">
            <div className="title-container">
                <h1>Sobre Nós</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                </p>

                <div className="video">
                    <video>
                        <source src={composition} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default SobreNos
