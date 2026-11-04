import MusicPage from "./MusicPage.png";
import QAreport from "./QAreport.png";
import AICalendarAssistant from "./AICalendarAssistant.png";
import SOPAgent from "./SOPAgent.png";

// Single source of truth for portfolio projects. The Projects page renders
// the full card (description, image, demo link); the About page renders the
// short `summary`, so both stay in sync when a project is added or renamed.
export const projectCatalog = [
    {
        name: "Music Hub",
        summary: "Music community platform with AI-generated forum topics",
        description: "A music community platform with forum features. Leverages Next.js server and client components for SEO and dynamic UI, with a Python background worker automating daily AI-generated music-theory discussions.",
        image: MusicPage,
        imageAlt: "Music Hub community forum page showing AI-generated music-theory discussion threads",
        stack: ["TypeScript", "React", "Next.js", "Python", "PostgreSQL", "OpenAI API"],
        demo: "https://musician-community-platform.vercel.app/",
    },
    {
        name: "QAreport",
        summary: "Internal QA tool for screen recordings and bug reporting",
        description: "An internal QA reporting tool built to improve testing efficiency at Tristyn Tech. Allows testers to upload screen recordings and bug descriptions, helping developers diagnose issues that are difficult to reproduce.",
        image: QAreport,
        imageAlt: "QAreport tool interface for uploading screen recordings and bug descriptions",
        stack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Google Cloud Platform"],
        demo: "https://qa-report.vercel.app/",
    },
    {
        name: "AI Calendar Assistant",
        summary: "Natural-language calendar scheduling with a visible agent pipeline",
        description: "An AI-powered calendar assistant that lets you schedule, move, and delete events through natural language chat. Features a visible agent pipeline for intent detection, validation, and CRUD execution against a live calendar view.",
        image: AICalendarAssistant,
        imageAlt: "AI Calendar Assistant chat interface alongside a live calendar view",
        stack: ["TypeScript", "React", "OpenAI API"],
        demo: "https://ai-scheduling-assistant-theta.vercel.app/",
    },
    {
        name: "SOP Agent",
        summary: "AI interviewer that drafts reviewable Standard Operating Procedures",
        description: "An AI agent that interviews you about a business process, finds the gaps you didn't mention, and drafts a Standard Operating Procedure you review and export as a PDF. Every fact is a sourced claim only a person can confirm, approval is blocked in code while required fields are missing, and uploaded policy documents are cross-checked against what you say.",
        image: SOPAgent,
        imageAlt: "SOP Agent interview chat beside a review panel listing blocking and advisory SOP fields",
        stack: ["TypeScript", "React", "Next.js", "Node.js", "Fastify", "OpenAI API"],
        demo: "https://sop-agent-web.vercel.app/",
    },
];
