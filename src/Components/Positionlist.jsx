import Position from "./Position";
import { useState,useEffect} from "react";
import {getData} from "../Services/Get";

const jobs="/api/jobs/get-list";
const email = "/api/candidate/get-by-email?email=tomas.vinals@gmail.com";

export default function Positionlist() {
    const [positions, setPositions] = useState([]);
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        getData(jobs).then((data) => {
            setPositions(data ?? []);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        getData(email).then((data) => {
            setCandidate(data ?? null);
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    return (
        <div>
            {positions.length > 0 ? (
                positions.map((position) => (
                    <Position key={position.id} id={position.id} title={position.title} candidate={candidate} />
                ))
            ) : (
                <p>No hay posiciones disponibles</p>
            )}
        </div>
    );
}