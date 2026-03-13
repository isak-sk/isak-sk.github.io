const output = document.getElementById("output");
const input = document.getElementById("command");
const suggestionsEl = document.getElementById("suggestions");

// ─── Command Registry ──────────────────────────────────────────────────────────
const commands = {
  help: () => renderHelp(),
  whoami: () => renderWhoami(),
  "ls skills": () => renderSkills(),
  "ls projects": () => renderProjects(),
  "ls experience": () => renderExperience(),
  "ls education": () => renderEducation(),
  date: () => renderDate(),
  fortune: () => renderFortune(),
  clear: () => "__CLEAR__",
  "sudo rm -rf /": () => renderSudo(),
  sudo: () => renderSudo(),
  pwd: () => '<span class="info">/home/isak/portfolio</span>',
  uname: () =>
    '<span class="info">Linux iskoog.dev 6.x.x-arch #1 SMP x86_64 GNU/Linux</span>',
  uptime: () =>
    `<span class="info">up ${Math.floor(Math.random() * 500) + 10} days, grinding</span>`,
  neofetch: () => renderNeofetch(),
  contact: () => renderContact(),
  exit: () => '<span class="accent">Nice try. You can\'t escape.</span>',
  "": () => null,
};

const allCmds = Object.keys(commands).filter((k) => k !== "");

// ─── Render Functions ──────────────────────────────────────────────────────────
function renderHelp() {
  return `<div class="label">AVAILABLE COMMANDS</div>
<span class="highlight">  whoami          </span><span class="dimmed"># who's behind the keyboard</span>
<span class="highlight">  ls experience   </span><span class="dimmed"># work history</span>
<span class="highlight">  ls education    </span><span class="dimmed"># academic background</span>
<span class="highlight">  ls skills       </span><span class="dimmed"># tech stack & proficiency</span>
<span class="highlight">  ls projects     </span><span class="dimmed"># things i've built</span>
<span class="highlight">  neofetch        </span><span class="dimmed"># system info, hacker edition</span>
<span class="highlight">  contact         </span><span class="dimmed"># get in touch</span>
<span class="highlight">  date            </span><span class="dimmed"># current system time</span>
<span class="highlight">  fortune         </span><span class="dimmed"># dev wisdom / questionable jokes</span>
<span class="highlight">  uname           </span><span class="dimmed"># system info</span>
<span class="highlight">  uptime          </span><span class="dimmed"># how long have i been grinding</span>
<span class="highlight">  clear           </span><span class="dimmed"># wipe the terminal</span>
<span class="highlight">  sudo rm -rf /   </span><span class="dimmed"># i dare you</span>

<span class="dimmed">  tip: use ↑↓ for history, Tab to autocomplete</span>`;
}

function renderWhoami() {
  return `<div style="margin-bottom:14px">
  <img src="img/img.jpeg" alt="Isak Skoog"
    style="width:80px;height:80px;border-radius:4px;border:1px solid var(--green-dim);
           object-fit:cover;display:block;box-shadow:0 0 12px var(--green-glow)"/>
</div>
<div class="label">IDENTITY</div>
<span class="highlight">  Isak Skoog</span>
  Software Engineer · Gothenburg, Sweden
  <span class="dimmed">@ Silverbeard Engineering AB</span>

<div class="label" style="margin-top:10px">ABOUT</div>
<span class="dimmed">  Software engineer. Linux enthusiast. Open source contributor.</span>
<span class="dimmed">  Loves low level code, logical problems, 2am debugging,</span>
<span class="dimmed">  homelabs, and nerd stuff. Hates vibe coding.</span>

<div class="label" style="margin-top:10px">LANGUAGES</div>
<span class="accent">  EN</span> <span class="dimmed">Native / bilingual</span>
<span class="accent">  DE</span> <span class="dimmed">Native / bilingual</span>
<span class="accent">  SV</span> <span class="dimmed">Native / bilingual</span>

<div class="label" style="margin-top:10px">OPINIONS</div>
<span class="accent">  ✓</span> low level > abstractions
<span class="accent">  ✓</span> good docs are not optional
<span class="accent">  ✓</span> automate everything boring
<span class="error">  ✗</span> "vibe coding"
<span class="error">  ✗</span> javascript (mostly)
<span class="error">  ✗</span> undocumented APIs

<span class="dimmed">  → try: </span><span class="highlight">ls experience</span><span class="dimmed"> | </span><span class="highlight">ls education</span>`;
}

