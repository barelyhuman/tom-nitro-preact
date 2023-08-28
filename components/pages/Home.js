import { GithubLogo } from "../icons/github";
import { LinkedinLogo } from "../icons/linkedin";
import { TwitterLogo } from "../icons/twitter";

const TOM = "tom".split("");
const LIENARD = "lienard".split("");

export default function HomePage() {
  return (
    <div class="container">
      <h1 class="title">
        {TOM.map((letter, index) => (
          <span
            style={{ animationDelay: `${(index + 2) / 10}s` }}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
        <br />
        {LIENARD.map((letter, index) => (
          <span
            style={{ animationDelay: `${(index + 4) / 10}s` }}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p class="subtitle" style={{ animationDelay: "1s" }}>
        crafting softwares at{" "}
        <img src="/public/scaleway.png" alt="Scaleway logo" class="icon" />{" "}
        Scaleway
        <span className="prev">
          <span className="exp" data-desc="Founder">
            2022-now ⸺{" "}
            <img
              src="/public/lagon.png"
              alt="Lagon.app logo"
              className="icon"
            />{" "}
            <a class="link" href="https://lagon.app" target="_blank">
              Lagon
            </a>
          </span>
          <span className="exp" data-desc="Frontend developer">
            2021-now ⸺{" "}
            <img
              src="/public/scaleway.png"
              alt="Scaleway logo"
              className="icon"
            />{" "}
            <a class="link" href="https://scaleway.com" target="_blank">
              Scaleway
            </a>
          </span>
          <span className="exp" data-desc="Engine & open-source">
            2021-22&nbsp;&nbsp;&nbsp;&nbsp;&#8201;⸺{" "}
            <img src="/public/fig.webp" alt="Fig.io logo" className="icon" />{" "}
            <a class="link" href="https://fig.io" target="_blank">
              Fig
            </a>
          </span>
        </span>
      </p>
      <p class="subtitle hidden" style={{ animationDelay: "1.1s" }}>
        enjoys Cloud, Open Source, playing Piano
      </p>
      <p class="subtitle map" style={{ animationDelay: "1.2s" }}>
        lives in 🇫🇷 Paris
        <span class="background">
          <img src="/public/paris.jpg" alt="Map of Paris" />
        </span>
      </p>
      <p class="subtitle socials" style={{ animationDelay: "1.3s" }}>
        <a class="icon link" href="https://github.com/QuiiBz" target="_blank">
          <GithubLogo />
        </a>
        <a
          class="icon link"
          href="https://twitter.com/tomlienard"
          target="_blank"
        >
          <TwitterLogo />
        </a>
        <a
          class="icon link"
          href="https://linkedin.com/in/tom-lienard/"
          target="_blank"
        >
          <LinkedinLogo />
        </a>
      </p>
    </div>
  );
}
