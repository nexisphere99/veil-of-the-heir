# v0.0.19 Integration Guide — Suitor First Dates
## Code Agent Prompt for Wiring Passages into Veil of the Heir

---

## Overview

This guide instructs how to integrate the 18 new passages from the Suitor First Dates arc (v0.0.19) into the existing Twine/SugarCube game. The content file is `v0_0_19_suitor_dates_content.md` — all passage text is in SugarCube twee format, ready to be split into `.twee` files and linked to existing game passages.

---

## Step 1: Create the File Structure

Create the following files under the `component/v0.0.19/` directory:

```
component/v0.0.19/
├── suitor_date_morning.twee      ← Passages: suitor_date_morning_1, suitor_date_morning_2
├── suitor_date_aldren.twee       ← Passages: suitor_date_aldren_1 through _6, plus _6a, _6b, _6c
├── suitor_date_vaela.twee        ← Passages: suitor_date_vaela_1 through _6, plus _7a, _7b, _7c
└── suitor_date_evaluation.twee   ← Passages: suitor_date_evaluation_1, suitor_date_evaluation_2
```

Extract each `:: passage_name [tags]` block from the content markdown (inside the ` ```twee ``` ` code fences) and place them into the corresponding `.twee` file. Strip the markdown formatting — only the raw twee content goes into the files.

---

## Step 2: Initialize Variables

In your **StoryInit** passage (or wherever global variables are initialized), add:

```twee
<<set $aldren_affection to 0>>
<<set $vaela_affection to 0>>
<<set $lesbian_curiosity to 0>>
<<set $suitor_dates_completed to 0>>
```

**Note:** These are also set at the top of `suitor_date_morning_1`, but initializing in StoryInit ensures they exist even if a player loads a save that skips the morning passage.

---

## Step 3: Link Entry Point

The suitor dates arc begins at `suitor_date_morning_1`. This passage should be reachable from the existing suitor selection ceremony content.

Find the passage where the suitor selection ceremony concludes (likely in `component/v0.0.18/` or the suitor selection `.twee` files). At the end of that passage, or in the bed chamber passage that follows, add a link:

```twee
<<link "Begin the first dates" "suitor_date_morning_1">><</link>>
```

Alternatively, if dates are triggered by sleeping/next-day mechanics, add the link to the `mc_bed_chamber` passage behind a conditional:

```twee
<<if $suitor_selection_complete and $suitor_dates_completed eq 0>>
    <<link "The morning of the first dates arrives..." "suitor_date_morning_1">><</link>>
<</if>>
```

Adjust `$suitor_selection_complete` to match whatever flag your game uses to mark the selection ceremony as finished.

---

## Step 4: Link Exit Point

The arc ends at `suitor_date_evaluation_2`, which links back to `mc_bed_chamber`:

```twee
<<link "Return to your chamber" "mc_bed_chamber">><</link>>
```

Ensure `mc_bed_chamber` exists as a passage name in your game. If it's named differently (e.g., `bed_chamber`, `caelan_chamber`), update the link target in `suitor_date_evaluation_2` to match.

---

## Step 5: Post-Date NPC Dialogue Unlocks

After `$suitor_dates_completed >= 1`, the following NPCs should gain new dialogue options. Add these as conditional blocks in their existing dialogue passages:

### Maera (mc_bed_chamber or garden passages)

```twee
<<if $suitor_dates_completed gte 1>>
    <<link "Ask Maera about Aldren">>
        <<replace "#maera-dialogue">>
        "He seems kind — too kind for court, maybe. Kindness hath a short lifespan in these halls." She folds a chemise with unnecessary force. "But what do I know? I am merely the one who dresses thee."
        <</replace>>
    <</link>>
    <<link "Ask Maera about Vaela">>
        <<replace "#maera-dialogue">>
        "That one would eat thee alive." A beat. She smooths the chemise she just mangled. "I approve."
        <</replace>>
    <</link>>
<</if>>
```

### Torin (courtyard, stable, or iron_garden passages)

```twee
<<if $suitor_dates_completed gte 1>>
    <<link "Talk to Torin about the dates">>
        <<replace "#torin-dialogue">>
        He does not look up from the harness he is mending. "I heard the dates went... well." The leather creaks in his grip. He says nothing else, and the silence between you is a different shape than it used to be.
        <</replace>>
    <</link>>
<</if>>
```

### Edran Mossfoot (garden — side content)

```twee
<<if $suitor_dates_completed gte 1>>
    <<link "Ask Edran about the white rose">>
        <<replace "#edran-dialogue">>
        He looks up from the soil, eyes bright beneath the tangle of brown hair. "The white rose. Thou dost know its meaning in Valmoria?" He brushes the dirt from a petal with the tenderness of a man touching a child's face. "Purity. New beginnings. A flower given to queens-to-be since before the Echofire. He chose well, thy golden knight." He returns to the earth. "Or perhaps the rose chose him."
        <</replace>>
    <</link>>
<</if>>
```

