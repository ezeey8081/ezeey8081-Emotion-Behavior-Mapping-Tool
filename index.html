<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotion Behavior Mapping Tool</title>
    
    <!-- Include Tailwind CSS directly -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .button {
            padding: 8px 12px;
            background-color: #e2e8f0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
            margin-bottom: 5px;
        }
        .button.active {
            background-color: #3b82f6;
            color: white;
        }
        .download-button {
            padding: 8px 16px;
            background-color: #10b981;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 20px;
        }
        textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        select {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .card {
            background-color: #f9fafb;
            border-radius: 8px;
            padding: 16px;
            margin-top: 24px;
        }
        .blue-card {
            background-color: #eff6ff;
        }
        .completion {
            margin: 10px 0;
            font-weight: bold;
        }
        ul {
            padding-left: 30px;
        }
        li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-2xl font-bold mb-4">Emotion-Behavior Mapping Tool</h1>
        
        <p class="mb-2">This tool helps you map your typical behavioral responses to emotions based on Gloria Willcox's Feeling Wheel. Complete each emotion by describing your typical behavioral response and rating its impact.</p>
        <p class="completion" id="completion-display">Completion: 0%</p>
        
        <div id="filter-buttons">
            <button class="button active" onclick="filterEmotions('All')">All</button>
            <button class="button" onclick="filterEmotions('Mad')">Mad</button>
            <button class="button" onclick="filterEmotions('Sad')">Sad</button>
            <button class="button" onclick="filterEmotions('Scared')">Scared</button>
            <button class="button" onclick="filterEmotions('Joyful')">Joyful</button>
            <button class="button" onclick="filterEmotions('Powerful')">Powerful</button>
            <button class="button" onclick="filterEmotions('Peaceful')">Peaceful</button>
        </div>
        
        <div id="table-container" class="mt-4"></div>
        
        <button class="download-button" onclick="downloadCSV()">Download as CSV</button>
        
        <div class="card mt-6">
            <h2 class="text-xl font-bold mb-2">Instructions</h2>
            <ul>
                <li><strong>Behavioral Response:</strong> Describe observable actions that others might notice when you feel this emotion</li>
                <li><strong>Motivation Level:</strong> Rate from 1 (low) to 5 (high)</li>
                <li><strong>Energy Level:</strong> Rate from 1 (draining) to 5 (energizing)</li>
                <li><strong>Productivity Impact:</strong> Rate from 1 (negative) to 5 (positive)</li>
            </ul>
            <p class="mt-2">Complete all fields, then download the CSV for your records and reflection.</p>
        </div>

        <div class="card blue-card mt-6">
            <h2 class="text-xl font-bold mb-2">Reflection Prompts</h2>
            <p class="mb-2">After completing the chart, consider these questions for your 300-word reflection:</p>
            <ul>
                <li>What patterns or themes did you notice in your responses?</li>
                <li>Which emotions tend to derail you—and which energize or ground you?</li>
                <li>Were there any responses that surprised you?</li>
                <li>Is there one emotion cluster (e.g., fear, anger, sadness) you feel most motivated to work on? Why?</li>
            </ul>
        </div>
    </div>

    <script>
        // Define the emotion structure based on the Feeling Wheel
        const emotionGroups = [
            {
                core: "Mad",
                secondRing: ["Critical", "Distant", "Frustrated", "Aggressive", "Bitter", "Humiliated", "Let Down", "Threatened", "Rejected", "Weak"]
            },
            {
                core: "Sad",
                secondRing: ["Bored", "Lonely", "Depressed", "Ashamed", "Guilty", "Apathetic", "Vulnerable", "Inferior", "Inadequate", "Miserable"]
            },
            {
                core: "Scared",
                secondRing: ["Insecure", "Anxious", "Worried", "Overwhelmed", "Frightened", "Helpless", "Stressed", "Confused", "Shocked", "Startled"]
            },
            {
                core: "Joyful",
                secondRing: ["Excited", "Sexy", "Energetic", "Playful", "Creative", "Aware", "Proud", "Respected", "Valued", "Courageous"]
            },
            {
                core: "Powerful",
                secondRing: ["Faithful", "Respected", "Important", "Hopeful", "Appreciated", "Worthwhile", "Valuable", "Sacred", "Intimate", "Loving"]
            },
            {
                core: "Peaceful",
                secondRing: ["Content", "Thoughtful", "Intimate", "Loving", "Trusting", "Nurturing", "Pensive", "Relaxed", "Responsive", "Serene"]
            }
        ];

        // Create the emotions data array
        let emotions = [];
        emotionGroups.forEach(group => {
            group.secondRing.forEach(emotion => {
                emotions.push({
                    core: group.core,
                    secondRing: emotion,
                    behavioralResponse: "",
                    motivationLevel: 3,
                    energyLevel: 3,
                    productivityImpact: 3
                });
            });
        });

        // Current filter
        let currentFilter = 'All';

        // Update the UI
        function updateUI() {
            // Filter emotions based on current filter
            const filteredEmotions = currentFilter === 'All' 
                ? emotions 
                : emotions.filter(e => e.core === currentFilter);
            
            // Generate table HTML
            let tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Core Emotion</th>
                            <th>Second-Ring Emotion</th>
                            <th>My Typical Behavioral Response</th>
                            <th>Motivation Level (1-5)</th>
                            <th>Energy Level (1-5)</th>
                            <th>Productivity Impact (1-5)</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            filteredEmotions.forEach((emotion, index) => {
                const originalIndex = emotions.findIndex(e => 
                    e.core === emotion.core && e.secondRing === emotion.secondRing
                );
                
                tableHTML += `
                    <tr>
                        <td>${emotion.core}</td>
                        <td>${emotion.secondRing}</td>
                        <td>
                            <textarea 
                                id="response-${originalIndex}"
                                rows="2"
                                placeholder="Describe your typical behavior when feeling this emotion..."
                                onchange="updateBehavior(${originalIndex}, this.value)"
                            >${emotion.behavioralResponse}</textarea>
                        </td>
                `;
                
                // Add selects for ratings
                ['motivationLevel', 'energyLevel', 'productivityImpact'].forEach(field => {
                    tableHTML += `
                        <td>
                            <select id="${field}-${originalIndex}" onchange="updateRating(${originalIndex}, '${field}', this.value)">
                    `;
                    
                    for (let i = 1; i <= 5; i++) {
                        tableHTML += `<option value="${i}" ${emotion[field] == i ? 'selected' : ''}>${i}</option>`;
                    }
                    
                    tableHTML += `
                            </select>
                        </td>
                    `;
                });
                
                tableHTML += `</tr>`;
            });
            
            tableHTML += `
                    </tbody>
                </table>
            `;
            
            // Update the table container
            document.getElementById('table-container').innerHTML = filteredEmotions.length > 0 
                ? tableHTML 
                : '<p class="text-center py-4">Select a category to view emotions or click "All" to see all emotions.</p>';
            
            // Update completion percentage
            updateCompletionPercentage();
            
            // Update active button
            const buttons = document.querySelectorAll('#filter-buttons .button');
            buttons.forEach(button => {
                button.classList.remove('active');
                if (button.textContent === currentFilter) {
                    button.classList.add('active');
                }
            });
        }
        
        // Filter emotions by core emotion
        function filterEmotions(core) {
            currentFilter = core;
            updateUI();
        }
        
        // Update behavioral response
        function updateBehavior(index, value) {
            emotions[index].behavioralResponse = value;
            updateCompletionPercentage();
        }
        
        // Update rating
        function updateRating(index, field, value) {
            emotions[index][field] = parseInt(value);
        }
        
        // Calculate and update completion percentage
        function updateCompletionPercentage() {
            const filled = emotions.filter(e => e.behavioralResponse.trim() !== "").length;
            const percentage = Math.round((filled / emotions.length) * 100);
            document.getElementById('completion-display').textContent = `Completion: ${percentage}%`;
        }
        
        // Generate CSV content and download
        function downloadCSV() {
            const headers = ["Core Emotion", "Second-Ring Emotion", "My Typical Behavioral Response", "Motivation Level (1-5)", "Energy Level (1-5)", "Productivity Impact (1-5)"];
            const csvContent = [
                headers.join(','),
                ...emotions.map(e => [
                    e.core,
                    e.secondRing,
                    `"${e.behavioralResponse.replace(/"/g, '""')}"`,
                    e.motivationLevel,
                    e.energyLevel,
                    e.productivityImpact
                ].join(','))
            ].join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', 'Emotion_Behavior_Mapping.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Initialize the UI when the page loads
        document.addEventListener('DOMContentLoaded', function() {
            updateUI();
        });
        
        // Also try to initialize immediately (backup)
        updateUI();
    </script>
</body>
</html>