function renderSkills() {
  const skills = [
    { name: "python", comment: "# daily driver, scripting to prod" },
    { name: "bash", comment: "# automate all the things" },
    { name: "c", comment: "# low level, embedded, fast" },
    { name: "sql", comment: "# relational genius" },
    { name: "linux", comment: "# btw i use fedora (on my laptop arch)" },
    { name: "rust", comment: "# still learning, borrow checker is humbling" },
    { name: "docker", comment: "# containers, homelab staple" },
    { name: "git", comment: "# git blame is always me" },
  ];

  let html = `<div class="label">TECH STACK</div>\n`;
  for (const s of skills) {
    html += `<div class="skill-row">
  <span class="skill-name">${s.name}</span>
  <span class="skill-comment">${s.comment}</span>
</div>\n`;
  }
  return html;
}

function renderProjects() {
  return `<div class="label">PROJECTS</div>
<div class="project-card">
  <div class="project-name">cli-launcher</div>
  <div class="project-desc">Rust learning project: A CLI application launcher written in Rust. Fast, minimal, does what it says.</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/cli_launcher" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Rust</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">battery-sim</div>
  <div class="project-desc">Battery storage simulator written in Rust. Models behaviour and outcomes against multiple years of real grid data.</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/battery_sim" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Rust</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">PowerMatch</div>
  <div class="project-desc">Real-time energy game: match your live power output to a dynamically shifting target curve. Precision-based.</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/PowerMatch" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Vue · archived</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">epidemic-sim</div>
  <div class="project-desc">SIR model epidemic simulation. Built for Komvux mathematics finals (WIP).</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/epidemic-sim" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Python</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">influxdb-trmnl-plugin</div>
  <div class="project-desc">TRMNL e-ink display plugin that pulls data from InfluxDB. Classic homelab glue code.</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/influxdb_trmnl_plugin" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Python</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">dotfiles</div>
  <div class="project-desc">Config files for my setup. The usual suspects — zsh, nvim, i3, and whatever else needs taming.</div>
  <div class="project-links">
    <a href="https://github.com/isak-sk/dotfiles" target="_blank">github →</a>
    <span style="font-size:11px;color:var(--text-dim)">Shell</span>
  </div>
</div>
<div class="project-card">
  <div class="project-name">iskoog.dev</div>
  <div class="project-desc">This terminal portfolio. Because who needs a normal website.</div>
  <div class="project-links">
    <span class="dimmed">you're looking at it</span>
  </div>
</div>`;
}

function renderExperience() {
  return `<div class="label">WORK EXPERIENCE</div>
<div class="project-card">
  <div class="project-name">Silverbeard Engineering AB</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">Software Engineer · Full-time</div>
  <div class="project-desc" style="margin-top:4px">Sep 2024 – Present · Gothenburg, Sweden (on-site)</div>
  <div class="project-desc" style="margin-top:6px">Designing and building scalable trading systems with a focus on robust infrastructure and clean system design.</div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Software Infrastructure · Software Design · Trading Systems</div>
</div>
<div class="project-card">
  <div class="project-name">Open Source Developer</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">Self-employed</div>
  <div class="project-desc" style="margin-top:4px">Feb 2025 – Present</div>
  <div class="project-desc" style="margin-top:6px">Contributing to open source projects. Primarily C and systems-level work.</div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Open-Source Development · C</div>
</div>
<div class="project-card">
  <div class="project-name">Eniwa AG</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">Software Engineer Intern</div>
  <div class="project-desc" style="margin-top:4px">Jun 2025 – Aug 2025 · Aargau, Switzerland (on-site)</div>
  <div class="project-desc" style="margin-top:6px">Built energy-system simulations to enhance planning of future projects. Developed a cluster of pipelines to structure unstructured data from multiple sources.</div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Simulation Software · Data Pipelines · Software Development</div>
</div>
<div class="project-card">
  <div class="project-name">UBS</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">Platform Engineer · Apprenticeship</div>
  <div class="project-desc" style="margin-top:4px">Aug 2020 – Jul 2024 · 4 yrs · Zürich, Switzerland (on-site)</div>
  <div class="project-desc" style="margin-top:6px">Systems development spanning cyber security, hosting, and trading infrastructure — focus on automation and problem solving. Final project: trading platform automation. <span class="accent">Top grade.</span></div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Python · Network Security · Trading Infrastructure · Automation</div>
</div>`;
}

