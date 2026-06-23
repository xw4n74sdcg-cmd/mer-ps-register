# MER 2026: MER-PS (Physiological Signal-Based Emotion)

MER-PS is a benchmark for continuous emotion decoding from synchronized EEG and fNIRS recordings. The goal is to predict moment-by-moment affective states while participants watch emotion-inducing video clips.

This competition focuses on two-dimensional valence-arousal regression. For each 1 Hz sample, participants should predict:

- `valence`: the pleasantness of the emotional state
- `arousal`: the activation level of the emotional state

Labels use the original MER-PS integer scale `[1, 255]`, with `(128, 128)` representing the center of the valence-arousal plane. Submitted code must predict raw integer label values on this scale.

The benchmark uses a subject-disjoint split. Anonymized subjects `test_1` through `test_24` are used for training and validation, while leaderboard evaluation is performed on 8 separate held-out test subjects. To ensure fair evaluation, the public leaderboard is used for feedback during the competition, while the private leaderboard is used to reduce the risk of overfitting caused by repeatedly adjusting parameters on the public leaderboard. The visible public ranking is computed on 4 held-out test subjects, and the final ranking is computed on another 4 held-out test subjects.

Codabench runs each submitted model on evaluation test data and then scores the generated predictions. Submissions are ranked by overall mean absolute error across valence and arousal. Lower scores indicate better prediction accuracy.

## ⚠️ Important Notice: Team Registration Required Before Submission

> The MER-PS 2026 submission portal is now open.
>
> Before making official submissions, each team must complete the team registration form:
>
> **Team registration page:** [https://xw4n74sdcg-cmd.github.io/mer-ps-register/registration.html](https://xw4n74sdcg-cmd.github.io/mer-ps-register/registration.html)
>
> Only the team leader needs to submit the registration form. The form collects the team name, institution, country/region, and each member's real name, Codabench username, and email address. This information will be used for final result verification and fairness auditing.
>
> **Official submissions must be made using the Codabench account registered with the team leader's email address.** This rule is used to prevent duplicated accounts and unfair use of submission attempts.
>
> Submissions from unregistered, duplicate, or non-leader accounts may be excluded from the final ranking unless the team has received prior approval from the organizers by email.
>
> Each person may belong to only one registered team. Each team should submit the registration form only once. If team information needs to be updated, such as member changes or account corrections, the team leader must contact the organizers by email before the final submission deadline.

## Submission Status

The submission portal officially opened at **21:00 on June 23, 2026 (Asia/Shanghai, UTC+8)**.

Participants may now make official submissions after completing team registration. Please make sure that the submitting Codabench account matches the registered team leader information.

## Contact

If participants have any questions about the MER-PS 2026 competition, including team registration, data access, submission format, evaluation procedure, or platform-related issues, please contact the organizers by email:

**[mer-ps-2026@outlook.com](mailto:mer-ps-2026@outlook.com)**

We will respond as soon as possible.
