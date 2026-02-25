const output = document.getElementById("output");
const input = document.getElementById("command");

const commands = {
  help: () => {
    return `
      Available commands:
      - whoami        # Who is this sexy swedish guy?
      - ls skills     # Peek at my dev skills
      - ls projects   # Check out my side projects
      - date          # Current system time
      - fortune       # Random dev wisdom / jokes
      - sudo <cmd>    # You probably shouldn’t…`;
  },

  whoami: () => {
    return `
      Isak Skoog
      Backend Developer | Python / Rust / C/C++ / Bash
      Loves: Declarative code, logical problems, 2am debugging, homelabs, nerd stuff
      Hates: "vibe coding", javascript, bad documentation`;
  },

  "ls skills": () => {
    return `
      python/    # favorite language for quick stuff
      c_cpp/     # looooow level 
      rust/      # still learning this one... tricky
      bash/      # i love automating anything and everything
      sql/       # relational genius
      linux/     # thank you linus torvalds`;
  },

  "ls projects": () => {
    return `
            Battery simulator    [https://github.com/isak-sk/batter_sim]
            ascii-renderer       [coming soon...]`;
  },

  date: () => {
    return new Date().toString();
  },

  fortune: () => {
    const quotes = [
      "There’s no place like 127.0.0.1",
      "rm -rf /? Never try this at home",
      "Debugging: Where you spend 90% of your time fixing bugs you didn’t write",
      "Programmer (noun): Machine that turns monster energy drinks into code"
      "\"just accept it twin\" -good friend"
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];

  },

  sudo: () => "Haha nice try. You don’t have permissions."

};

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    
    let result = commands[cmd] || `Command not found: ${cmd}`;
    
    if (cmd.startsWith("sudo ")) result = commands.sudo();
    
    output.innerHTML += `&gt; ${cmd}<br>${result}<br>`;
    
    input.value = "";
    
    window.scrollTo(0, document.body.scrollHeight);
  }
});
