# Regression Test Automation

## Summary

> A test that confirms known behaviour on a system in active development is automated before it is run a second time, or the decision not to automate it is recorded and reviewable.

## Standards

1. `std-qe-regression-01` A test that will be re-executed to confirm behaviour that has already passed **MUST** be automated before that re-execution.
2. `std-qe-regression-02` A test exempted from `std-qe-regression-01` **MUST** record the risk it covers, why automating it was judged not worth the cost, and the condition under which that judgement is revisited.

## Implements These Principles

- [Automate Repetitive Testing](../../principles/automate-repetitive-testing.md)
