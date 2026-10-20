# Episode 2 simulation - recording guide

Open `index.html` and click a scene.

## Fastest way to record: the player

Open `play.html`, choose the pace (Slow / Normal / Fast) and clean mode, press Start. It goes full screen and plays every scene in order, waiting for each animation before the next step. Record the screen once and cut in the edit. Keys while playing: Space pause / resume, Right arrow next step now, N / B next / previous scene, H show the scene name. "Start at scene" lets you re-record from any scene.

## Recording settings (for the production team)

- Every scene is 16:9 and fills a 16:9 screen edge to edge. Open it in Chrome, press F11 (full screen), then record the screen. On a 16:10 laptop screen there will be thin black bars at top and bottom; use a 16:9 monitor or crop.
- Record on a 4K screen if possible (or a 1080p screen at 100% Windows scaling). Everything is drawn by the browser, not stretched images, so it stays sharp at any size and leaves room to punch in during the edit.
- Record on a Windows PC. The scenes use Windows fonts (Tahoma, Lucida Console, Arial, Courier New); on a Mac they fall back to other fonts and the period look breaks.
- Final takes: add `?clean=1` (no badge, no grey source tags, no on-screen captions in A5/A6, so Arabic graphics can go on top). Add `&nocursor=1` for takes without a mouse pointer (the modern Windows cursor does not belong on a 2005 screen; use it only for click shots).
- Keep one take with the tags visible for the fact-check and legal review.
- Bottom third: diagrams, sheets and the wall keep the bottom third free for subtitles. The Windows desktop scenes fill the screen like a real monitor; their key element (dialog, highlighted line) sits in the upper two thirds.

Mouse:
- Click anywhere on the screen: next step.
- Real controls work: type in the card boxes (D2), tick the checkbox and press Weiter (D2), click the link in the email (D1, hover shows the real address in the status bar), type in the mIRC box and press Enter (A3, `.sysinfo` makes the machines answer), click list rows to select them (A2, B2, C2), click the Ctrl-Alt-Delete screen to log back on (B4).
- The D2 boxes are plain editable text, not form fields, so Chrome never offers a saved card. Type only fake numbers.

Keys:
- `Space` or `Right arrow`: next step
- `Left arrow`: restart the scene
- `N` / `B`: next / previous scene
- `Z`: slow camera push-in on the important part of the current step (dialog, highlighted line, marked word, form). `Z` again pulls back. Works in every scene; strongest in A2, B2, B3, B4, C2, D2.

URL options (add after `.html`):
- `?clean=1` hides the red SIMULATION badge and the grey source tags. Use it for the final takes; keep a tagged take for the legal and fact-check review.
- `?step=3` opens a scene with the first 3 steps already done (good for stills).
- `?auto=2500` plays the steps by themselves, 2.5 s apart.
- B4 only: `?from=10` starts the countdown at 10 s instead of 60.

Nothing works for real: no page sends, stores or downloads anything, there is no exploit code, and the card number (0000 4417 2093 5518) fails the card checksum. Fictional world: newsroom "MNN" (Meridian News Network, mnn.example machines), card issuer "NordAlp Card", cardholder "Anna Muster", webmail "alpmail.example", hacked site "gartenbau-meier.example". IPs are from 203.0.113.0/24 (reserved for documentation).

What is real and shown on purpose (the subject of the film, quoted by antivirus companies in 2005): botzor.exe, haha.exe, 2pac.txt, the mutex B-O-T-Z-O-R, the startup value "WINDOWS SYSTEM", the two hosts-file lines, the blocked antivirus domains, and the dead server name diabl0.turkcoders.net. Also the exploit's printed text (A1) and the Washington Post chat (A4), both verbatim.

---

## Part A - the worm

**A1 The public exploit** (`a1-exploit.html`, 3 steps)
Step 1 types the command, step 2 prints the banner and the four "...ok" lines, step 3 connects to the new shell and shows `C:\WINNT\system32>`.
Narration fact: Microsoft patched the flaw on Tuesday 9 Aug 2005 (MS05-039). Working exploit code was public 10-12 Aug. Only Windows 2000 could be attacked this way by a stranger.
Real: every printed line is from the published exploit (addresses changed). Not shown: any of its code.

**A2 Inside botzor.exe** (`a2-strings.html`, 7 steps)
Each step highlights one group: mutex, file name, startup keys, the two boast lines, the 127.0.0.1 lines, the server name, the FTP file names.
Narration fact: the boast reads "Made By ...." with four dots. His name is NOT in that line. "Diabl0" appears only in the server name.
Reconstruction: the list is rebuilt from the write-ups; positions are illustrative.

**A3 The control channel** (`a3-irc.html`, 4 steps)
1 connect to diabl0.turkcoders.net port 8080. 2 channel opens, machines join. 3 operator types `.sysinfo`, machines answer. 4 many more join.
Narration fact: infected machines report to a chat server and wait for orders. McAfee lists three commands: sysinfo, download, remove.
Reconstruction: channel name, nicknames, the "." prefix and the reply format were never published. The channel and operator are masked on purpose.

**A4 "only for money"** (`a4-chat.html`, 15 steps)
One press = one message. Diabl0's lines arrive whole (that is how chat works: you never see the other side typing); the researcher's lines are typed in the input line and sent. Pressing again while a line is being typed finishes it at once, so lines never overlap. Key lines: step 7 ("200 complaints"), step 9 ("that worm spread only for money"), step 13 ("ratio of install is 1:1. we dont care if user removed worm").
Look: a 2005 text-mode IRC client in a terminal window, the kind of program that shows private messages as `[nick(user@host)]`, which is the format of the published transcript.
Narration fact: a university security researcher (David Taylor) chatted with "DiablO" about a month before the arrest. Published by Brian Krebs, Washington Post, 29 Aug 2005, "edited slightly for flow". That this was Essebar is the researcher's view, not a court finding. Say "a person using the name Diabl0".
Real: every line verbatim. The researcher's lines are shown as `[msg(DiablO)]`, as in the original chat (the Post replaced that prefix with "Taylor"). Reconstructed: the window and the status bar.

