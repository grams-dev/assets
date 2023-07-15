exports.img = (imgPath, extension) => {
    const ext = extension || 'png';
    return `/img/${imgPath}.${ext}`;
}

exports.logo = (logoPath, extension) => {
    const ext = extension || 'png';
    return `/logo/${logoPath}.${ext}`;
}
