'use strict';
// Scripted "agent": every answer comes from one source note; [n] cites <mark data-n="n"> in that note.
const kb = {
  talks: {
    chip: 'Have you given talks?',
    drawer: 'build',
    keys: ['talks', 'pydata', 'speak', 'spoke', 'conference', 'meetup', 'presentation', 'agentops'],
    answer: 'Yes. In September 2026 I spoke at PyData Lausanne: “AgentOps, the next layer after MLOps”.[1] The core idea: a model is a function you version and roll back, but an agent is a process that holds state, calls tools and spends money.[2] So releases, monitoring and rollbacks need rethinking. <a href="talks/agentops-pydata-lausanne.html">Read the abstract</a>.',
    file: 'talks.md',
    source: `Talks

<mark data-n="1">PyData Lausanne, 24 Sept 2026: AgentOps, the next layer after MLOps.</mark>

<mark data-n="2">A model is a function: version it, test it, roll it back. An agent is a process: it holds state, calls tools, spends money, retries.</mark>

Questions: deployable unit? release without artifact change? monitoring without an accuracy number? rollback for a tool-call loop?`
  },
  build: {
    chip: 'What do you build?',
    keys: ['build', 'do you do', 'who', 'yourself', 'what do you', 'job', 'role', 'work on'],
    answer: 'Mostly AI agents, and everything that gets them into production: the cloud they run on and the tests that catch them being wrong.[1] So far for factories, labs and automation lines.[2]',
    file: 'about.md',
    source: `Andy Bermond. AI agent & MLOps engineer.

<mark data-n="1">Builds agents, the cloud they run on, and the checks that catch them being wrong.</mark>
Covers the whole path: model or agent, infrastructure, tests.
Shipped across agents, MLOps and computer vision, through deployment and CI/CD.
Every claim has a source. No source, no claim.

Work so far: <mark data-n="2">manufacturing, life sciences, automation</mark>.
Side quest: robots.`
  },
  demo: {
    chip: 'Demo: what happens when the document says nothing?',
    keys: ['vessel', 'says nothing', 'silent', 'fill', 'mix', 'drain', 'demo', 'manufacturing', 'explorer', 'knowledge', 'document', 'retrieval', 'rag'],
    answer: 'It says so instead of guessing. Take this made-up procedure: fill, mix, drain. Ask what comes after filling and you get “mixing”.[1] Ask how long to mix and the document is silent,[2] so the answer says that. Same rule as in the manufacturing knowledge assistant I helped ship.',
    file: 'training-procedure.txt · fictional',
    source: `Training procedure (made up for this demo): water mixing

Step 01: Fill the vessel.
<mark data-n="1">Step 02: Mix the contents.</mark>
Step 03: Drain the vessel.

<mark class="gap" data-n="2">Mixing duration: not specified.</mark>
Drain completion condition: not specified.`
  },
  evals: {
    chip: 'How do you test an agent?',
    keys: ['eval', 'test', 'quality', 'verify', 'outcome', 'measure', 'grounding', 'hallucinat', 'wrong'],
    answer: 'I check the result against what the person asked for.[1] An agent can call every tool correctly and still book you a train hours too late.[2] So the outcome gets checked first; deterministic tests, eval sets and traces then show where it broke.[3]',
    file: 'notes/agent-evaluation.md',
    source: `Tool calls OK ≠ job done.

<mark data-n="1">Added outcome checks next to the tool-use and grounding checks.</mark>

Journey-planning demo:
<mark data-n="2">user wants a late-evening train, agent books one several hours later. Every tool call valid. Still wrong. Verifier compares booked time with requested time.</mark>

Kit:
<mark data-n="3">deterministic checks, eval datasets, trace reviews, quality gates that name the failing behaviour.</mark>`
  },
  vision: {
    chip: 'Tell me about the counting system.',
    keys: ['count', 'vision', 'watch', 'image', 'gcp', 'camera', 'flash', 'computer vision', 'google cloud', 'scale'],
    answer: 'A watchmaking manufacturer needed to count small parts photographed under a flash. I wrote the counting algorithm, and counts got faster and more accurate.[1] I also built the backend, security, deployment and CI/CD around it.[2] The GCP setup is built to grow from a few machines to thousands. That’s the design target; I haven’t measured a fleet that big.[3]',
    file: 'projects/flash-to-count.md',
    source: `Computer vision, watchmaking.

<mark data-n="1">Counting algorithm for different watch components, photographed under flash. Result: faster, more accurate counts.</mark>

Also mine:
<mark data-n="2">app backend, security layer, deployment architecture, CI/CD.</mark>

<mark data-n="3">GCP + API management sized for a few machines up to thousands. Design target, not measured.</mark>`
  },
  cloud: {
    chip: 'How do you deploy agents?',
    keys: ['cloud', 'deploy', 'infra', 'architecture', 'security', 'release', 'ci', 'kubernetes', 'docker', 'observ', 'ops'],
    answer: 'Login and an API management layer first, so nothing reaches the agent without permission.[1] The agent runs in containers and keeps its files outside them, so a restart loses nothing.[2] Every release is a versioned image I can roll back.[3] And I watch what the agent decides, along with whether the server is up.[4]',
    file: 'notes/reference-architecture.md · conceptual',
    source: `Reference design. Not any client's setup.

<mark data-n="1">User → login → API management → backend. Scoped access.</mark>

<mark data-n="2">Workflow in containers. Docs and run artifacts in persistent storage: restart ≠ data loss.</mark>

<mark data-n="3">Commit → tests → image → staging → release. Keep the previous version for rollback.</mark>

<mark data-n="4">Watch the service (errors, latency, uptime) and the agent (tool calls, evidence, outcome, tokens).</mark>`
  },
  science: {
    chip: 'What did you do on the science agent?',
    keys: ['science', 'scientific', 'research', 'life', 'hypothes', 'lab', 'biolog', 'pharma'],
    answer: 'I owned deployment and workload security for a team-built science agent, including its release workflows.[1] What I took from it: keep what was measured apart from what is guessed.[2] If one sample has no final measurement, the agent should say “can’t compare yet”.[3]',
    file: 'projects/science-agent.md',
    source: `Science agent. Team project.

<mark data-n="1">My part: deployment and release workflows, workload security config.</mark>

<mark data-n="2">Only useful if observations, interpretations and unknowns stay separate.</mark>

Made-up example: two notes, two conditions.
<mark data-n="3">Only one has a final measurement, so flag the missing comparison instead of inventing a result.</mark>`
  },
  mlops: {
    chip: 'What about MLOps and drift?',
    keys: ['mlops', 'drift', 'pipeline', 'data', 'reliab', 'tiltmeter', 'monitor', 'machine learning', 'model'],
    answer: 'Before agents, I built MLOps pipelines, worked on data-drift research and did a lot of QA on ML apps.[1] Tiltmeter is my open-source follow-up. It watches for probability shifts and threshold changes.[2]',
    file: 'notes/ml-reliability.md',
    source: `Reliability starts before deploy.

<mark data-n="1">Built MLOps pipelines. Data-drift detection research. Lots of QA on frontends and ML systems.</mark>

UI works, service healthy, model answered: three different claims.

<mark data-n="2">Tiltmeter (open source, Python): probability shifts, model changes, decision thresholds.</mark>
github.com/abe75ch/tiltmeter`
  },
  explore: {
    chip: 'What are you exploring?',
    keys: ['explor', 'robot', 'edge', 'next', 'device', 'wearable', 'hobby', 'learning', 'physical'],
    answer: 'Robots.[1] And small models on small batteries. On a wearable ML project I captured samples and measured battery drain.[2]',
    file: 'notes/bench.md',
    source: `On the bench:
<mark data-n="1">robotics, physical systems.</mark>

Edge ML. Wearable feasibility: sensor processing, model evals, export formats, energy use.
<mark data-n="2">Did sample capture and battery measurements.</mark>`
  },
  contact: {
    chip: 'How do I reach you?',
    keys: ['contact', 'reach', 'email', 'mail', 'linkedin', 'github', 'talk', 'available', 'cv', 'resume'],
    answer: 'Email is fastest: <a href="mailto:andy.bermond75@gmail.com">andy.bermond75@gmail.com</a>.[1] I’m also on <a href="https://www.linkedin.com/in/andy-bermond" target="_blank" rel="noopener noreferrer">LinkedIn</a>,[2] and my code is on <a href="https://github.com/abe75ch" target="_blank" rel="noopener noreferrer">GitHub</a>.[3]',
    file: 'links.txt',
    source: `<mark data-n="1">andy.bermond75@gmail.com</mark>
<mark data-n="2">linkedin.com/in/andy-bermond</mark>
<mark data-n="3">github.com/abe75ch</mark>`
  }
};
const order = ['build', 'talks', 'demo', 'evals', 'cloud', 'mlops', 'science', 'vision', 'explore', 'contact'];
// One drawer per source note, in the figure's order (two questions can share a note).
const drawers = ['build', 'demo', 'evals', 'vision', 'cloud', 'science', 'mlops', 'explore', 'contact'];
const fallback = {
  answer: 'Nothing in my notes about that, so I’ll pass rather than make something up. Try one of these.',
  file: 'no source found',
  source: '<span class="source-empty">No drawer matched. Missing evidence stays missing.</span>'
};

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const qEl = document.querySelector('.q');
const aEl = document.querySelector('.a');
const fileEl = document.querySelector('.source-file');
const bodyEl = document.querySelector('.source-body');
const chipsEl = document.querySelector('.chips');
let sweepTimer;

