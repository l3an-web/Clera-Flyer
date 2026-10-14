const { chromium } = require('playwright');
const path = require('path');
(async()=>{
  const dir = process.argv[2], out = process.argv[3];
  const b = await chromium.launch();
  const p = await b.newPage({ deviceScaleFactor: 2 });
  const url = 'file://' + path.join(dir, 'flyer-a5.html');
  // PNG preview (no bleed) per page
  await p.goto(url + '?ohne-beschnitt'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
  const pages = await p.$$('.page');
  for (let i=0;i<pages.length;i++) await pages[i].screenshot({ path: path.join(out, `vorschau-${i===0?'vorderseite':'rueckseite'}.png`) });
  await p.emulateMedia({ media: 'print' });
  await p.pdf({ path: path.join(out, 'CLERA-Flyer-A5-ohne-Beschnitt.pdf'), preferCSSPageSize: true, printBackground: true });
  await p.goto(url); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
  await p.pdf({ path: path.join(out, 'CLERA-Flyer-A5-Druck-3mm-Beschnitt.pdf'), preferCSSPageSize: true, printBackground: true });
  await b.close();
})();
