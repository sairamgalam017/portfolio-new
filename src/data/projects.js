
export const projects = [
    {
        id: 'advanced-energy-meter',
        title: 'Advanced Energy Meter',
        shortDescription: 'An IoT-based smart energy meter that allows real-time monitoring of energy consumption and automated billing alerts.',
        longDescription: 'This advanced energy meter leverages IoT technology to provide a comprehensive solution for monitoring electrical consumption. Unlike traditional meters, it offers real-time data tracking, automated billing calculations, and alerts for abnormal usage patterns. It empowers users to manage their electricity consumption effectively and helps providers detect theft or leakage.',
        tech: ['IoT', 'Arduino', 'GSM Module', 'Sensors'],
        features: [
            'Real-time energy monitoring via mobile app/dashboard',
            'Automated SMS alerts for billing and high usage',
            'Tamper detection and improved security',
            'Remote load control capabilities'
        ],
        challenges: 'Integrating multiple sensors while maintaining low power consumption was a significant challenge. Ensuring reliable GSM connectivity in various signal conditions also required optimizing the antenna placement and error handling in the code.',
        image: '/advanced-energy-meter.jpg',
        gallery: [], // Add more images here if available
        github: '#',
        demo: '#'
    },
    {
        id: 'smart-dustbin',
        title: 'Smart Dustbin',
        shortDescription: 'An automated waste management system with ultrasonic sensors for lid operation and fullness detection to promote hygiene.',
        longDescription: 'The Smart Dustbin is designed to promote hygiene and efficiency in waste management. Using ultrasonic sensors, it detects when a person approaches and automatically innovative open the lid, minimizing physical contact. Additionally, it monitors the fill level and alerts maintenance staff when it needs emptying, optimizing waste collection routes.',
        tech: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor'],
        features: [
            'Touch-free automatic lid operation',
            'Fill-level detection and alert system',
            'Hygiene-focused design for public spaces',
            'Low power consumption'
        ],
        challenges: 'Calibrating the ultrasonic sensors to avoid false triggers from passing people was crucial. Designing a mechanism that could lift the lid smoothly without straining the servo motor required several iterations.',
        image: '/projects/smart-dustbin.png',
        gallery: [],
        github: '#',
        demo: '#'
    },
    {
        id: 'smart-agriculture-system',
        title: 'IoT Based Smart Agricultural System',
        shortDescription: 'A precision agriculture solution monitoring soil moisture and environmental conditions to automate irrigation and improve crop yield.',
        longDescription: 'This project addresses the need for efficient water usage in agriculture. By monitoring soil moisture, temperature, and humidity in real-time, the system automates irrigation, ensuring crops receive water only when necessary. This not only conserves water but also optimizes crop health and yield.',
        tech: ['IoT', 'ESP8266', 'Soil Moisture Sensor', 'Cloud Platform'],
        features: [
            'Automated irrigation based on soil moisture levels',
            'Environmental monitoring (Temperature & Humidity)',
            'Remote control and monitoring via mobile app',
            'Data logging for analysis'
        ],
        challenges: 'Developing a robust system that can withstand outdoor environmental conditions was key. Implementing reliable communication between the field sensors and the central control unit over long distances posed a significant challenge.',
        image: '/projects/smart-agriculture.png',
        gallery: [],
        github: '#',
        demo: '#'
    },
    {
        id: 'resistor-calculator',
        title: 'Resistor Colour Code Calculator',
        shortDescription: 'A tool designed to quickly calculate resistance values and tolerance based on standard color code bands.',
        longDescription: 'This digital tool simplifies the process of identifying resistor values. Users can input the color bands found on a resistor, and the calculator instantly provides the resistance value and tolerance. It is an essential utility for students and hobbyists working with electronics.',
        tech: ['C++', 'Logic Design', 'Electronics'],
        features: [
            'Supports 4, 5, and 6-band resistors',
            'User-friendly interface for color selection',
            'Instant calculation with tolerance display',
            'Educational mode to learn color codes'
        ],
        challenges: 'Mapping the logic for different band configurations and ensuring the user interface was intuitive for quick input were the main focus areas.',
        image: null,
        gallery: [],
        github: '#',
        demo: 'https://sairamgalam017.github.io/resistance-project/'
    }
];