const WHOLE = new Set(['life', 'data', 'mail', 'next', 'talk', 'role']);
function match(text) {
  const t = text.toLowerCase();
  let best = null, score = 0;
  for (const id of order) {
    // Short or ambiguous keys must be whole words ("ci" ≠ "decision", "data" ≠ "database"); the rest may be stems ("eval" → "evaluation").
    const s = kb[id].keys.filter(k => new RegExp('\\b' + k + (k.length <= 3 || WHOLE.has(k) ? '\\b' : '')).test(t)).length;
    if (s > score) { best = id; score = s; }
  }
  return best;
}

// Wrap each word (outside tags) in a span so it can fade in; [n] becomes a citation link.
function renderAnswer(html) {
  let i = 0;
  const withCites = html.replace(/\[(\d)\]/g, (_, n) => `<a class="cite" href="#src-${n}" data-n="${n}" aria-label="source ${n}">${n}</a>`);
  aEl.innerHTML = withCites.replace(/(<[^>]+>)|([^<\s]+)/g, (m, tag, word) => tag ? tag : `<span class="w" style="--i:${i++}">${word}</span>`);
  return i;
}

function ask(id, asked) {
  const entry = id ? kb[id] : fallback;
  qEl.textContent = asked || entry.chip;
  const words = renderAnswer(entry.answer);
  fileEl.textContent = entry.file;
  bodyEl.innerHTML = entry.source;
  bodyEl.querySelectorAll('mark').forEach(m => { m.id = 'src-' + m.dataset.n; m.tabIndex = -1; });
  clearTimeout(sweepTimer);
  sweepTimer = setTimeout(() => bodyEl.querySelectorAll('mark').forEach((m, k) => setTimeout(() => m.classList.add('on'), k * 180)), reduceMotion ? 0 : words * 26 + 150);
  renderChips(id);
  const marks = bodyEl.querySelectorAll('mark');
  window.retriever?.show({ file: id ? kb[id].file.split(' ')[0].split('/').pop() : '', index: id ? drawers.indexOf(kb[id].drawer || id) : -1, cited: [...marks].filter((m) => !m.classList.contains('gap')).length, gaps: bodyEl.querySelectorAll('mark.gap').length });
}

