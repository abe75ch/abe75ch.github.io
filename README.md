# Andy Bermond — portfolio

Source of [abe75ch.github.io](https://abe75ch.github.io/): AI agents and ML from demo to production. Plain HTML, CSS and JavaScript, served by GitHub Pages. No build step, backend, cookies, analytics or third-party requests.

## Run it locally

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/.

## What's here

- `index.html`, `style.css`: the page.
- `app.js`: the "Ask me something" box. It's scripted keyword matching over hand-written notes, not a model. Each answer cites lines in its source note, and a question with no matching note gets an explicit "no source" answer. Nothing typed leaves the browser.
- `assets/retriever.js`, `assets/retriever.css` and the figure markup in `index.html`: the "evidence drawer", an isometric illustration built with the [anatomy](https://github.com/wheresryan22/anatomy) kit. These files are generated; edit the generator, not the output.
- `work/`, `notes/`, `talks/`: case studies, short notes and talks. Also generated.
- `assets/fonts/`: Archivo, Instrument Sans and DM Mono (SIL Open Font License), latin subset, self-hosted.

## About the content

- Employers are shown as logos (trademarks of their owners). Clients are not named.
- The demos use made-up examples. They don't reproduce any client document, data, code or result.
- Numbers appear only where they can be checked. Tiltmeter's come from its [public repository](https://github.com/abe75ch/tiltmeter); a design target is labelled as one.

## Design references

Typographic hierarchy after [Dennis Snellenberg](https://dennissnellenberg.com/), the interactive centrepiece idea after [Lusion](https://lusion.co/), the explanatory approach after [Bartosz Ciechanowski](https://ciechanow.ski/mechanical-watch/). Layout, illustration and code are original.
