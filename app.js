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
  {
    id: 1,
    name: "Generative NFT Mint",
    description: "Visuals for an NFT minting experience.",
    image_url: "/images/project.png",
    price: "0.05 ETH",
    supply: 500,
    royalties: "5%",
    opening: "May 2025",
    contract: "0x123...abc"
  },
];


// Home Route with Random Featured Project
app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const featuredProject = projects[randomIndex];
    res.render("index", { featuredProject, projects });
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

