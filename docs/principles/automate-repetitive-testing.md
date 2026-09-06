# Automate Repetitive Testing

## Summary

> Checking that what already worked still works is work for a machine, not a person.

## Reasoning

Manual regression testing scales with the size of the system rather than the size of the
change, making releases increasingly costly. Repetitive execution also weakens attention
and can allow missed failures to pass silently.

Human judgement adds most value in exploratory work that evaluates unexpected behaviour
and wider effects rather than in prescribed repetition.

## Commitments

Test engineering becomes a first-class skill on the team, not something spare
capacity absorbs.

Automated tests are code, and come with the same responsibilities as code: review,
refactoring, and maintenance.

Manual testing is not eliminated, it is redirected to exploratory work, where a
person's judgement is what produces the value.

A suite that is slow or unreliable will be ignored. Choosing to automate helps keep it
trustworthy.

## Implemented By These Standards

- [Regression Test Automation](../standards/quality-engineering/regression-test-automation.md)
