---
title: Evil Marks in doom emacs
tags:
  - text-editors
created: 2025-05-01
---
### Setting & Jumping

-   `m{a-zA-Z}`: Set mark {a-zA-Z} at point
-   `'{a-zA-Z}`: Jump to mark {a-zA-Z}
-   `` `` ``: Jump to position before last jump
-   `'.`: Jump to last change
-   `'^`: Jump to last insertion

### Special Jumps

-   `'[`: Start of last change/yank
-   `']`: End of last change/yank
-   `'<`: Start of last visual selection
-   `'>`: End of last visual selection

## Automatic Marks

-   `''`: Last jump position
-   `'"`: Position when last exiting buffer
-   `'0`: Position in last edited file
-   `'1` through `'9`: Previous positions in change list

## Mark Ring

-   `C-o`: Older position in jump list
-   `C-i`: Newer position in jump list
-   `:marks`: List all marks
-   `:delmarks {marks}`: Delete specified marks
-   `:delmarks!`: Delete all buffer marks

## Visual Operations with Marks

-   `v'{mark}`: Select to mark
-   `V'{mark}`: Select lines to mark
-   `d'{mark}`: Delete to mark
-   `y'{mark}`: Yank to mark

## Global Marks

-   `m{A-Z}`: Set global mark
-   `'{A-Z}`: Jump to global mark
-   `:wshada!`: Save marks
-   `:rshada!`: Restore marks

## Tips

-   Lowercase marks (a-z) → local buffer
-   Uppercase marks (A-Z) → global/cross-file
-   Marks persist until deleted/reset
-   Mark ring ≠ jump list
-   ShaDa saves between sessions
