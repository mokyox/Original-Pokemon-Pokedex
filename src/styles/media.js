const sizes = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1068px",
    desktop: "2560px",
};

export const device = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
};
