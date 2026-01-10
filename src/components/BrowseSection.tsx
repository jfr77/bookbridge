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
        <section className="browse" id="browse">
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
                    >
                        Your Impact
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

                {/* Footer */}
                <footer className="browse__footer">
                    <div className="browse__footerContent">
                        <div className="browse__footerBrand">
                            <div className="browse__footerBrandName">Bookbridge</div>
                            <div className="browse__footerSocial">
                                <a href="#" aria-label="Facebook" className="browse__socialIcon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn" className="browse__socialIcon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="YouTube" className="browse__socialIcon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Instagram" className="browse__socialIcon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="browse__footerColumns">
                            <div className="browse__footerColumn">
                                <h3 className="browse__footerHeading">Q&A</h3>
                                <a href="#" className="browse__footerLink">How can I become a partner?</a>
                                <a href="#" className="browse__footerLink">Donation Status?</a>
                            </div>

                            <div className="browse__footerColumn">
                                <h3 className="browse__footerHeading">Resources</h3>
                                <a href="#" className="browse__footerLink">About Us</a>
                                <a href="#" className="browse__footerLink">Our Partners</a>
                                <a href="#" className="browse__footerLink">Legal</a>
                            </div>

                            <div className="browse__footerColumn">
                                <h3 className="browse__footerHeading">Contact Us</h3>
                                <a href="tel:+4912345" className="browse__footerLink">+49 12345</a>
                                <a href="mailto:info@bookbridge.com" className="browse__footerLink">info@bookbridge.com</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
