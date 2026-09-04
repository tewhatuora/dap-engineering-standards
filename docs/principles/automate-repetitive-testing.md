# Automate Repetitive Testing

## Summary

> Checking that what already worked still works is work for a machine, not a person.

## Reasoning

Regression testing is the most repeated and least varied work in delivery. Done by
hand its cost scales with the size of the system rather than the size of the change,
so the safest release becomes the one nobody can afford to make.

A person re-running a manual test script also checks worse than a machine does. Attention
degrades across repetition, and the failure mode is silent: the step is marked passed
because it passed last time.

The value a person adds is judgement — noticing that something is odd, asking what
else this change might have touched. That value is spent, not gained, while they are
working through prescribed steps.

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