function renderChips(current) {
  chipsEl.replaceChildren(...order.filter(id => id !== current).slice(0, 5).map(id => {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = kb[id].chip;
    b.addEventListener('click', () => { ask(id); qEl.focus({ preventScroll: true }); });
    return b;
  }));
}

// Hovering or focusing a citation outlines the evidence it points to.
aEl.addEventListener('pointerover', e => hot(e.target.closest('.cite')));
aEl.addEventListener('focusin', e => hot(e.target.closest('.cite')));
aEl.addEventListener('pointerout', () => hot(null));
aEl.addEventListener('click', e => {
  const c = e.target.closest('.cite'); if (!c) return;
  e.preventDefault();
  const mark = bodyEl.querySelector(`mark[data-n="${c.dataset.n}"]`);
  mark?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  mark?.focus({ preventScroll: true });
});
function hot(cite) {
  document.querySelectorAll('.is-hot').forEach(el => el.classList.remove('is-hot'));
  if (!cite) return;
  cite.classList.add('is-hot');
  bodyEl.querySelector(`mark[data-n="${cite.dataset.n}"]`)?.classList.add('is-hot');
}

document.querySelector('.ask-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.question;
  const text = input.value.trim();
  if (!text) return;
  ask(match(text), text);
  input.value = '';
  qEl.focus({ preventScroll: true });
});
document.querySelectorAll('[data-ask]').forEach(b => b.addEventListener('click', () => {
  ask(b.dataset.ask);
  document.querySelector('#ask').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  qEl.focus({ preventScroll: true });
}));
document.addEventListener('retriever:pick', (e) => ask(drawers[e.detail]));
document.querySelector('#year').textContent = new Date().getFullYear();
ask('build');
// Announce answers only after the first one, so the page intro isn't talked over on load.
document.querySelector('.exchange').setAttribute('aria-live', 'polite');
