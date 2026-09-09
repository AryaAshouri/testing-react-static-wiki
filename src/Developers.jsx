import { useState } from "react";
import "./Developers.css";

const asset = (path) => `${import.meta.env.BASE_URL}public/${path}`;

function Developers() {
    const [selectedDeveloper, setSelectedDeveloper] = useState(null);
    const [previewType, setPreviewType] = useState("normal");
    const [isClosing, setIsClosing] = useState(false);

    const developers = [
        {
            name: "Arya",
            image: asset("developers/cards/Arya.png"),
            classImage: asset("developers/class/Designer.png"),
            code: 60,
            art: 50,
            design: 70,
            normalVideo: asset("developers/preview/normal/Arya.mp4"),
            abilityVideo: asset("developers/preview/ability/Arya.mp4"),
        },
        {
            name: "Esmail",
            image: asset("developers/cards/Esmail.png"),
            classImage: asset("developers/class/Programmer.png"),
            code: 60,
            art: 40,
            design: 60,
            normalVideo: asset("developers/preview/normal/Esmail.mp4"),
            abilityVideo: asset("developers/preview/ability/Esmail.mp4"),
        },
        {
            name: "Sadra",
            image: asset("developers/cards/Sadra.png"),
            classImage: asset("developers/class/Artist.png"),
            code: 20,
            art: 90,
            design: 50,
            normalVideo: asset("developers/preview/normal/Sadra.mp4"),
            abilityVideo: asset("developers/preview/ability/Sadra.mp4"),
        },
        {
            name: "Ario",
            image: asset("developers/cards/Ario.png"),
            classImage: asset("developers/class/Programmer.png"),
            code: 90,
            art: 20,
            design: 40,
            normalVideo: asset("developers/preview/normal/Ario.mp4"),
            abilityVideo: asset("developers/preview/ability/Ario.mp4"),
        },
    ];

    function openPreview(developer) {
        setSelectedDeveloper(developer);
        setPreviewType("normal");
        setIsClosing(false);
    }

    function closePreview() {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedDeveloper(null);
            setIsClosing(false);
        }, 450);
    }

    return (
        <>
            <div id="developers-container">
                {developers.map((developer) => (
                    <div className="developer-card-container" key={developer.name}>
                        <img
                            className="developer-card-image"
                            src={developer.image}
                            alt={developer.name}
                        />

                        <div
                            className="developer-card-hover"
                            style={{
                                backgroundImage: `url(${asset(
                                    "developers/cards/blank_card.png"
                                )})`,
                            }}
                        >
                            <div className="developer-card-title">
                                <span>{developer.name}</span>
                                <img src={developer.classImage} alt="class" />
                            </div>

                            <div className="developer-stats">
                                <div className="developer-stat">
                                    <img
                                        src={asset("developers/stat/code.png")}
                                        alt="Code"
                                    />
                                    <span>{developer.code}</span>
                                    <div className="developer-progress">
                                        <div
                                            className="developer-progress-fill"
                                            style={{
                                                width: `${developer.code}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="developer-stat">
                                    <img
                                        src={asset("developers/stat/art.png")}
                                        alt="Art"
                                    />
                                    <span>{developer.art}</span>
                                    <div className="developer-progress">
                                        <div
                                            className="developer-progress-fill"
                                            style={{
                                                width: `${developer.art}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="developer-stat">
                                    <img
                                        src={asset("developers/stat/design.png")}
                                        alt="Design"
                                    />
                                    <span>{developer.design}</span>
                                    <div className="developer-progress">
                                        <div
                                            className="developer-progress-fill"
                                            style={{
                                                width: `${developer.design}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="developer-preview-button"
                                onClick={() => openPreview(developer)}
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedDeveloper && (
                <div
                    className={`developer-popup-overlay ${isClosing ? "closing" : ""
                        }`}
                >
                    <div
                        className={`developer-popup ${isClosing ? "developer-popup-closing" : ""
                            }`}
                    >
                        <button
                            className="developer-close-button"
                            onClick={closePreview}
                        >
                            ×
                        </button>

                        <div className="developer-video-container">
                            <video
                                key={previewType}
                                src={
                                    previewType === "normal"
                                        ? selectedDeveloper.normalVideo
                                        : selectedDeveloper.abilityVideo
                                }
                                autoPlay
                                loop
                                muted
                                controls
                            />
                        </div>

                        <div className="developer-preview-buttons">
                            <button
                                className={
                                    previewType === "normal" ? "active" : ""
                                }
                                onClick={() => setPreviewType("normal")}
                            >
                                Normal
                            </button>

                            <button
                                className={
                                    previewType === "ability" ? "active" : ""
                                }
                                onClick={() => setPreviewType("ability")}
                            >
                                Ability
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Developers;