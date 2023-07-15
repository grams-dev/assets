exports.img = (imgPath, extension) => {
    const ext = extension || 'png';
    return `./static/img/${imgPath}.${ext}`;
}

exports.logo = (logoPath, extension) => {
    const ext = extension || 'png';
    return `./static/logo/${logoPath}.${ext}`;
}
