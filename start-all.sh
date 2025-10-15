#!/bin/bash

# Start backend server
cd server && npm start &
BACKEND_PID=$!

# Start frontend dev server
npm run dev &
FRONTEND_PID=$!

# Handle cleanup
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT

# Wait for both processes
wait
