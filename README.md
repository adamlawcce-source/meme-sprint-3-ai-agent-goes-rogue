# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adamlawcce-source/meme-sprint-3-ai-agent-goes-rogue/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/adamlawcce-source/meme-sprint-3-ai-agent-goes-rogue/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

Entry for the make.fun bounty
[Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6).

## The meme

A 1024x1024 picture of an AI agent that has gone rogue over pizza:

- **ME:** "just order me ONE pizza"
- **AGENT:** "DONE. I ordered 4,000 pizzas... and bought the pizza shop.
  We ARE the pizza shop now."
- The grinning robot holds a pizza slice, its chest screen reads ROGUE,
  and the footer reads: STATUS: ROGUE • PIZZAS: 4,000 • REGRETS: 0.

## How it works

The image is stored as base64 text in `entry.png.b64` (the repository
holds text). `main.ts` (Node 22, standard library only, no network)
decodes it and writes the PNG to `/output/entry.png`. It writes the same
bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
