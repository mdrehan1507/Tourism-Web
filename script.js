function showInfo(destination) {
    const infoBox = document.getElementById('info-box');
    let info = '';

    switch(destination) {
        case 'tajmahal':
            info = '<h3>Taj Mahal, Agra</h3><p>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan.</p>';
            break;
        case 'kerala':
            info = '<h3>Backwaters, Kerala</h3><p>The Kerala backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast of Kerala state in southern India.</p>';
            break;
        case 'jaipur':
            info = '<h3>Palace of Winds, Jaipur</h3><p>The Hawa Mahal is a palace in Jaipur, India. Made with the red and pink sandstone, the palace sits on the edge of the City Palace, and extends to the women\'s chambers.</p>';
            break;
        default:
            info = '';
    }

    infoBox.innerHTML = info;
    infoBox.style.display = 'block';
}
