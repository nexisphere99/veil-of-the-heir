# v0.0.18 Integration Guide
## Stylish Queen Sessions 6–7: Foundation Dressing

---

## Folder Placement

Place the new `.twee` file at:
```
src/passages/stylish_queen/sessions_6_7.twee
```
Or, if the project uses a flat passage structure:
```
src/passages/stylish_queen_sessions_6_7.twee
```
Follow whichever convention the existing `valetia_session` files use.

---

## Passages Created (22 total)

### Session 6 — Layering & Corset Fitting (12 passages)
| Passage Name | Description |
|---|---|
| `stylish_queen_session_6_1` | Opening — Valetia's dressing chamber, chemise introduction |
| `stylish_queen_session_6_2` | Chemise fitting and layering principles |
| `stylish_queen_session_6_3` | Corset introduction and lacing |
| `stylish_queen_session_6_4a` | **Choice branch A** — Fascinated by corset reflection (`$femininity_style` +2) |
| `stylish_queen_session_6_4b` | **Choice branch B** — Unsettled by corset reflection (`$confusion` +1, `$defiance` +1) |
| `stylish_queen_session_6_4` | Merge point — both branches converge, court vs. combat corset discussion |
| `stylish_queen_session_6_5` | Bodice application over corset |
| `stylish_queen_session_6_6` | Full gown assembly |
| `stylish_queen_session_6_7` | Mirror assessment in complete outfit |
| `stylish_queen_session_6_8` | Self-dressing practice (timed challenge) |
| `stylish_queen_session_6_9` | Walking the corridor in full dress, Maera encounter |
| `stylish_queen_session_6_10` | Session 6 closing — Valetia's assessment, transition to Session 7 |

### Session 7 — Skirt Movement & Curtseying (10 passages)
| Passage Name | Description |
|---|---|
| `stylish_queen_session_7_1` | Opening — three skirt lengths introduced (tea, ankle, court-train) |
| `stylish_queen_session_7_2` | Walking technique in different hem lengths |
| `stylish_queen_session_7_3` | Turning exercises — pivot, sweep, about-face |
| `stylish_queen_session_7_4` | Sitting technique — perching, smoothing, posture |
| `stylish_queen_session_7_5` | Rising from seated position with grace |
| `stylish_queen_session_7_6` | Curtseying — shallow acknowledgment and medium respect |
| `stylish_queen_session_7_7` | Deep court curtsey and curtseying with train |
| `stylish_queen_session_7_8` | Stair ascending — hem lifting, pace, handrail technique |
| `stylish_queen_session_7_9` | Stair descending — train management, controlled descent |
| `stylish_queen_session_7_10` | Final assessment — full movement circuit, Valetia's verdict |

---

## Variables Used

### Existing Variables (no `story-init.twee` changes needed)
These variables should already be initialized in `story-init.twee` from the base game (v0.0.17):

| Variable | Usage in v0.0.18 | Expected Init Value |
|---|---|---|
| `$femininity_style` | Incremented ~15 times across both sessions | `0` |
| `$valetia_trust` | Incremented ~4 times | `0` |
| `$confusion` | Incremented in choice branch `6_4b` | `0` |
| `$defiance` | Incremented in choice branch `6_4b` | `0` |

### Verify These Exist
If any of the above are **not** already in `story-init.twee`, add them:
```twee
<<set $femininity_style to 0>>
<<set $valetia_trust to 0>>
<<set $confusion to 0>>
<<set $defiance to 0>>
```

### No New Variables Introduced
v0.0.18 does not create any new tracking variables. All variables used are established in the existing passage system.

---

## Entry Point — Links from Existing Passages

The new content should be linked from the **end of the existing Session 5** content:

```twee
/* Add to the end of the last Session 5 passage (likely valetia_session_5_end or similar): */

[[Continue to the next session with Valetia|stylish_queen_session_6_1]]
```

**Find the exact passage name** by searching existing `.twee` files for the last passage in Valetia's Session 5 sequence. The link text can be adjusted to match the existing style, e.g.:
- `[[Return to Valetia's chambers tomorrow|stylish_queen_session_6_1]]`
- `[[Next morning — Valetia's dressing lesson|stylish_queen_session_6_1]]`

### Internal Flow
- Session 6 flows linearly from `6_1` → `6_10`, with one branch at `6_3` splitting to `6_4a`/`6_4b` before merging at `6_4`
- Session 6 ends at `6_10` which links directly to `7_1`
- Session 7 flows linearly from `7_1` → `7_10`

### Exit Point
`stylish_queen_session_7_10` should link to wherever the player returns after a Valetia session (likely a hub passage like `daily_schedule`, `queens_chambers`, or similar). Check existing session endings for the standard return passage name.

For future integration, v0.0.22 (Sessions 8–9) will link from `stylish_queen_session_7_10`.

---

## CSS Additions

**None required.** The content uses existing SugarCube macros and standard passage formatting. No custom styling is introduced.

If the project has custom CSS for the `<<speech>>` macro (character dialogue styling), verify that `Valetia` and `Maera` are registered as valid speaker names in whatever speech macro system is in use.

---

## JavaScript Additions

**None required.** No new macros, widgets, or JavaScript functions are introduced in v0.0.18.

---

## Custom Macros Used

The content relies on these macros that should already exist in the project:

| Macro | Purpose | Example |
|---|---|---|
| `<<speech "CharName">>...<</speech>>` | Character dialogue with styling | `<<speech "Valetia">>Shoulders back!<</speech>>` |
| `<<set $var to/+= val>>` | Variable manipulation | `<<set $femininity_style += 1>>` |
| `<<goto "passage">>` | Redirect after choice branches | `<<goto "stylish_queen_session_6_4">>` |

---

## Testing Checklist

- [ ] All 22 passages compile without Twee/SugarCube errors
- [ ] `<<speech>>` macro renders correctly for Valetia and Maera
- [ ] Choice branch at `6_3` correctly routes to `6_4a` or `6_4b`
- [ ] Both branches merge cleanly at `6_4` via `<<goto>>`
- [ ] `$femininity_style` increments tracked correctly across playthrough
- [ ] `$valetia_trust` increments at expected moments
- [ ] Entry link from Session 5 ending works
- [ ] Exit link from `7_10` returns to appropriate hub
- [ ] No broken `[[links]]` in any passage
- [ ] Passage names don't collide with existing passages

---

## Next Version Preview

**v0.0.19 — Suitor First Dates: Aldren & Vaela**
First one-on-one dates with Sun-Knight Aldren (garden walk, vanilla romance) and Warrior-Goddess Vaela (sparring yard, lesbian spark). ~18 passages.
