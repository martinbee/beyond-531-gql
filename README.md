# beyond-531-gql
GQL layer for a beyond 5/3/1 workout app

## Plan

- use stub or active data for now (in memory)
- add mutations that will update user (one rep maxes, week)
- add mutations that will create workout
- add mutations that will update workout
- add db (postgres?)
- use real data
- update mutations to update db
- add mutations that will create user
- add auth
- look into heroku hosting

## Flow

### New 
- user signs up (auth)
- user adds one rep maxes and week (update user)
- user starts new workout (create workout)
- user adds lifts, or marks things done (update workout)
- user marks workout finished (update workout)
- workout goes into user history (update user)
- user's week gets bumped (update user)

### Existing 
- user signs in (auth)
- app checks for active workouts, if it finds one, continue workout option else:
- user starts new workout (create workout)
- user adds lifts, or marks things done (update workout)
- user marks workout finished (update workout)
- workout goes into user history (update user)
- user's week gets bumped (update user)