function renderEducation() {
  return `<div class="label">EDUCATION</div>
<div class="project-card">
  <div class="project-name">Komvux Alingsås</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">High School Diploma — Technical Sciences & Mathematics</div>
  <div class="project-desc" style="margin-top:4px">Aug 2024 – Jul 2026</div>
  <div class="project-desc" style="margin-top:6px">Technical high school diploma pursued to meet Swedish university admission requirements (Swiss vocational education pathway didn't provide sufficient credit).</div>
</div>
<div class="project-card">
  <div class="project-name">TBZ Technische Berufsschule Zürich</div>
  <div style="color:var(--green-dim);font-size:12px;margin-top:2px">Federal Diploma of VET — Computer Science</div>
  <div class="project-desc" style="margin-top:4px">2020 – 2024</div>
  <div class="project-desc" style="margin-top:6px">Vocational school concurrent with UBS apprenticeship. <span class="accent">Final grade: 5.0/6.0. Final project: 5.6/6.0.</span></div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Network Security · Python · Computer Science</div>
</div>

<div class="label" style="margin-top:12px">CERTIFICATIONS</div>
<span class="dimmed">  Cambridge B2 English</span> <span class="accent">·</span> <span class="dimmed">Cambridge University Press & Assessment — Jun 2019</span>
<span class="dimmed">  Google IT Support Professional Certificate</span> <span class="accent">·</span> <span class="dimmed">Google — Dec 2019</span>
<span class="dimmed">  Financial markets online course</span> <span class="accent">·</span> <span class="dimmed">Yale University (Coursera) - May 2023</span>
<span class="dimmed">  5G Network Architecture and Protocols</span> <span class="accent">·</span> <span class="dimmed">LearnQuest - Oct 2025</span>`;
}

function renderDate() {
  const d = new Date();
  return `<span class="info">${d.toLocaleDateString("en-SE", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
<span class="dimmed">${d.toLocaleTimeString("en-SE")} — ${Intl.DateTimeFormat().resolvedOptions().timeZone}</span>`;
}

