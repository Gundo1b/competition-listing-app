import React, { useState } from "react";
import competitions from "../data";
import CompetitionCard from "./CompetitionCard";

function CompetitionList() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // date
    const today = new Date().toISOString().split("T")[0];


    // unique cate
    const categories = ["All", ...new Set(competitions.map(comp => comp.category))];

    // selected cate
    const filteredCompetitions = competitions
        .filter(comp => comp.end_date >= today)
        .filter(comp => selectedCategory === "All" || comp.category === selectedCategory);


    return (
        <div>
            <h2>Available Competitions</h2>

            {/* Dropdown */}
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>

            {/* Display  */}
            <div className="competition-list">
                {filteredCompetitions.map((competition, index) => (
                    <CompetitionCard key={index} competition={competition} />
                ))}
            </div>
        </div>
    );
}

export default CompetitionList;