---

## Step 6: Tag Configuration

The passages use the following tags for stylesheet/script targeting:

| Tag | Purpose |
|---|---|
| `suitor-date` | All suitor date passages (global styling hook) |
| `morning` | Morning preparation passages |
| `aldren` | Sir Aldren Thornwild date passages |
| `vaela` | Lady Vaela Rhyss date passages |
| `evaluation` | Serelyne's evaluation passages |
| `choice` | Player choice reaction passages |

If your game applies CSS or JavaScript based on tags, you can target these for background changes, music triggers, or UI adjustments. Example:

```css
[data-tags~="aldren"] {
    background-image: url('assets/bg_garden_morning.webp');
}

[data-tags~="vaela"] {
    background-image: url('assets/bg_iron_garden.webp');
}

[data-tags~="evaluation"] {
    background-image: url('assets/bg_serelyne_chamber.webp');
}
```

---

## Step 7: Passage Flow Diagram

```
mc_bed_chamber (or suitor_selection end)
    │
    ▼
suitor_date_morning_1
    │
    ▼
suitor_date_morning_2
    │
    ▼
suitor_date_aldren_1
    │
    ▼
suitor_date_aldren_2
    │
    ▼
suitor_date_aldren_3
    │
    ▼
suitor_date_aldren_4
    │
    ▼
suitor_date_aldren_5
    │
    ▼
suitor_date_aldren_6  ──► CHOICE ──┬── _6a (heart raced)     [$aldren_affection +3]
                                    ├── _6b (kind gesture)     [neutral]
                                    └── _6c (too forward)      [$aldren_affection -2]
                                         │
                                         ▼  (all three lead to)
                                 suitor_date_vaela_1
                                         │
                                         ▼
                                 suitor_date_vaela_2
                                         │
                                         ▼
                                 suitor_date_vaela_3
                                         │
                                         ▼
                                 suitor_date_vaela_4
                                         │
                                         ▼
                                 suitor_date_vaela_5
                                         │
                                         ▼
                                 suitor_date_vaela_6  ──► CHOICE ──┬── _7a (terrifies/want more) [$vaela_affection +3, $lesbian_curiosity +2]
                                                                    ├── _7b (too aggressive)      [$vaela_affection -2]
                                                                    └── _7c (felt nothing)        [neutral]
                                                                         │
                                                                         ▼  (all three lead to)
                                                              suitor_date_evaluation_1  ──► CHOICE ──┬── Aldren's lips    [$aldren_affection +1]
                                                                                                      ├── Vaela's fingers  [$vaela_affection +1, $lesbian_curiosity +1]
                                                                                                      └── Both differently [neutral]
                                                                                                           │
                                                                                                           ▼
                                                                                               suitor_date_evaluation_2
                                                                                                           │
                                                                                                           ▼
                                                                                                    mc_bed_chamber
```

---

## Step 8: Variable Score Ranges After v0.0.19

After completing the first date sequence, possible score ranges:

| Variable | Min | Max | Notes |
|---|---|---|---|
| `$aldren_affection` | -2 | +4 | -2 (too forward) to +3 (heart raced) + 1 (Aldren's lips lingered) |
| `$vaela_affection` | -2 | +4 | -2 (too aggressive) to +3 (want more) + 1 (Vaela's fingers lingered) |
| `$lesbian_curiosity` | 0 | +3 | +2 (want more) + 1 (Vaela's fingers lingered) |
| `$suitor_dates_completed` | 1 | 1 | Incremented once in evaluation_1 |

These variables carry forward into future versions for suitor ranking, dialogue unlocks, and relationship branching.

---

## Step 9: Testing Checklist

- [ ] All 18 passages load without SugarCube errors
- [ ] Entry link from suitor selection / bed chamber reaches `suitor_date_morning_1`
- [ ] All `<<link>>` macros navigate to correct passages
- [ ] All three Aldren choice branches (`_6a`, `_6b`, `_6c`) lead to `suitor_date_vaela_1`
- [ ] All three Vaela choice branches (`_7a`, `_7b`, `_7c`) lead to `suitor_date_evaluation_1`
- [ ] All three evaluation choices lead to `suitor_date_evaluation_2`
- [ ] `$aldren_affection` updates correctly per choice path
- [ ] `$vaela_affection` updates correctly per choice path
- [ ] `$lesbian_curiosity` increments only on Vaela-positive choices
- [ ] `$suitor_dates_completed` equals 1 after completing the arc
- [ ] Exit link returns to `mc_bed_chamber` (or correct bed chamber passage name)
- [ ] Post-date NPC dialogues appear for Maera, Torin, and Edran
- [ ] No orphaned passages (every passage is reachable)
- [ ] Tags render correctly for CSS/JS targeting

---

*End of integration guide.*