function renderFortune() {
  const quotes = [
    `<span class="accent">"There's no place like 127.0.0.1"</span>`,
    `<span class="accent">"rm -rf /?"</span> <span class="dimmed">— never try this at home (or do, i'm a comment not a cop)</span>`,
    `<span class="accent">"Debugging:"</span> <span class="dimmed">spending 90% of your time fixing bugs you definitely didn't write</span>`,
    `<span class="accent">"Programmer (n.):"</span> <span class="dimmed">machine that converts Monster Energy into non-working software</span>`,
    `<span class="accent">"just accept it twin"</span> <span class="dimmed">— a good friend, probably</span>`,
    `<span class="accent">"It works on my machine"</span> <span class="dimmed">— shipping the machine, then</span>`,
    `<span class="accent">"The best code is no code."</span> <span class="dimmed">But I write it anyway.</span>`,
    `<span class="accent">"sleep is a compile step"</span> <span class="dimmed">— me, 2am, debugging a race condition</span>`,
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderSudo() {
  return `<span class="error">sudo: permission denied.</span>
<span class="dimmed">Nice try, script kiddie.</span>`;
}

function renderNeofetch() {
  return `<span style="color:var(--blue)">        _____         </span>   <span class="highlight">iskoog</span><span class="dimmed">@</span><span class="highlight">iskoog.dev</span>
<span style="color:var(--blue)">       /     \        </span>   <span class="dimmed">──────────────────────</span>
<span style="color:var(--blue)">      / ____ /  __ \  </span>   <span class="dimmed">OS:</span>     Fedora Linux 41 x86_64
<span style="color:var(--blue)">     / /    /  /  \ \ </span>   <span class="dimmed">Shell:</span>  zsh 5.9
<span style="color:var(--blue)">    / /____/ __/  / / </span>   <span class="dimmed">Lang:</span>   Python / Rust / C
<span style="color:var(--blue)">   /______/      /_/  </span>   <span class="dimmed">Editor:</span> vim (obviously)
<span style="color:var(--blue)">     fedora            </span>   <span class="dimmed">WM:</span>     i3 / sway
                           <span class="dimmed">Theme:</span>  gruvbox-dark
<span style="color:var(--green)">  ██</span><span style="color:var(--blue)">██</span><span style="color:var(--amber)">██</span><span style="color:var(--red)">██</span><span style="color:var(--text-dim)">████</span>       <span class="dimmed">Mood:</span>   <span class="accent">caffeinated</span>`;
}

function renderContact() {
  return `<div class="label">CONTACT</div>
  <span class="dimmed">Email   </span><a href="mailto:skoog.isak@gmail.com">skoog.isak@gmail.com</a>
  <span class="dimmed">GitHub  </span><a href="https://github.com/isak-sk" target="_blank">github.com/isak-sk</a>
  <span class="dimmed">LinkedIn</span><a href="https://linkedin.com/in/isakskoog" target="_blank">linkedin.com/in/isakskoog</a>

<span class="dimmed">  Response time: usually fast unless it's 2am debugging something.</span>`;
}

// ─── History ───────────────────────────────────────────────────────────────────
const history = [];
let histIdx = -1;

// ─── DOM Helpers ───────────────────────────────────────────────────────────────
function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function printCommand(cmd) {
  const line = document.createElement("div");
  line.className = "cmd-line";
  line.innerHTML = `<span class="prompt-sym">iskoog@dev:~$</span> <span class="cmd-text">${escHtml(cmd)}</span>`;
  output.appendChild(line);
}

function printResult(html) {
  if (!html) return;
  const div = document.createElement("div");
  div.className = "result";
  div.innerHTML = html;
  output.appendChild(div);
}

// ─── Run Command ───────────────────────────────────────────────────────────────
function runCommand(cmd) {
  cmd = cmd.trim();
  if (!cmd) return;

  history.unshift(cmd);
  histIdx = -1;

  printCommand(cmd);

  if (cmd === "clear") {
    output.innerHTML = "";
    return;
  }

  let result;
  if (cmd.startsWith("sudo ")) {
    result = commands.sudo();
  } else if (typeof commands[cmd] === "function") {
    result = commands[cmd]();
  } else {
    result = `<span class="error">command not found:</span> ${escHtml(cmd)}<br><span class="dimmed">  try 'help' for a list of commands</span>`;
  }

  if (result && result !== "__CLEAR__") {
    printResult(result);
  }

  requestAnimationFrame(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
}

// ─── Autocomplete ──────────────────────────────────────────────────────────────
function getMatches(val) {
  if (!val) return [];
  return allCmds.filter((c) => c.startsWith(val) && c !== val);
}

function updateSuggestions(val) {
  suggestionsEl.innerHTML = "";
  getMatches(val)
    .slice(0, 6)
    .forEach((m) => {
      const chip = document.createElement("button");
      chip.className = "suggestion-chip";
      chip.textContent = m;
      chip.style.display = "inline-block";
      chip.addEventListener("click", () => {
        input.value = m;
        input.focus();
        updateSuggestions(m);
      });
      suggestionsEl.appendChild(chip);
    });
}

// ─── Input Events ──────────────────────────────────────────────────────────────
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value;
    input.value = "";
    updateSuggestions("");
    runCommand(cmd);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (histIdx < history.length - 1) {
      histIdx++;
      input.value = history[histIdx];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (histIdx > 0) {
      histIdx--;
      input.value = history[histIdx];
    } else {
      histIdx = -1;
      input.value = "";
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const matches = getMatches(input.value);
    if (matches.length === 1) {
      input.value = matches[0];
      updateSuggestions("");
    } else if (matches.length > 1) {
      updateSuggestions(input.value);
    }
  }
});

input.addEventListener("input", () => updateSuggestions(input.value));

document
  .getElementById("terminal")
  .addEventListener("click", () => input.focus());

// ─── Boot Sequence ─────────────────────────────────────────────────────────────
const bootLines = [
  {
    text: '<span class="dimmed">iskoog.dev BIOS v2.5.1 — initialising…</span>',
    delay: 0,
  },
  {
    text: '<span class="dimmed">loading kernel modules… </span><span class="accent">ok</span>',
    delay: 120,
  },
  {
    text: '<span class="dimmed">mounting filesystems… </span><span class="accent">ok</span>',
    delay: 240,
  },
  {
    text: '<span class="dimmed">starting portfolio daemon… </span><span class="accent">ok</span>',
    delay: 380,
  },
  { text: "", delay: 500 },
  {
    text: '<span style="color:var(--green);font-weight:700;font-size:16px">iskoog.dev</span>  <span class="dimmed">—  software engineer / systems nerd</span>',
    delay: 600,
  },
  {
    text: '<span class="dimmed">────────────────────────────────────────</span>',
    delay: 720,
  },
  {
    text: '<span class="dimmed">Welcome. Type </span><span class="highlight">help</span><span class="dimmed"> to get started.</span>',
    delay: 840,
  },
  { text: "", delay: 900 },
];

function bootSequence() {
  bootLines.forEach(({ text, delay }) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "result boot-line";
      div.innerHTML = text;
      output.appendChild(div);
    }, delay);
  });
  setTimeout(() => input.focus(), 950);
}

bootSequence();
