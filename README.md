# CLERA Fensterreinigung – Flyer A5

Briefkasten-Flyer im Stil der Website (Instrument Serif + Manrope, Petrol/Ice-Farben).
Beidseitig, A5 hoch (148 × 210 mm).

## Dateien

| Datei | Zweck |
|---|---|
| `export/CLERA-Flyer-A5-Druck-3mm-Beschnitt.pdf` | **Für die Druckerei** – 154 × 216 mm inkl. 3 mm Beschnitt, Seite 1 = Vorderseite, Seite 2 = Rückseite |
| `export/CLERA-Flyer-A5-ohne-Beschnitt.pdf` | Exakt A5, z. B. für Heimdruck oder zur Ansicht |
| `export/vorschau-*.png` | Vorschaubilder |
| `flyer-a5.html` | Quelle (im Browser öffnen; `?ohne-beschnitt` anhängen für A5 ohne Rand) |

QR-Codes: „Offerte“ → `clera-fensterreinigung.ch/#kontakt`, „WhatsApp“ → `wa.me/41767618669`.

## Neu erzeugen

```bash
NODE_PATH=$(npm root -g) node render.js "$PWD" "$PWD/export"
```

## Druckempfehlung

Papier 170–250 g/m², matt oder Silk, 4/4-farbig. Bei der Druckerei „A5, beidseitig, PDF mit 3 mm Beschnitt“ wählen.
