import { useMemo, useState } from "react";//
import { useNavigate } from "react-router-dom";
import "./BrowseSection.css";
import { learners as sampleLearners } from "../data/learners";

//const navigate = useNavigate();



type Classroom = {
    id: string;
    title: string;
    school: string;
    location: string;
    teacher: string;
    students: number;
    booksNeeded: number;
    raised: number;
    goal: number;
    imageUrl: string;
    urgent?: boolean;
};



const sampleClassrooms: Classroom[] = [
    {
        id: "c1",
        title: "Grade 7 Science Class",
        school: "Kibera Community School",
        location: "Nairobi, Kenya",
        teacher: "Ms. Wanjiku Kamau",
        students: 42,
        booksNeeded: 84,
        raised: 950,
        goal: 1806,
        urgent: true,
        imageUrl:
            "https://www.siemens-stiftung.org/wp-content/uploads/2024/05/projekt-bildung-experimento-suedafrika-zitronenbatterie-klasse.jpg",
    },
    {
        id: "c2",
        title: "Grade 10 Mathematics",
        school: "Rural Secondary School",
        location: "Uttar Pradesh, India",
        teacher: "Mr. Rajesh Sharma",
        students: 35,
        booksNeeded: 70,
        raised: 0,
        goal: 1750,
        imageUrl:
            "https://www.ed2go.com/common/images/1/17154/algebra-class.jpg",
    },
    {
        id: "c3",
        title: "Primary English & Literature",
        school: "Escuela Primaria Valle Verde",
        location: "Honduras",
        teacher: "Señora Elena Rodriguez",
        students: 28,
        booksNeeded: 56,
        raised: 658,
        goal: 1316,
        imageUrl:
            "https://cms.zdv.uni-mainz.de/studium/wp-content/uploads/sites/12/2023/02/Englisch-BEd-Dijon.jpg",
    },
    {
        id: "c4",
        title: "Grade 11 Technology & Computing",
        school: "Metro Tech High School",
        location: "Ho Chi Minh City, Vietnam",
        teacher: "Mr. Tran Minh",
        students: 30,
        booksNeeded: 90,
        raised: 1725,
        goal: 3450,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Fyo-cdSAni5gjwuhlD3IJmA5St7-ZWrrgw&s",
    },
    {
        id: "c5",
        title: "Grade 8 History & Social Studies",
        school: "Cape Town Community School",
        location: "Cape Town, South Africa",
        teacher: "Mr. Thabo Ndlovu",
        students: 38,
        booksNeeded: 76,
        raised: 1322,
        goal: 2204,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHerUPK5BvTca4z5Fceu3unaexv2C5bn0Qww&s",
    },
    {
        id: "c6",
        title: "Grade 6 Complete Book Set",
        school: "Amazon Region School",
        location: "Manaus, Brazil",
        teacher: "Professora Ana Silva",
        students: 25,
        booksNeeded: 100,
        raised: 1658,
        goal: 1316,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtS7e-KIqD89ePssHIe_XELjMw48VVreMaIA&s",
    },

];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function BrowseSection() {
    const navigate = useNavigate();
    const [tab, setTab] = useState<"learners" | "classrooms">("learners");

    // filters (simple for now)
    const [q, setQ] = useState("");
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);

    const learners = useMemo(() => {
        const query = q.trim().toLowerCase();
        return sampleLearners.filter((l) => {
            const matchesQuery =
                !query ||
                `${l.name} ${l.city} ${l.country} ${l.school} ${l.story}`
                    .toLowerCase()
                    .includes(query);

            const matchesAge = l.age >= minAge && l.age <= maxAge;

            return matchesQuery && matchesAge;
        });
    }, [q, minAge, maxAge]);

    return (
        <section className="browse">
            <div className="browse__container">
                <div className="browse__top">
                    <div className="browse__tabs" role="tablist" aria-label="Browse tabs">
                        <button
                            className={`browse__tab ${tab === "learners" ? "is-active" : ""}`}
                            onClick={() => setTab("learners")}
                            role="tab"
                            aria-selected={tab === "learners"}
                        >
                            Individual Learners
                        </button>
                        <button
                            className={`browse__tab ${
                                tab === "classrooms" ? "is-active" : ""
                            }`}
                            onClick={() => setTab("classrooms")}
                            role="tab"
                            aria-selected={tab === "classrooms"}
                        >
                            Classroom Batches
                        </button>
                    </div>

                    <button 
                        className="browse__thanks" 
                        onClick={() => navigate("/dashboard")}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                        Thank you for making a difference &lt;3
                    </button>
                </div>

                {tab === "learners" ? (
                    <>
                        <div className="browse__filters">
                            <div className="filter__block">
                                <label className="filter__label">Find Learners to support</label>
                                <div className="filter__row">
                                    <input
                                        className="filter__input"
                                        placeholder="Search by name or story..."
                                        value={q}
                                        onChange={(e) => setQ(e.target.value)}
                                    />
                                </div>

                                <div className="filter__age">
                                    <div className="filter__ageHeader">
                                        <span>Age</span>
                                        <span className="muted">{minAge}-{maxAge}</span>
                                    </div>
                                    <div className="filter__ageRow">
                                        <input
                                            type="range"
                                            min={0}
                                            max={100}
                                            value={minAge}
                                            onChange={(e) =>
                                                setMinAge(clamp(Number(e.target.value), 0, maxAge))
                                            }
                                        />
                                        <input
                                            type="range"
                                            min={0}
                                            max={100}
                                            value={maxAge}
                                            onChange={(e) =>
                                                setMaxAge(clamp(Number(e.target.value), minAge, 100))
                                            }
                                        />
                                    </div>
                                    <div className="muted small">Choose age range</div>
                                </div>
                            </div>
                        </div>

                        <h3 className="browse__headline">
                            Over {learners.length} children seeking your support
                        </h3>

                        <div className="grid">
                            {learners.map((l) => (
                                <article className="card" key={l.id}>
                                    <div className="card__img">
                                        <img src={l.imageUrl} alt={l.name} />
                                    </div>

                                    <div className="card__body">
                                        <h4 className="card__title">
                                            {l.name}, {l.age}
                                        </h4>
                                        <div className="card__meta">
                                            <div>{l.city}, {l.country}</div>
                                            <div>{l.school} • {l.grade}</div>
                                        </div>

                                        <p className="card__story">{l.story}</p>

                                        <div className="card__books">
                                            <span className="badge">📘</span> {l.booksNeeded} books needed
                                        </div>

                                        <div className="tags">
                                            {l.tags.map((t) => (
                                                <span className="tag" key={t}>{t}</span>
                                            ))}
                                        </div>

                                        <div className="progressRow">
                                            <div className="progressText">
                                                <strong>${l.raised}</strong> of ${l.goal}
                                            </div>
                                            <div className="progressBar">
                                                <div
                                                    className="progressFill"
                                                    style={{ width: `${Math.round((l.raised / l.goal) * 100)}%` }}
                                                />
                                            </div>
                                            <div className="progressPct">
                                                {Math.round((l.raised / l.goal) * 100)}%
                                            </div>
                                        </div>

                                        <button
                                            className="btn btn--primary"
                                            onClick={() => navigate(`/donate/learner/${l.id}`)}
                                        >
                                            ♡ Donate
                                        </button>

                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="infoBox">
                            <strong>Classroom Batch Sponsorship</strong>
                            <div className="muted">
                                Sponsor textbooks for entire classrooms and make a bigger impact.
                                When you support a classroom batch, every student gets the materials
                                they need to learn together.
                            </div>
                        </div>

                        <h3 className="browse__headline">
                            {sampleClassrooms.length} Classrooms seeking support
                        </h3>

                        <div className="grid">
                            {sampleClassrooms.map((c) => (
                                <article className="card" key={c.id}>
                                    <div className="card__img">
                                        <img src={c.imageUrl} alt={c.title} />
                                        {c.urgent && <span className="pill pill--urgent">Urgent</span>}
                                    </div>

                                    <div className="card__body">
                                        <h4 className="card__title">{c.title}</h4>
                                        <div className="card__meta">
                                            <div>{c.school}</div>
                                            <div>{c.location}</div>
                                        </div>

                                        <div className="row2">
                                            <div className="muted small">Teacher</div>
                                            <div>{c.teacher}</div>
                                        </div>

                                        <div className="row2">
                                            <div className="muted small">Books needed</div>
                                            <div>{c.booksNeeded}</div>
                                        </div>

                                        <div className="progressRow">
                                            <div className="progressText">
                                                <strong>${c.raised}</strong> of ${c.goal}
                                            </div>
                                            <div className="progressBar">
                                                <div
                                                    className="progressFill"
                                                    style={{ width: `${c.goal ? Math.round((c.raised / c.goal) * 100) : 0}%` }}
                                                />
                                            </div>
                                            <div className="progressPct">
                                                {c.goal ? Math.round((c.raised / c.goal) * 100) : 0}%
                                            </div>
                                        </div>

                                        <button className="btn btn--primary">♡ Donate</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
