import { useState } from "react";
import { postData } from "../Services/Post";
import "../Styles/Position.css";
const post = "/api/candidate/apply-to-job";

export default function Position({ id, title, candidate }) {
    const [repoUrl, setRepoUrl] = useState("");

    function handleApply() {
        postData(post, {
            uuid: candidate.uuid,
            jobId: id,
            candidateId: candidate.candidateId,
            repoUrl: repoUrl
        })
            .then((data) => console.log("Aplicación enviada:", data))
            .catch((error) => console.error(error));
    }

    return (
        <div className="position-card">
            <div>
                <h2>{title}</h2>
                <p>ID: {id}</p>
            </div>
            <label>
                URL GitHub
                <input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                />
            </label>
            <button onClick={handleApply}>Aplicar</button>
        </div>
    );
}