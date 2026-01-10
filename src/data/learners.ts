export type Learner = {
    id: string;
    name: string;
    age: number;
    city: string;
    country: string;
    school: string;
    grade: string;
    story: string;
    booksNeeded: number;
    tags: string[];
    raised: number;
    goal: number;
    imageUrl: string;
};

export const learners: Learner[] = [
    {
        id: "l1",
        name: "Amar Okafor",
        age: 14,
        city: "Lagos",
        country: "Nigeria",
        school: "Lagos Community Secondary School",
        grade: "Grade 9",
        story:
            "Amar dreams of becoming a doctor. He walks 4km to school every day but lacks the science textbooks needed for his studies.",
        booksNeeded: 3,
        tags: ["science", "biology"],
        raised: 40,
        goal: 50,
        imageUrl:
            "https://www.unicef.org/nigeria/sites/unicef.org.nigeria/files/styles/hero_extended/public/Education.jpg.webp?itok=OCJgD4RY",
    },
    // add your other learners here (l2..l6)
    {
        id: "l2",
        name: "Sofia Mendez",
        age: 14,
        city: "Quito",
        country: "Ecuador",
        school: "Instituto Nacional Quito",
        grade: "Grade 9",
        story:
            "Sofia loves literature and writing. She dreams of being a journalist and needs books to keep learning.",
        booksNeeded: 4,
        tags: ["literature", "history", "science"],
        raised: 38,
        goal: 76,
        imageUrl:
            "https://staticsb.we.org/f/52095/1152x640/853a99557e/ecuador-carousel-10.jpg",
    },
    {
        id: "l3",
        name: "Rajesh Kumar",
        age: 12,
        city: "Rural Bihar",
        country: "India",
        school: "Village Primary School",
        grade: "Grade 7",
        story:
            "Rajesh is the first in his family to attend school. He’s great at math but shares one torn textbook.",
        booksNeeded: 3,
        tags: ["mathematics", "physics"],
        raised: 40,
        goal: 50,
        imageUrl:
            "https://t4.ftcdn.net/jpg/02/07/75/85/360_F_207758573_b6gcG682P2kBK7n9nW80heeoXJb15SGW.jpg",
    },
    {
        id: "l4",
        name: "Kofi Mensah",
        age: 10,
        city: "Accra",
        country: "Ghana",
        school: "Hope Academy Accra",
        grade: "Grade 4",
        story:
            "Kofi is a bright and curious student who loves reading. His family can’t afford the basic textbooks required for his grade.",
        booksNeeded: 3,
        tags: ["mathematics", "science"],
        raised: 48,
        goal: 66,
        imageUrl:
            "https://brauwelt.com/images/BWI_NL/NL_2020/6-Juni/brauwelt-sidel-ghana-school-2020.jpg",
    },
    {
        id: "l5",
        name: "Anh Nguyen",
        age: 13,
        city: "Ho Chi Minh City",
        country: "Vietnam",
        school: "Nguyen Thi Minh Khai High School",
        grade: "Grade 8",
        story:
            "Anh wants to study international relations and needs advanced textbooks to compete with students from better-funded schools.",
        booksNeeded: 3,
        tags: ["literature", "politics"],
        raised: 40,
        goal: 80,
        imageUrl:
            "https://media.istockphoto.com/id/953577648/photo/vietnamese-schoolgirls-on-a-schoolyard-south-vietnam.jpg?s=612x612&w=0&k=20&c=XiXdlcIRTdxpfp2sTxRZyc8cyWDcxQt4Mv21RXovfA8=",
    },
    {
        id: "l6",
        name: "Talat Houssein",
        age: 11,
        city: "Damaskus",
        country: "Syria",
        school: "Damaskus Secondary School",
        grade: "Grade 6",
        story:
            "Talat excels in science and mathematics. He participates in science fairs but lacks comprehensive study material.",
        booksNeeded: 2,
        tags: ["mathematics", "science"],
        raised: 40,
        goal: 48,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUo6SziX54h7yEEjm5usQzR2186-xgzEcvQQ&s",
    },
];
