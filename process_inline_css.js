const fs = require('fs');

const cssContent = `
/* =========================================
   EXTRACTED INLINE CSS FROM INDEX.HTML 
   ========================================= */

.top-header {
    background-color: #007932;
    color: #fff;
    padding: 12px 15px;
    font-size: 0.85em;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    z-index: 1000;
    position: relative;
}

.top-header-inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.top-header-logo-container {
    flex-shrink: 0;
}

.top-header-logo {
    max-height: 40px;
    display: block;
}

.top-header-info {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex-grow: 1;
}

.top-header-icon-primary {
    color: #F29C1F;
    margin-right: 8px;
}

.top-header-contact {
    display: flex;
    gap: 20px;
}

.top-header-link {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.top-header-whatsapp-icon {
    color: #25D366;
    font-size: 1.1em;
    margin-right: 8px;
}

#header.custom-header-section {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 4em 10%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('../../images/20260402_103013.jpg') center/cover no-repeat;
}

.custom-header-inner {
    max-width: 600px;
    width: 100%;
}

.custom-header-title {
    font-weight: 800;
    font-size: 3.2em;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: none;
}

.custom-header-subtitle {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 30px;
    font-weight: 400;
    color: #ddd;
}

.custom-header-actions {
    justify-content: flex-start;
}

.btn-whatsapp-custom {
    background-color: #007932;
    color: #ffffff !important;
    box-shadow: 0 4px 15px rgba(0,121,50,0.4);
    border-radius: 4px;
    font-weight: 700;
    transition: background-color 0.3s, color 0.3s;
}

.btn-whatsapp-custom:hover {
    background-color: #F29C1F !important;
    color: #ffffff !important;
}

.btn-whatsapp-icon {
    margin-left: 5px;
}

.modal-overlay {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.85);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
}

.modal-close-btn {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 2001;
    transition: color 0.3s;
}

.modal-close-btn:hover {
    color: #F29C1F;
}

.modal-content-img {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
    border-radius: 4px;
    box-shadow: 0 4px 25px rgba(0,0,0,0.8);
}

.modal-caption-text {
    margin-top: 15px;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    font-size: 1.2em;
    font-weight: 500;
}

.text-nowrap {
    white-space: nowrap;
}
`;

fs.appendFileSync('assets/css/main.css', cssContent);

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
    {
        old: \`<div id="topheader-content" style="background-color: #007932; color: #fff; padding: 12px 15px; font-size: 0.85em; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.2); z-index: 1000; position: relative;">\`,
        new: \`<div id="topheader-content" class="top-header">\`
    },
    {
        old: \`<div style="margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">\`,
        new: \`<div class="top-header-inner">\`
    },
    {
        old: \`<div style="flex-shrink: 0;">\`,
        new: \`<div class="top-header-logo-container">\`
    },
    {
        old: \`style="max-height: 40px; display: block;"\`,
        new: \`class="top-header-logo"\`
    },
    {
        old: \`<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap; justify-content: flex-end; flex-grow: 1;">\`,
        new: \`<div class="top-header-info">\`
    },
    {
        old: \`style="color: #F29C1F; margin-right: 8px;"\`,
        new: \`class="top-header-icon-primary"\`
    },
    {
        old: \`<div style="display: flex; gap: 20px;">\`,
        new: \`<div class="top-header-contact">\`
    },
    {
        old: \`style="color: #fff; text-decoration: none; font-weight: 600;"\`,
        new: \`class="top-header-link"\`
    },
    {
        old: \`style="color: #25D366; font-size: 1.1em; margin-right: 8px;"\`,
        new: \`class="top-header-whatsapp-icon"\`
    },
    {
        old: \`<section id="header" style="min-height: 85vh; display: flex; align-items: center; justify-content: flex-start; text-align: left; padding: 4em 10%; background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('images/20260402_103013.jpg') center/cover no-repeat;">\`,
        new: \`<section id="header" class="custom-header-section">\`
    },
    {
        old: \`<div class="inner" style="max-width: 600px; width: 100%;">\`,
        new: \`<div class="inner custom-header-inner">\`
    },
    {
        old: \`style="font-weight: 800; font-size: 3.2em; line-height: 1.2; margin-bottom: 20px; color: #fff; text-shadow: none;"\`,
        new: \`class="custom-header-title"\`
    },
    {
        old: \`style="font-size: 1.2em; line-height: 1.6; margin-bottom: 30px; font-weight: 400; color: #ddd;"\`,
        new: \`class="custom-header-subtitle"\`
    },
    {
        old: \`<ul class="actions" style="justify-content: flex-start;">\`,
        new: \`<ul class="actions custom-header-actions">\`
    },
    {
        old: \`class="button primary large hero-button-whatsapp" style="background-color: #007932; color: #ffffff !important; box-shadow: 0 4px 15px rgba(0,121,50,0.4); border-radius: 4px; font-weight: 700; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#F29C1F'; this.style.color='#ffffff';" onmouseout="this.style.backgroundColor='#007932'; this.style.color='#ffffff';"\`,
        new: \`class="button primary large hero-button-whatsapp btn-whatsapp-custom"\`
    },
    {
        old: \`<span style="white-space: nowrap;">\`,
        new: \`<span class="text-nowrap">\`
    },
    {
        old: \`<i class="fab fa-whatsapp" style="margin-left: 5px;"></i>\`,
        new: \`<i class="fab fa-whatsapp btn-whatsapp-icon"></i>\`
    },
    {
        old: \`<div id="imageModal" style="display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.85); flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(5px);">\`,
        new: \`<div id="imageModal" class="modal-overlay">\`
    },
    {
        old: \`<span style="position: absolute; top: 20px; right: 35px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 2001; transition: color 0.3s;" onmouseover="this.style.color='#F29C1F'" onmouseout="this.style.color='#fff'" onclick="closeModal()">\`,
        new: \`<span class="modal-close-btn" onclick="closeModal()">\`
    },
    {
        old: \`style="margin: auto; display: block; max-width: 90%; max-height: 80vh; border-radius: 4px; box-shadow: 0 4px 25px rgba(0,0,0,0.8);"\`,
        new: \`class="modal-content-img"\`
    },
    {
        old: \`<div id="modalCaption" style="margin-top: 15px; display: block; width: 80%; max-width: 700px; text-align: center; color: #ccc; font-size: 1.2em; font-weight: 500;"></div>\`,
        new: \`<div id="modalCaption" class="modal-caption-text"></div>\`
    }
];

replacements.forEach(r => {
    html = html.split(r.old).join(r.new);
});

fs.writeFileSync('index.html', html);
console.log("Done");