**A5 One machine to the next** (`a5-infection.html`, 6 steps)
Split screen of two Windows 2000 computers. Left, the infected PC's network connections (`netstat -an`): knocks on port 445 at many addresses, then connects. Right, the victim's Task Manager: the hidden programs appear one by one (cmd.exe, ftp.exe, haha.exe, botzor.exe). Step captions at the top disappear with `?clean=1`.
Narration fact: all automatic, no person typed anything. The victim sees nothing on screen; the shell and the download run hidden.
Reconstruction: the connection lines, process IDs and which programs stay open are illustrative; the real 2pac.txt was never published.

**A6 300 threads** (`a6-scan.html`, 2 steps)
Step 1 starts the scan, step 2 speeds it up.
Narration fact: 300 threads, port 445, random addresses that share the first two numbers with the infected machine.
Illustration only.

## Part B - the outbreak

**B1 A normal afternoon** (`b1-desktop.html`, no steps)
Fictional MNN newsroom PC, Windows 2000, Tuesday 16 Aug 2005, 1:24 PM. CNN said on air that reports began "as early as 1:30 Eastern".

**B2 Something is running** (`b2-taskmgr.html`, 3 steps)
1 select botzor.exe in Task Manager. 2 Registry Editor: Run key, "WINDOWS SYSTEM" = "botzor.exe". 3 SharedAccess service, Start = 4 (disabled).
Reconstruction: the other processes are a normal Windows 2000 list; CPU figures illustrative.

**B3 The hosts file** (`b3-hosts.html`, 2 steps)
1 highlight the two lines. 2 slow scroll through the blocked sites.
Narration fact: the worm stopped the machine from reaching antivirus sites, so it could not update or get help.
Reconstruction: the order after the first four domains.

**B4 The countdown - key shot** (`b4-shutdown.html`, 5 steps)
1 dialog appears and counts down from 60 (real time). At zero it goes black by itself, then the "Press Ctrl-Alt-Delete" screen. 2 jump to black early. 3 log back on; 5 seconds later the dialog is back. 4 and 5 repeat.
Press `Z` during the countdown for a slow close-up.
Narration fact: the Plug and Play service lives inside services.exe. When an attack hit it and failed, services.exe crashed and Windows 2000 forced a restart. CNN's Ali Velshi, live, 16 Aug: "This system is shutting down, please save all work ... It shuts down, it turns on."
Reconstruction: no screenshot from a Zotob crash exists. The label "Time before shutdown:", the status code and the logon wording must be checked on a real Windows 2000 SP4 machine before broadcast. Never show a blue screen for Zotob.

**B5 The newsroom wall** (`b5-newsroom.html`, 1 step)
Start, then let it run 30 s or more; every screen is on its own cycle.
Narration fact: Velshi: "My computer upstairs is running Windows XP and it's fine." Say "Zotob and the bots that copied its exploit". Much of the 16 Aug damage came from rival bots, so do not say "Diabl0's worm took down CNN".

## Part C - the hunt and the trial

**C1 The server is gone** (`c1-lookup.html`, 2 steps)
1 one lookup. 2 five more.
Recreated from F-Secure's weblog capture (Aug 2005).

**C2 Two nicknames** (`c2-clues.html`, 3 steps)
1 dim everything else. 2 mark "Coder". 3 mark "diabl0".
Narration fact (F-Secure): "Both nicknames can be found from the code of Zotob.A". The FBI and Microsoft traced them to Rabat and Adana. Arrests on 25 Aug 2005, "less than two weeks" after the worm appeared.

**C3 The outcomes** (`c3-verdict.html`, 5 steps)
Narration fact: the Moroccan court convicted him of conspiracy, theft, use of forged credit cards and illegal access, "in the Zotob case". No court ruled that he wrote Zotob. Ekici's outcome was never made public; do not say "2 years in Turkey".

## Part D - the Swiss card case

**D1 The email** (`d1-email.html`, 3 steps)
1 mark the free-mail reply address. 2 mark the link; the status bar at the bottom shows where it really goes. 3 click through to D2.
Typical of 2011-2012 Swiss card phishing (MELANI reports), not from the case file. Text modelled on a real MELANI example, including the broken characters (&#1100;) and the stray "1" in the subject.

**D2 The card page** (`d2-3dsecure.html`, 5 steps)
1 card number. 2 name, code, expiry. 3 account number, birth date, tick the box. 4 thank-you page. 5 the same page later, flagged by the browser in red.
Layout and field labels copied from the MELANI 2012 screenshot. The thank-you page is illustrative.
Narration fact: no source names the bank or card brand Essebar's ring imitated, so the brand must stay fictional. Say "a phishing ring that tricked cardholders", not "he hacked Swiss banks".

**D3 The case that shrank** (`d3-funnel.html`, 6 steps)
Each figure carries who said it. 133,600 cards and CHF 3.5 million are prosecution figures. "$4 billion" is a Thai police claim. What was held against him in the end: 53 cards, CHF 86,427.28, 180 days; Switzerland paid him CHF 62,880 for over-detention.

---

Preview stills: `./shot.sh <page> "step=N" out/<name>.png` (headless Chrome). Stills in `out/` are previews only.
