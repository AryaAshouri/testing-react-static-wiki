import { useState } from "react";
import "./Cards.css";

const asset = (path) => `${import.meta.env.BASE_URL}public/${path}`;

function Cards() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [previewType, setPreviewType] = useState("normal");
    const [isClosing, setIsClosing] = useState(false);

    const cards = [
        {
            name: "Pawn",
            image: asset("pieces/cards/pawn_card.png"),
            classImage: asset("class/class1.png"),
            power: 15,
            defense: 50,
            knockback: 1,
            normalVideo: asset("preview/normal/pawn.mp4"),
            abilityVideo: asset("preview/ability/pawn.mp4"),
        },
        {
            name: "King",
            image: asset("pieces/cards/king_card.png"),
            classImage: asset("class/class2.png"),
            power: 7,
            defense: 100,
            knockback: 3,
            normalVideo: asset("preview/normal/king.mp4"),
            abilityVideo: asset("preview/ability/king.mp4"),
        },
        {
            name: "Queen",
            image: asset("pieces/cards/queen_card.png"),
            classImage: asset("class/class1.png"),
            power: 12,
            defense: 80,
            knockback: 2,
            normalVideo: asset("preview/normal/queen.mp4"),
            abilityVideo: asset("preview/ability/queen.mp4"),
        },
        {
            name: "Rook",
            image: asset("pieces/cards/rook_card.png"),
            classImage: asset("class/class2.png"),
            power: 9,
            defense: 90,
            knockback: 3,
            normalVideo: asset("preview/normal/rook.mp4"),
            abilityVideo: asset("preview/ability/rook.mp4"),
        },
        {
            name: "Knight",
            image: asset("pieces/cards/knight_card.png"),
            classImage: asset("class/class3.png"),
            power: 13,
            defense: 60,
            knockback: 2,
            normalVideo: asset("preview/normal/knight.mp4"),
            abilityVideo: asset("preview/ability/knight.mp4"),
        },
        {
            name: "Bishop",
            image: asset("pieces/cards/bishop_card.png"),
            classImage: asset("class/class3.png"),
            power: 13,
            defense: 75,
            knockback: 2,
            normalVideo: asset("preview/normal/bishop.mp4"),
            abilityVideo: asset("preview/ability/bishop.mp4"),
        },
    ];

    function openPreview(card) {
        setSelectedCard(card);
        setPreviewType("normal");
        setIsClosing(false);
    }

    function closePreview() {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedCard(null);
            setIsClosing(false);
        }, 450);
    }

    return (
        <>
            <div id="cards-container">
                {cards.map((card) => (
                    <div className="card-container" key={card.name}>
                        <img className="card-image" src={card.image} alt={card.name} />

                        <div
                            className="card-hover"
                            style={{
                                backgroundImage: `url(${asset("pieces/cards/blank_card.png")})`,
                            }}
                        >
                            <div className="card-title">
                                <span>{card.name}</span>
                                <img src={card.classImage} alt="class" />
                            </div>

                            <div className="stats">
                                <div className="stat">
                                    <img src={asset("stat/attack.png")} alt="Power" />
                                    <span>{card.power}</span>
                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${(card.power / 20) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="stat">
                                    <img src={asset("stat/health.png")} alt="Defense" />
                                    <span>{card.defense}</span>
                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${card.defense}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="stat">
                                    <img src={asset("stat/knockback.png")} alt="Knockback" />
                                    <span>{card.knockback}</span>
                                    <div className="progress">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${(card.knockback / 3) * 100}%` }}
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

            {selectedCard && (
                <div className={`popup-overlay ${isClosing ? "closing" : ""}`}>
                    <div className={`popup ${isClosing ? "popup-closing" : ""}`}>
                        <button className="close-button" onClick={closePreview}>
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
                                className={previewType === "normal" ? "active" : ""}
                                onClick={() => setPreviewType("normal")}
                            >
                                Normal
                            </button>
                            <button
                                className={previewType === "ability" ? "active" : ""}
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