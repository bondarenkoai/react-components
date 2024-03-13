const getRandomTitle = () => {
    const titles = [
        'Upload stats',
        '',
        'User Statistics',
        '',
        'File Analysis',
        '',
        'Data Overview',
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
};

export default getRandomTitle;
