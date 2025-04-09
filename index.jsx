<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emotion Behavior Mapping Tool</title>
    
    <!-- Include React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    
    <!-- Include Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Include Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        /* Add any additional styles here */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        // Emotion Behavior Mapping Component
        const EmotionBehaviorMapping = () => {
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

          // Flatten the emotion list for the table
          const flattenedEmotions = emotionGroups.flatMap(group => 
            group.secondRing.map(emotion => ({
              core: group.core,
              secondRing: emotion,
              behavioralResponse: "",
              motivationLevel: 3,
              energyLevel: 3,
              productivityImpact: 3
            }))
          );

          const [emotions, setEmotions] = React.useState(flattenedEmotions);
          const [selectedEmotions, setSelectedEmotions] = React.useState([]);
          const [currentGroup, setCurrentGroup] = React.useState(null);

          // Initialize with all emotions shown
          React.useEffect(() => {
            showAll();
          }, []);

          // Update a specific field for an emotion
          const updateEmotion = (index, field, value) => {
            const updatedEmotions = [...emotions];
            updatedEmotions[index][field] = value;
            setEmotions(updatedEmotions);
          };

          // Filter emotions by core emotion
          const filterByCore = (core) => {
            setCurrentGroup(core);
            setSelectedEmotions(emotions.filter(e => e.core === core));
          };

          // Show all emotions
          const showAll = () => {
            setCurrentGroup("All");
            setSelectedEmotions(emotions);
          };

          // Generate CSV content
          const generateCSV = () => {
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
            
            return csvContent;
          };

          // Download the CSV file
          const downloadCSV = () => {
            const csvContent = generateCSV();
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', 'Emotion_Behavior_Mapping.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };

          // Calculate completion percentage
          const completionPercentage = () => {
            const filled = emotions.filter(e => e.behavioralResponse.trim() !== "").length;
            return Math.round((filled / emotions.length) * 100);
          };

          return (
            <div className="mx-auto p-4 max-w-4xl">
              <h1 className="text-2xl font-bold mb-4">Emotion-Behavior Mapping Tool</h1>
              
              <div className="mb-6">
                <p className="mb-2">This tool helps you map your typical behavioral responses to emotions based on Gloria Willcox's Feeling Wheel. Complete each emotion by describing your typical behavioral response and rating its impact.</p>
                <p className="mb-4"><strong>Completion: {completionPercentage()}%</strong></p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button 
                    onClick={showAll} 
                    className={`px-3 py-1 rounded ${currentGroup === "All" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                  >
                    All
                  </button>
                  {emotionGroups.map(group => (
                    <button 
                      key={group.core} 
                      onClick={() => filterByCore(group.core)} 
                      className={`px-3 py-1 rounded ${currentGroup === group.core ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                    >
                      {group.core}
                    </button>
                  ))}
                </div>
              </div>

              {selectedEmotions.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Core Emotion</th>
                        <th className="border p-2">Second-Ring Emotion</th>
                        <th className="border p-2">My Typical Behavioral Response</th>
                        <th className="border p-2">Motivation Level (1-5)</th>
                        <th className="border p-2">Energy Level (1-5)</th>
                        <th className="border p-2">Productivity Impact (1-5)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEmotions.map((emotion, index) => {
                        const originalIndex = emotions.findIndex(e => 
                          e.core === emotion.core && e.secondRing === emotion.secondRing
                        );
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border p-2">{emotion.core}</td>
                            <td className="border p-2">{emotion.secondRing}</td>
                            <td className="border p-2">
                              <textarea 
                                value={emotion.behavioralResponse}
                                onChange={(e) => updateEmotion(originalIndex, 'behavioralResponse', e.target.value)}
                                className="w-full p-1 border rounded"
                                placeholder="Describe your typical behavior when feeling this emotion..."
                                rows="2"
                              />
                            </td>
                            {['motivationLevel', 'energyLevel', 'productivityImpact'].map((field) => (
                              <td key={field} className="border p-2">
                                <select 
                                  value={emotion[field]}
                                  onChange={(e) => updateEmotion(originalIndex, field, parseInt(e.target.value))}
                                  className="p-1 border rounded"
                                >
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                  ))}
                                </select>
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p>Select a category to view emotions or click "All" to see all emotions.</p>
                </div>
              )}

              <div className="mt-6">
                <button 
                  onClick={downloadCSV} 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Download as CSV
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-bold mb-2">Instructions</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-1"><strong>Behavioral Response:</strong> Describe observable actions that others might notice when you feel this emotion</li>
                  <li className="mb-1"><strong>Motivation Level:</strong> Rate from 1 (low) to 5 (high)</li>
                  <li className="mb-1"><strong>Energy Level:</strong> Rate from 1 (draining) to 5 (energizing)</li>
                  <li className="mb-1"><strong>Productivity Impact:</strong> Rate from 1 (negative) to 5 (positive)</li>
                </ul>
                <p className="mt-2">Complete all fields, then download the CSV for your records and reflection.</p>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded">
                <h2 className="text-xl font-bold mb-2">Reflection Prompts</h2>
                <p className="mb-2">After completing the chart, consider these questions for your 300-word reflection:</p>
                <ul className="list-disc pl-5">
                  <li className="mb-1">What patterns or themes did you notice in your responses?</li>
                  <li className="mb-1">Which emotions tend to derail you—and which energize or ground you?</li>
                  <li className="mb-1">Were there any responses that surprised you?</li>
                  <li className="mb-1">Is there one emotion cluster (e.g., fear, anger, sadness) you feel most motivated to work on? Why?</li>
                </ul>
              </div>
            </div>
          );
        };

        // Render the app
        ReactDOM.render(<EmotionBehaviorMapping />, document.getElementById('root'));
    </script>
</body>
</html>
