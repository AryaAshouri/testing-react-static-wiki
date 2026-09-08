import { useState } from "react";

function Cards() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [previewType, setPreviewType] = useState("normal");

    const cards = [
        {
            name: "Pawn",
            image: "/pieces/cards/pawn_card.png",
            classImage: "../public/class/class1.png",
            attack: 20,
            health: 50,
            knockback: 1,
            normalVideo: "/preview/normal/pawn.mp4",
            abilityVideo: "/preview/ability/pawn.mp4"
        },
        {
            name: "King",
            image: "/pieces/cards/king_card.png",
            classImage: "../public/class/class2.png",
            attack: 40,
            health: 100,
            knockback: 2,
            normalVideo: "/preview/normal/king.mp4",
            abilityVideo: "/preview/ability/king.mp4"
        },
        {
            name: "Queen",
            image: "/pieces/cards/queen_card.png",
            classImage: "../public/class/class1.png",
            attack: 90,
            health: 80,
            knockback: 3,
            normalVideo: "/preview/normal/queen.mp4",
            abilityVideo: "/preview/ability/queen.mp4"
        },
        {
            name: "Rook",
            image: "/pieces/cards/rook_card.png",
            classImage: "../public/class/class2.png",
            attack: 70,
            health: 90,
            knockback: 2,
            normalVideo: "/preview/normal/rook.mp4",
            abilityVideo: "/preview/ability/rook.mp4"
        },
        {
            name: "Knight",
            image: "/pieces/cards/knight_card.png",
            classImage: "../public/class/class3.png",
            attack: 60,
            health: 60,
            knockback: 2,
            normalVideo: "/preview/normal/knight.mp4",
            abilityVideo: "/preview/ability/knight.mp4"
        },
        {
            name: "Bishop",
            image: "/pieces/cards/bishop_card.png",
            classImage: "../public/class/class3.png",
            attack: 50,
            health: 70,
            knockback: 1,
            normalVideo: "/preview/normal/bishop.mp4",
            abilityVideo: "/preview/ability/bishop.mp4"
        }
    ];

    function openPreview(card) {
        setSelectedCard(card);
        setPreviewType("normal");
    }

    function closePreview() {
        setSelectedCard(null);
    }

    return (
        <>
            <div id="cards-container">
                {cards.map((card) => (
                    <div className="card-container" key={card.name}>

                        {/* Normal card */}
                        <img
                            className="card-image"
                            src={card.image}
                            alt={card.name}
                        />

                        {/* Card back shown on hover */}
                        <div className="card-hover">

                            <div className="card-title">
                                <span>{card.name}</span>
                                <img src={card.classImage} alt="class" />
                            </div>

                            <div className="stats">

                                <div className="stat">
                                    <img src="../public/stat/attack.png" alt="Attack" />
                                    <span>{card.attack}</span>

                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${card.attack}%`
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="stat">
                                    <img src="../public/stat/health.png" alt="Health" />
                                    <span>{card.health}</span>

                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${card.health}%`
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="stat">
                                    <img
                                        src="../public/stat/knockback.png"
                                        alt="Knockback"
                                    />

                                    <span>{card.knockback}</span>

                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${(card.knockback / 3) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>

                            <button
                                className="preview-button"
                                onClick={() => openPreview(card)}
                            >
                                Preview
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedCard && (
                <div className="popup-overlay">

                    <div className="popup">

                        <button
                            className="close-button"
                            onClick={closePreview}
                        >
                            ×
                        </button>

                        <div className="video-container">
                            <video
                                key={previewType}
                                src={
                                    previewType === "normal"
                                        ? selectedCard.normalVideo
                                        : selectedCard.abilityVideo
                                }
                                autoPlay
                                loop
                                muted
                                controls
                            />
                        </div>

                        <div className="preview-buttons">

                            <button
                                className={
                                    previewType === "normal"
                                        ? "active"
                                        : ""
                                }
                                onClick={() => setPreviewType("normal")}
                            >
                                Normal
                            </button>

                            <button
                                className={
                                    previewType === "ability"
                                        ? "active"
                                        : ""
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

export default Cards;