const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper to calculate cosine similarity
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magA * magB);
}

// Generate embedding for a single text
async function getEmbedding(text) {
    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-embedding-001" });
        const result = await model.embedContent(text);
        return result.embedding.values;
    } catch (error) {
        console.error("Embedding error for text:", text.substring(0, 50));
        console.error("Error details:", error);
        throw error;
    }
}

// Global variable to store knowledge base with embeddings
let knowledgeWithEmbeddings = [];

// Initialize knowledge base by generating embeddings for all chunks
async function initKnowledgeBase() {
    console.log("Initializing knowledge base embeddings...");
    const kbPath = path.join(__dirname, '../data/knowledge_base.json');
    const kb = JSON.parse(fs.readFileSync(kbPath, 'utf8'));

    knowledgeWithEmbeddings = await Promise.all(kb.map(async (item) => {
        const embedding = await getEmbedding(item.content);
        return { ...item, embedding };
    }));
    console.log("Knowledge base initialization complete.");
}

// Retrieve relevant chunks based on a query
async function getRelevantContext(query, topK = 3) {
    if (knowledgeWithEmbeddings.length === 0) {
        await initKnowledgeBase();
    }

    const queryEmbedding = await getEmbedding(query);

    // Calculate similarities
    const scored = knowledgeWithEmbeddings.map(item => ({
        content: item.content,
        score: cosineSimilarity(queryEmbedding, item.embedding)
    }));

    // Log scores for debugging
    console.log(`RAG: Found ${scored.length} chunks. Top 3 scores:`,
        scored.sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(s => s.score.toFixed(4))
    );

    // Sort and return topK
    const topContext = scored
        .sort((a, b) => b.score - a.score)
        .slice(0, topK)
        .map(item => item.content)
        .join("\n\n");

    return topContext || "No relevant context found.";
}

module.exports = {
    initKnowledgeBase,
    getRelevantContext
};
