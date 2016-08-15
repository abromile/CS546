const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const classes = data.classes;
const schools = data.education;
const hobbies = data.hobbies;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
    
    
    
        // HIGH SCHOOL
        return schools.addHighschool("The Marine Academy of Technology and Environmental Science");
    }).then((school) => {
        const id = school._id;

    
    
    
    
        // CLASSES
        return classes.addClass("CS115", "Intro to Computer Science", "Naumann", "Learn how to do basic things in Python")
            .then(() => {
                return classes.addClass("CS146", "Intro to Web Development", "Gabarro", "Learn how to do basic things in HTML5 and CSS3");
            })
            .then(() => {
                return classes.addClass("CS135", "Discrete Structures", "Burlick", "Try not to fall asleep");
            })
            .then(() => {
                return classes.addClass("CS284", "Data Structures", "Gabarro", "Make some data structures in Java and occasionally have drawing contests");
            })
            .then(() => {
                return classes.addClass("CS383", "Computer Organization and Programming", "Gabarro", "All I remember is almost failing for not knowing Assembly");
            })
            .then(() => {
                return classes.addClass("CS385", "Algorithms", "Borowski", "You should probably show up to the midterm so you don't get a B like me");
            })
            .then(() => {
                return classes.addClass("CS334", "Automata and Computation", "Nicolosi", "I got a 100 on quiz 6 even though I was drunk");
            })
            .then(() => {
                return classes.addClass("CS496", "Programming Languages", "Naumann", "The TA did all my homework assignments and Naumann gave too many extra credit attendance quizzes");
            })
            .then(() => {
                return classes.addClass("CS392", "Systems Programmin", "Gabarro", "The only class I felt like I learned anything in that semester");
            })
            .then(() => {
                return classes.addClass("CS347", "Software Deveopment", "Duchamp", "I made a bowling scorekeeper that was pretty cool");
            })
            .then(() => {
                return classes.addClass("CS370", "Team Programming", "Borowski", "I was the only girl in the class and got an A- because I got stuck with the stupid kid as a partner");
            })
            .then(() => {
                return classes.addClass("CS442", "Database Management Systems", "Wang", "Learn basic database things and some SQL querys and whatnot");
            })
            .then(() => {
                return classes.addClass("CS443", "Database Practicum", "Klappholz", "Say you have a 4.0 and he'll give you an A");
            })
            .then(() => {
                return classes.addClass("CS511", "Concurrent Programming", "Duchamp", "This class made me question my existance");
            })
            .then(() => {
                return classes.addClass("CS492", "Operating Systems", "Wang", "Wendy Wang needs you to sign the attendance shit so she can talk about f*ck bongs and tell you that semaphore is the final solution");
            })
            .then(() => {
                return classes.addClass("CS558", "Computer Vision", "Mordohai", "Very interesting yet challenging class");
            })
            .then(() => {
                return classes.addClass("CS600", "Advanced Algorithms", "Peyrovian", "Very easy if you took undergrad algorithms and he reuses the homework from every semester");
            })
            .then(() => {
                return classes.addClass("CS555", "Agile Methods for Software Development", "Ens", "Super easy");
            })
            .then(() => {
                return classes.addClass("CS546", "Web Programmin", "Barresi", "I'm taking this class because Adam Perez told me to");
            })



            // UGRAD SCHOOLS
            .then(() => {
                return schools.addUndergrad("Ocean County College", "NA");
            })
            .then(() => {
                return schools.addUndergrad("Richard Stockton College of NJ", "NA");
            })
            .then(() => {
                return schools.addUndergrad("Stevens Institute of Technology", "MS in Computer Science '17");
            })



            // HOBBIES
            .then(() => {
                return hobbies.addHobby("Drawing", "I draw things sometimes. Mostly people and cats");
            })
            .then(() => {
                return hobbies.addHobby("Hiking", "I like nature and climbing things");
            })
            .then(() => {
                return hobbies.addHobby("Bouldering", "The inside version of climbing things");
            })
            .then(() => {
                return hobbies.addHobby("Netflix", "Sometimes you just wanna sit alone in your room in the dark and eat Nutella out of the jar with your hand, ya know?");
            })
            .then(() => {
                return hobbies.addHobby("Singing", "Sometimes I get drunk and belt Ke$ha at the top of my lungs");
            })
            .then(() => {
                return hobbies.addHobby("Baking", "If I make you cookies can I get an A? I made Gabarro cookies once, but he gave me a B-");
            })
            .then(() => {
                return hobbies.addHobby("Cats", "I have 5 cats. If CS doesn't work out I can always be a crazy cat lady no problem");
            });



    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});