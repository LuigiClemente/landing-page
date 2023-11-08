import css from "styled-jsx/css";

const colors = {
    // primary: '#03a9f4',
    // secondary: '#ff5722',
    // error: '#f44336',
    blue: '#111122',
    skyblue: '#4395EB',
    purple: '#7170F4',
    orange: '#EB9845',
    pink: '#D83E74',
    'gradient-purple-1': '#7A77FF',
    'gradient-purple-2': '#5656BB',
    'gradient-blue-1': '#5DB4F3',
    'gradient-blue-2': '#3A6FBF',
    'gradient-orange-1': '#FFB74A',
    'gradient-orange-2': '#D2723C',
    'gradient-pink-1': '#F04779',
    'gradient-pink-2': '#BD336D',
    'border-blue':'#D5EDFE',
    'border-orange':'#FFF9F0',
    'border-pink':'#FFC1D3',
    'border-purple':'#D3D2FF',
};

export function setGlobalStyles() {
    Object.keys(colors).forEach((color) => {
        document.documentElement.style.setProperty(
            `--color-${color}`,
            colors[color]
        );
    });
}


// export default css.global`
// --primary: '#03a9f4',
// --secondary: '#ff5722',
// --error: '#f44336',
// --faizan: 'yellow',
// `;
