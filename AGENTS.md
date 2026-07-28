# AGENTS.md

Guidance for AI coding agents working in this repository.

## Repository Overview

This repository is an early-stage scaffold for a `chrome-os` related project. It currently
contains only placeholder content:

- `chrome-os/` — intended location for the project's source and configuration files. Currently
  contains only a `.gitkeep` placeholder and a `README.md` describing the intended scaffold.
- `README.md` (repository root) — currently holds unrelated/placeholder content and should not
  be treated as authoritative documentation.

There is no build system, package manifest, source code, or test suite in this repository yet.

## Working in This Repository

- Do not assume any particular language, framework, or build tooling is already configured —
  none currently exists. If a task requires adding source code, choose tooling appropriate to
  the task and document it (e.g., add a proper README and configuration files under
  `chrome-os/`).
- Prefer adding new project files inside `chrome-os/` unless the task explicitly says otherwise.
- Since there are no existing lint/build/test scripts, do not invent CI or tooling requirements
  unless the task asks for them. If you add tooling, also add the minimal scripts/config needed
  to run it, and document how to run it in the relevant README.
- Keep unrelated placeholder content (e.g., stray files at the repository root) untouched unless
  a task specifically asks you to clean them up.

## Validation

There are currently no linters, build steps, or automated tests configured in this repository.
If you introduce code, add corresponding lint/build/test commands and run them before finishing
your task.
