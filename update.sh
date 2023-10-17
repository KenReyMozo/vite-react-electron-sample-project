#!/bin/bash

# Check if the branch argument is provided, default to "development" if not
from_branch="${1:-development}"
to_branch="${1:-initial/components}"

# Checkout the specified branch
git checkout "$from_branch"
git pull
git checkout "$to_branch"
git merge "$from_branch"
npm run dev