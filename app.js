import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

// Simulated database as an array
const projects = [
    { id: 1, title: "Project One", image_url: "/images/project1.jpg", description: "Description for project one." },
    { id: 2, title: "Project Two", image_url: "/images/project2.jpg", description: "Description for project two." },
    { id: 3, title: "Project Three", image_url: "/images/project3.jpg", description: "Description for project three." }
];

// Home Route with Random Featured Project
app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const featuredProject = projects[randomIndex];
    res.render("index", { featuredProject });
});

// Projects Page Route
app.get("/projects", (req, res) => {
    res.render("projects", { projects });
});

// Individual Project Page Route
app.get("/projects/:id", (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    if (project) {
        res.render("project", { project });
    } else {
        res.status(404).send("Project not found");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

